/**
 *	Copyright (c) 2017 Dinesh Maharjan <httpdeveloper@gmail.com>
 *
 *	Permission is hereby granted, free of charge, to any person obtaining a copy of 
 *	this software and associated documentation files (the "Software"), to deal in 
 *	the Software without restriction, including without limitation the rights to 
 *	use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
 *	of the Software, and to permit persons to whom the Software is furnished to do so,
 *	subject to the following conditions:
 *
 *	The above copyright notice and this permission notice shall be 
 *	included in all copies or substantial portions of the Software.
 *
 *	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
 *	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 *	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
 *	COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
 *	CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
 *	OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import {
  View,
  CameraRoll,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
  PermissionsAndroid
} from 'react-native';

const styles = require('./style/Media');

class Media extends Component {

	constructor(props) {
		super(props);

		this.state = {
			images: null,
			selectedImage: null,
			hasReadPermission: false
		};
	}

	componentDidMount() {
		this.getPhotos();
	}

	onSelectImage(imgpath) {
		if (imgpath) {
			this.setState({ selectedImage: imgpath });
			this.props.dispatch({ 
				type: 'MEDIA_SET_SELECTED_IMAGE', 
				payload: { path: imgpath, selected: false } 
			});
		}
	}

	async getPhotos() {
		const fetchParams = {
			first: 50,
			assetType: 'Photos',
		};


		await CameraRoll.getPhotos(fetchParams).then(
			(data) => {
				const assets = data.edges;
				const images = assets.map((asset) => asset.node.image);
				this.setState({
					images
				});
			},
			(error) => {
				console.log(error);
				}
			);
	}

	async requestReadPermission() {
		try {
			const granted = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
			{
				title: 'Ads Manager',
				message: 'Ads Manager App needs access to your camera photos'
			});
			if (granted === true || granted === PermissionsAndroid.RESULTS.GRANTED) {
				this.setState({ hasReadPermission: true });
				this.getPhotos();
			} 
		} catch (err) {
			console.warn(err);
		}
	}

	takePicture() {
		Actions.camera({ library: this });
	}

	render() {
		if (Platform.OS === 'android' && !this.state.hasReadPermission) {
			this.requestReadPermission();
			return <View />;
		}
		return (
			<ScrollView>
				<View style={styles.Container}>
					<View style={styles.wrapper}>
						<TouchableOpacity onPress={() => this.takePicture()}>
							<View style={[styles.mediarow, styles.camera]} >
								<Icon size={30} style={styles.cameraicon} name="camera" />
							</View>
						</TouchableOpacity>
						{this.state.images && this.state.images.map((image, index) => 
							<TouchableOpacity key={index} onPress={() => this.onSelectImage(image.uri)}>
								<View style={this.state.selectedImage === image.uri ? styles.selectedrow : styles.mediarow}>
									<Image style={styles.image} source={{ uri: image.uri }} />
								</View>
							</TouchableOpacity>
						)}
					</View>
				</View>
			</ScrollView>
		);
	}
}

export default connect()(Media);
