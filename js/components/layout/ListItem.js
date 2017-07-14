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
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Divider from './Divider';


const styles = require('../style/ListItem');

 export default class ListItem extends Component {

	render() {
		const { title, icon, leftIcon, divider } = this.props;

		return (
			<View style={styles.container}>
				<View style={[styles.defaultStyle, this.props.style]} >
					{leftIcon && <View style={styles.leftIcon}>
						<Icon {...leftIcon} />
					</View>}
					<View style={styles.title}>
						<Text style={this.props.titleStyle ? [styles.titletxt, this.props.titleStyle] : styles.titletxt}>
							{title}
						</Text>
					</View>
					{icon && <View style={styles.rightIcon}>
						<Icon name={icon.name} color={icon.color} />
					</View>}
				</View>
				{divider && <Divider />}
			</View>
		);
	}
}

ListItem.propTypes = {
    titleStyle: Text.propTypes.style
};
