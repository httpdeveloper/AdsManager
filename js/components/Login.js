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
  View,
  Animated,
  Alert,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { FBLogin } from '../actions/Login';
import LoginOverlay from './LoginOverlay';

const styles = require('./style/Login');
const companyLogo = require('./img/company.jpg');

 export default class Login extends Component {
	_isMounted: boolean;
	
	constructor(props) { 
		super(props);

		this.state = {
			email: null,
			password: null,
			logInProcess: false,
			error: null,
			fadeAnim: new Animated.Value(0),
			animToValue: 3000,
			animduration: 3000

		};
	}

	componentDidMount() {
		this._isMounted = true;
		Animated.timing(this.state.fadeAnim, { toValue: this.state.animToValue, duration: this.state.animduration }).start();
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	async onPressLogin() {
		this.setState({ logInProcess: true });
		try {
			await Promise.race([
				this.props.dispatch(FBLogin()),
				this.timeout(20000)
			]);
		} catch (error) {
			const message = error.message || error;
			this.setState({ logInProcess: false, error: message });
			if (message !== 'Timed out' && message !== 'Login cancelled') {
				Alert.alert('Ads Manager Login', message);
			}
		} finally {
			this._isMounted && this.setState({ logInProcess: false, error: null }); 
		}
	}

	async timeout(ms) {
		return new Promise((resolve, reject) => {
			setTimeout(() => reject(new Error('Timed out')), ms);
		});
	}

	fadeMe(delay, from = 0) {
		const delayOffset = 500;
		const minInputRange = (delay <= this.state.animToValue) ? delay : this.state.animToValue - delayOffset;
		const maxInputRange = (delay <= this.state.animToValue) ? Math.min(delay + delayOffset, this.state.animToValue) : this.state.animToValue;		
		return {
			opacity: this.state.fadeAnim.interpolate({
				inputRange: [minInputRange, maxInputRange],
				outputRange: [0, 1],
				extrapolate: 'clamp',
			}),
			transform: [{
				translateY: this.state.fadeAnim.interpolate({
				inputRange: [minInputRange, maxInputRange],
				outputRange: [from, 0],
				extrapolate: 'clamp',
			}),
			}],
		};
	}

	render() {
		return (
			<View style={styles.LoginContainer}>
				<Animated.Image style={[styles.imageContainer, this.fadeMe(1, 10)]} source={companyLogo} resizeMode="contain">
					<Animated.View style={[styles.LoginContainerMiddleBtnFBSK, this.fadeMe(1500, 20)]}>
						<LinearGradient
							start={{ x: 0.0, y: 0.2 }} end={{ x: 0.5, y: 1.0 }}
							colors={['#303F9F', '#3F51B5']}
							style={styles.linearGradient}
						>
							<Animated.Text onPress={this.onPressLogin.bind(this)} style={[styles.loginbtntxt, this.fadeMe(2000, 20)]}>
								Login with Facebook
							</Animated.Text>
						</LinearGradient>
					</Animated.View>
				</Animated.Image>
				<LoginOverlay logInProcess={this.state.logInProcess} />
			</View>
		);
	}
}
