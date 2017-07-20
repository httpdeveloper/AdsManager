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
		flex: 1,
		flexDirection: 'row',
		padding: 5,
		width: width - 50
	},
	containerLeft: {
		flex: 0.4,
	},
	containerRight: {
		flex: 0.6,
	},
	adImage: {
		width: 100,
		height: 100
	},
	adDesc: {
		flexWrap: 'wrap',
		flex: 1,
		fontSize: 12,
		padding: 3,
	},
	adTitle: {
		fontWeight: 'bold',
		padding: 3,
	},
	adAddr: {
		fontSize: 13,
		padding: 3,
	}
});
