/**
 *  Copyright (c) 2017 Dinesh Maharjan <httpdeveloper@gmail.com>
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy of 
 *  this software and associated documentation files (the "Software"), to deal in 
 *  the Software without restriction, including without limitation the rights to 
 *  use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
 *  of the Software, and to permit persons to whom the Software is furnished to do so,
 *  subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be 
 *  included in all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
 *  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
 *  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
 *  CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
 *  OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

'use strict';

import React, { Component } from 'react';
import { View, 
  TextInput, 
  Text, 
  TouchableOpacity, 
  ActivityIndicator,
  Platform,
  Image,
  ScrollView,
  Alert,
} from 'react-native';

import Geocoder from 'react-native-geocoder';
import { Actions } from 'react-native-router-flux';
import RNFetchBlob from 'react-native-fetch-blob';
import ProgressBar from 'react-native-simple-progressbar';

import { setting } from '../setting';
import client from '../client';
import { userQuery } from '../actions/graphql/Queries';
import { Divider } from './layout/Index';

if (Platform.OS === 'android') {
  Geocoder.fallbackToGoogle(setting.GOOGLE_MAP_API_KEY);
}

const styles = require('./style/CreateAd');

export default class CreateAd extends Component {

  watchID: ?number = null;
  geocoding: false;

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      image: '',
      address: '',
      latitude: '',
      longitude: '',
      inputErr: null,
      formProcessing: false,
      written: 0,
      showProgressBar: true,
      size: 0,
      fbuser: {
        id: '',
        name: '',
        image: '',
        email: ''
      },
      progressValue: 0,
      contentHeight: 0
    };
  }

  componentDidMount() {
    this.setState({ fbuser: this.props.user });
    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (position) {
            this.setState({ 
                latitude: position.coords.latitude.toString(), 
                longitude: position.coords.longitude.toString() 
            });

            const latlng = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            this.geocoding = true;
            Geocoder.geocodePosition(latlng).then(res => {
                if (res && this.geocoding) {
                  const address = res[0].formattedAddress;
                  this.setState({ address });
                }
            })
            .catch(err => console.log(err));
        }
      },
      (error) => console.log(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
        if (position) {
          this.setState({ 
              latitude: position.coords.latitude.toString(), 
              longitude: position.coords.longitude.toString() 
          });

          const latlng = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            this.geocoding = true;
            Geocoder.geocodePosition(latlng).then(res => {
                if (res && this.geocoding) {
                  const address = res[0].formattedAddress;
                  this.setState({ address });
                }
            })
            .catch(err => console.log(err));
        }
    });
  }

  componentWillUnmount() {
    this.geocoding = false;
    navigator.geolocation.clearWatch(this.watchID);
  }

  /**
   * Upload/Choose picture and submit
   * @return Promise
   */
  async _uploadImage() {
       return await RNFetchBlob.fetch('POST', setting.IMAGE_UPLOAD_API, {
          Authorization: 'Bearer ' + setting.IMAGE_UPLOAD_API_ACCESS_TOKEN,
          'Content-Type': 'multipart/form-data',
        }, [
          {
            name: 'advertisementPhoto',
            filename: 'advertisementPhoto.jpg',
            data: RNFetchBlob.wrap(this.props.imagePath)
          },
          { name: 'userId', data: this.state.fbuser.id }
        ]).uploadProgress((written, total) => {
          this.setState({ written: parseInt(written, 10), size: parseInt(total, 10) });
        });
  }
  /**
   * Save ad
   * @param  {[type]} userId [description]
   * @return Promise
   */
  async _saveAd(userId) {
      const { title, description, address, latitude, longitude, image } = this.state;
      const latitudeX = parseFloat(latitude);
      const longitudeX = parseFloat(longitude);

      return await this.props.postAdMutation({
         variables: { 
                      title, 
                      description, 
                      image, 
                      address, 
                      latitude: latitudeX, 
                      longitude: longitudeX, 
                      userId
                    }
        });
  }
  /**
   * Save user 
   * @return Promise
   */
  async _saveUser() {
    return await this.props.createUserMutation({
         variables: { 
                      fbuserid: this.state.fbuser.id, 
                      name: this.state.fbuser.name, 
                      image: this.state.fbuser.image,
                      email: this.state.fbuser.email
                    }
        });
  }

  /**
   * Get Apollo User
   * @return Promise
   */
  async _getApolloUser() {
      return await client.query({
          query: userQuery,
          variables: { fbuserid: this.state.fbuser.id }
        }).then((userResp) => {
            if (userResp.data.User) {
               return userResp.data.User;
            } else {
                return this._saveUser().then((newUser) => {
                    if (newUser.data) { 
                      return newUser.data.createUser;
                    }
                });
            }
        });
  }

  /**
   * Reset form inputs after successfully ad created
   * @return void
   */
  
  resetForm() {
     this.setState({ 
        title: '', 
        description: '', 
        image: '', 
        inputErr: null, 
        formProcessing: false 
    });
  }

  /**
   * Validate form inputs
   * @return bool
   */
  
  _validate() {
       const { title, description, address, latitude, longitude, fbuser } = this.state;

        const errorMsg = [];

        if (title === '' || !(/\S/.test(title))) errorMsg.push('Title');
        if (description === '' || !(/\S/.test(description))) errorMsg.push('Description');
        if (!this.props.imageSelected) errorMsg.push('Image');
        if (address === '' || !(/\S/.test(address))) errorMsg.push('Address');
        if (latitude === '' || !(/\S/.test(latitude))) errorMsg.push('Latitude');
        if (longitude === '' || !(/\S/.test(longitude))) errorMsg.push('Longitude');
        if (fbuser.id === '') errorMsg.push('User');

        if (errorMsg.length > 0) {
            this.setState({ formProcessing: false, inputErr: 'Required fields are missing: ' + errorMsg.join(', ') });
            return false;
        }

        return true;
  }

  /**
   * Create Ad
   * @return Void
   */
  async createAd() {
        if (this.state.formProcessing) return;
        const formValidate = this._validate();
        if (formValidate) {
          this.setState({ inputErr: null, formProcessing: true });
          this._uploadImage().then((uploadResp) => { //First upload image
              const jsonData = JSON.parse(uploadResp.data);
              if (jsonData.status) {
                  this.setState({ image: jsonData.picUrl, written: parseInt(this.state.size, 10) });
                  return this._getApolloUser(); // Get Apollo User
              } else {
                this.setState({ formProcessing: false, inputErr: jsonData.msg });
                this._ref.scrollTo({ x: 0, y: 0, animated: true });
                return Promise.reject(jsonData.msg);
              }
          }).then((user) => {
              return this._saveAd(user.id); // Save Ad
          }).then(() => {
            this.resetForm();
            Alert.alert('Ads Manager', 'Ad Saved Successfully');
          }).catch((err) => {
            this.setState({ formProcessing: false, inputErr: err.toString() });
            this._ref.scrollTo({ x: 0, y: 0, animated: true });
          });
        } else {
          this._ref.scrollTo({ x: 0, y: 0, animated: true });
        }
  }

  render() {
    return (
      <ScrollView onContentSizeChange={(contentWidth, contentHeight) => this.setState({ contentHeight })} ref={(ref) => { this._ref = ref; }}>
      <View style={styles.container}>
          {this.state.inputErr && <Text style={styles.inputErr}>{this.state.inputErr}</Text>}
          <View style={styles.inputRow}>
            <Text style={styles.inputHeading}>Title</Text>
            <TextInput
              style={styles.inputStyle}
              placeholder='Title...'
              onChangeText={(text) => this.setState({ title: text })}
              value={this.state.title}
              autoCapitalize='none'
              underlineColorAndroid='transparent'
            /><Divider style={styles.divider} />
          </View>
          <View style={styles.inputRow}>
              <Text style={styles.inputHeading}>Description</Text>
              <TextInput
                style={styles.descriptionInput}
                placeholder='Description...'
                onChangeText={(text) => this.setState({ description: text })}
                value={this.state.description}
                multiline={true}
                autoCapitalize='none'
                underlineColorAndroid='transparent'
                placeholderTextColor="#888"
              /><Divider style={styles.divider} />
          </View>
           <View style={styles.inputRow}>
              <Text style={styles.inputHeading}>Address</Text>
              <TextInput
                style={styles.inputStyle}
                placeholder='Address calculating...'
                onChangeText={(text) => this.setState({ address: text })}
                value={this.state.address}
                autoCapitalize='none'
                underlineColorAndroid='transparent'
              /><Divider style={styles.divider} />
          </View>

           <View style={styles.inputRow}>
              <Text style={styles.inputHeading}>Latitude</Text>
              <TextInput
                style={styles.inputStyle}
                placeholder='latitude...'
                onChangeText={(text) => this.setState({ latitude: text })}
                value={this.state.latitude}
                autoCapitalize='none'
                underlineColorAndroid='transparent'
              /><Divider style={styles.divider} />
          </View>

           <View style={styles.inputRow}>
              <Text style={styles.inputHeading}>Longitude</Text>
              <TextInput
                style={styles.inputStyle}
                placeholder='Longitude...'
                onChangeText={(text) => this.setState({ longitude: text })}
                value={this.state.longitude}
                autoCapitalize='none'
                underlineColorAndroid='transparent'
              /><Divider style={styles.divider} />
          </View>

          <View style={styles.inputRow}>
            <View style={styles.inputRowImgBrowse}>
                {this.props.imageSelected && 
                  <View style={styles.inputRowImgBrowseLeft}>
                      <Image source={{ uri: this.props.imagePath }} style={styles.selectedImage} />
                  </View>
                }
                  <View style={styles.inputRowImgBrowseRight}>
                      <View style={styles.photoButton}>
                        <ProgressBar width={150} progress={this.state.written} size={this.state.size} />
                        <Text onPress={() => Actions.media()}>Photo</Text>
                      </View>
                  </View>
            </View>
          </View>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => this.createAd()}
          >
            <Text style={styles.saveButtonText}>Post</Text>
          </TouchableOpacity>
        </View>

       {this.state.formProcessing ? <View style={[styles.formProcessingWrapper, { height: this.state.contentHeight }]}>
            <View style={styles.formProcessingMsg}>
              <ActivityIndicator
                  animating={true}
                  color={'#3F51B5'}
                  style={styles.spinner}
              />
                <Text style={styles.processingTxt}>  
               Please wait. Processing..</Text>
            </View>
        </View> : <View />}
        </View>
      </ScrollView>
    );
  }
}
