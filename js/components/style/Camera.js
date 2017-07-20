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
	height,
	width
} = Dimensions.get('window');

module.exports = StyleSheet.create({
	Container: {
		flex: 1,
	},
	preview: {
		flex: 1,
		position: 'absolute',
		top: 0,
		left: 0,
		width,
		height,
	},
	capture: {
		flex: 1,
		backgroundColor: 'transparent',
		color: '#3F51B5',
		margin: 40,
	},
	cameraoption: {
		flex: 0,
		flexDirection: 'row',
		bottom: 10,
		position: 'absolute',
	},
	toggleview: {
		flex: 0,
		backgroundColor: 'transparent',
		borderRadius: 5,
		color: '#3F51B5',
		margin: 40,
	},
	close: {
		flex: 0,
		margin: 40,
		color: '#3F51B5',
		backgroundColor: 'transparent',
	},
	cameraoptionleft: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	cameraoptionright: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	cameraoptionmiddle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	cameraoptionclose: {
		position: 'absolute',
		top: 0,
		right: 0,
		flex: 0,
	},
	captureimg: {
		width: 30,
		height: 30
	}
});
