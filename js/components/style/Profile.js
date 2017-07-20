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
  StyleSheet
} from 'react-native';

module.exports = StyleSheet.create({
	menucontainer: {
		justifyContent: 'center',
		margin: 5,
		padding: 10,
	},
	pagecontainer: {
		justifyContent: 'center',
		margin: 5,
		paddingTop: 60,
	},
	profileimg: {
		width: 40,
		height: 40,
		borderRadius: 20,
		marginTop: 10
	},
	profilename: {
		
		color: '#000',
		fontWeight: 'bold',
		marginTop: 5
	},
	spinnercontainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	spinner: {
		height: 80
	}
});
