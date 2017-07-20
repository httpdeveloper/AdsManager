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

import {
	StyleSheet,
	Dimensions
} from 'react-native';

const {
	width,
} = Dimensions.get('window');

module.exports = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
	searchbar: {
		position: 'absolute',
		top: 0,
		left: 0,
		width,
		backgroundColor: '#f5f5f5',
		padding: 20,
		opacity: 0.5,
	},
	bottom: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		width,
		justifyContent: 'space-around'
	},
	bottomTxt: {
		fontWeight: 'bold',
		padding: 10
	},
	searchtxt: {
		padding: 10,
		fontWeight: 'bold'
	},
	spinnercontainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	spinner: {
		height: 80,
	},
	blank: {
		flex: 0,
		backgroundColor: '#3F51B5'
	},
});
