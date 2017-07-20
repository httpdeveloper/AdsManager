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

const { width } = Dimensions.get('window');

module.exports = StyleSheet.create({
	container: {
		height: 50,
	},
	defaultStyle: {
		flex: 1,
		margin: 5,
		padding: 5,
		flexDirection: 'row',
	},
	title: {
		flex: 1,
		justifyContent: 'center'
	},
	rightIcon: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-end',
		marginRight: 10
	},
	leftIcon: {
		flex: 0.1,
		justifyContent: 'center',
		alignItems: 'flex-start'
	},
	titletxt: {
		padding: 5,
		fontSize: 16,
		color: '#999',
	},
	divider: {
		width
	}
});
