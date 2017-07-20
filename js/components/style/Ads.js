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
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5'
	},
	adRow: {
		padding: 5,
		backgroundColor: '#fff',
		marginBottom: 5
	},
	adRowHeader: {
		flex: 1,
		backgroundColor: '#fff',
	},
	adRowHeaderContent: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	adRowDesc: {
		fontSize: 15,
		paddingTop: 5,
		paddingRight: 10,
		paddingBottom: 5
	},
	divider: {
		margin: 5
	},
	adTitle: {
		fontWeight: 'bold',
		fontSize: 17,
		padding: 5,
		margin: 5
	},
	address: {
		marginRight: 10
	},
	adRowImage: {
		width: null,
		height: 160,
		flex: 1
	},
	createDateWrapper: {
		flex: 1,
		marginLeft: 10,
		marginBottom: 5
	},
	DescImgWrapper: {
		flex: 1,
		flexDirection: 'row'
	},
	DescImgWrapperLeft: {
		flex: 0.2,
		alignItems: 'center',
	},
	DescImgWrapperRight: {
		flex: 1,
		paddingRight: 5,
		backgroundColor: '#fff'	
	},
	adRowProfileImg: {
		width: 30,
		height: 30,
		borderRadius: 15,
		margin: 5
	},
	createdDate: {
		fontSize: 12,
		marginRight: 10
	},
	adRowBottom: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 5
	},
	spinnercontainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	spinner: {
		height: 80
	},
});
