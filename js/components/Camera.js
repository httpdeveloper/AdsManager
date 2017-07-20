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
import {
  Text,
  View,
  Image,
  StatusBar,
  Platform,
  PermissionsAndroid
} from 'react-native';


import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Camera from 'react-native-camera';

const styles = require('./style/Camera');

export default class Photo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cameraType: 'back',
			captureImage: null,
			hasCameraPermission: false
		};
	}

	componentDidMount() {
		if (Platform.OS === 'android') StatusBar.setBackgroundColor('transparent');
	}

	async requestCameraPermission() {
		try {
			await PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.CAMERA, 
					PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE]
			).then((res) => {
				let permissionGranted = true;
				Object.keys(res).forEach((key) => {
					if (res[key] !== 'granted' && res[key] !== true) {
						permissionGranted = permissionGranted && false;
					}
				});
				
				if (permissionGranted) {
					this.setState({ hasCameraPermission: true });
				}
			});
		} catch (err) {
			console.warn(err);
		}
	}

	takePicture() {
		const options = {};
		this.camera.capture({ metadata: options })
		.then((data) => { 
			this.setState({ captureImage: data.path });
		})
		
		.catch(err => console.error(err));
	}

	toggleview() {
		const cameraType = (this.state.cameraType === 'back') ? 'front' : 'back';
		this.setState({ cameraType });
	}

	closeCamera() {
		Actions.pop();
		if (this.props.library) this.props.library.getPhotos();
		if (Platform.OS === 'android') StatusBar.setBackgroundColor('#3F51B5');
	}

	render() {
		if (Platform.OS === 'android' && !this.state.hasCameraPermission) {
			this.requestCameraPermission();
			return <View />;
		}
		return (
			<View style={styles.Container}>
				<Camera
					ref={(cam) => {
					this.camera = cam;
					}}
					type={this.state.cameraType}
					style={styles.preview}
					aspect={'fill'}
				>
					<View style={styles.cameraoption}>
						<View style={styles.cameraoptionleft} >
							{this.state.captureImage ? <Image style={styles.captureimg} source={{ uri: this.state.captureImage }} /> : null}
						</View>
						<View style={styles.cameraoptionmiddle}>
							<Text style={styles.capture} onPress={this.takePicture.bind(this)}>
							<Icon size={30} name="circle-o" />
							</Text>
						</View>
						<View style={styles.cameraoptionright}>
							<Text style={styles.toggleview} onPress={this.toggleview.bind(this)}>
								<Icon size={30} name="refresh" />
							</Text>
						</View>
					</View>
					<View style={styles.cameraoptionclose}>
					<Text onPress={this.closeCamera.bind(this)} style={styles.close}>
						<Icon size={30} name="times" />
					</Text>
					</View>
				</Camera>
			</View>
		);
	}
}
