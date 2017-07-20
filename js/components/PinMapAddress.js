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
import {
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  Platform
} from 'react-native';

import MapView from 'react-native-maps';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Autocomplete from './PlaceAutocomplete';
import MapCustomMarker from './MapCustomMarker';

const styles = require('./style/PinMapAddress');

export default class PinMapAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
       region: {
          latitude: 0,
          longitude: 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
       },
       pinedMarker: {
          latitude: 0,
          longitude: 0,
       },
       address: null,
       text: '',
       hideModal: false,
       mapType: 'standard',
       searching: false,
       hasLocation: false,
       searchInterval: null
    };
  }

  componentDidMount() {
      if (Platform.OS === 'android') StatusBar.setBackgroundColor('transparent');
      if (this.props.location) {
         const oldregion = { ...this.state.region, latitude: this.props.location.latitude, longitude: this.props.location.longitude };
         this.setState({ region: oldregion, pinedMarker: oldregion, address: this.props.location.address, hasLocation: true });
      }
  }

  componentWillReceiveProps(props) {
    if (!this.state.hasLocation) {
      const oldregion = { ...this.state.region, latitude: props.location.latitude, longitude: props.location.longitude };
      this.setState({ region: oldregion, pinedMarker: oldregion, address: props.location.address, hasLocation: true });    
    }
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  getCustomStyle() {
    let backgroundColor = 'transparent';
    if (this.state.text) {
        backgroundColor = '#F5F5F5';
    }
    return { backgroundColor };
  }

  onLocate() {
      if (this.state.pinedMarker) {
        this.setState({ hideModal: true });
        if (Platform.OS === 'android') StatusBar.setBackgroundColor('#3F51B5');
        const payload = { address: this.state.address, latitude: this.state.pinedMarker.latitude, longitude: this.state.pinedMarker.longitude };
        this.props.dispatch({ type: 'SET_LOCATION', payload });
        setTimeout(() => {
          Actions.pop();
        }, 500);
     }
  }

  onClose() {
    this.setState({ hideModal: true });
    if (Platform.OS === 'android') StatusBar.setBackgroundColor('#3F51B5');
    setTimeout(() => {
      Actions.pop();
    }, 500);
  }
  
  onPressMapType(mapType) {
      this.setState({ mapType });
  }

  onRefAutocomplete(ref) {
    if (ref && ref.state.dataSource) {
      if (this.state.searching && this.state.text.length >= 2 && !this.state.searchInterval) {
          let time = 0;
          const timeout = 10;
          this.setState({ searchInterval: true });

          const searchInterval = setInterval(() => {
            time++;
            if (ref.state.dataSource && ref.state.dataSource.getRowCount() > 0) {
              this.setState({ searching: false, searchInterval: false });
               clearInterval(searchInterval);
            }

            if (time >= timeout) {
               clearInterval(searchInterval);
              this.setState({ searching: false, searchInterval: false });
            }
          }, 1000);
      } 
    }
  }

  getLoadingSpinner() {
      return (<View style={styles.spinnercontainer}>
                <ActivityIndicator
                  animating={true}
                  color={'#3F51B5'}
                  style={styles.spinner}
                />
            </View>);
  }
  
  render() {  
   if (this.state.hideModal) return <View style={styles.blank} />;
    return (
      <View style={styles.container}>
          <MapView
            mapType={this.state.mapType}
            style={styles.map}
            region={this.state.region}
            onRegionChangeComplete={this.onRegionChange.bind(this)}

          >
            <MapView.Marker
              coordinate={{ latitude: this.state.pinedMarker.latitude, longitude: this.state.pinedMarker.longitude }}
              draggable={true}
              onDragEnd={(e) => this.setState({ pinedMarker: e.nativeEvent.coordinate })}
              title={'Drag to reposition'}
            >  
              <MapCustomMarker key={this.state.mapType} mapType={this.state.mapType} />
            </MapView.Marker>  
             
          </MapView>
          <View style={styles.bottom}>
            {this.state.hasLocation && <Text onPress={this.onLocate.bind(this)} style={styles.bottomTxt}><Icon name="map-marker" /> Locate</Text>}
             {this.state.hasLocation && <Text style={styles.bottomTxt} onPress={() => this.onPressMapType('standard')}>Standard</Text>}
            {this.state.hasLocation && <Text style={styles.bottomTxt} onPress={() => this.onPressMapType('satellite')}>Statellite</Text>}
            {this.state.hasLocation && <Text style={styles.bottomTxt} onPress={() => this.onPressMapType('hybrid')}>Hybrid</Text>}
            <Text onPress={this.onClose.bind(this)} style={styles.bottomTxt}>Close</Text>
            </View>
          <View style={[styles.searchbar, this.getCustomStyle()]}>
                <Autocomplete 
                    onRef={this.onRefAutocomplete.bind(this)}
                    onSearch={(result) => {
                    if (result) {
                       const newRegion = { ...this.state.region, latitude: result.latlng.lat, longitude: result.latlng.lng };
                       this.setState({ searching: false, region: newRegion, address: result.address, pinedMarker: { latitude: result.latlng.lat, longitude: result.latlng.lng } });
                    } else {
                       this.setState({ searching: false });
                    }
                  }} 
                  textInputProps={{ onChangeText: (text) => (text.length >= 2 ? this.setState({ text, searching: true }) : this.setState({ text, searching: false })) }}
                  getDefaultValue={() => this.props.location && this.props.location.address}
                >
                {this.state.searching && this.getLoadingSpinner()}
                </Autocomplete>
          </View>

      </View>
    );
  }
}
