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
		paddingTop: 65,
		backgroundColor: '#f5f5f5'
	},
	adRow: {
		padding: 5,
		backgroundColor: '#fff',
	},
	adRowTitle: {
		flex: 1,
		backgroundColor: '#fff',
	},
	address: {
		marginRight: 10
	},
	createdDate: {
		fontSize: 12,
		marginRight: 10
	},
	adRowHeaderContent: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	adRowDesc: {
		fontSize: 15,
		padding: 5
	},
	adTitle: {
		flex: 1,
		backgroundColor: '#fff',
		fontWeight: 'bold', 
		fontSize: 17,
		padding: 5,
	},
	adRowImage: {
		width: null,
		height: 160,
	},
	createDateWrapper: {
		flex: 1,
		marginLeft: 5,
		marginBottom: 5
	},
	adRowBottom: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 5,
	},
	spinnercontainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	spinner: {
		height: 80
	},
	mapWrapper: {
		height: 300,
	},
	map: {
		height: 300
	},
	markerIcon: {
		width: 30,
		height: 30
	},
	divider: {
		margin: 1,
	},
	headerDetails: {
		fontWeight: 'bold',
		paddingTop: 10,
		paddingLeft: 5,
		paddingBottom: 5,
	},
	headerLocation: {
		fontWeight: 'bold',
		paddingTop: 10,
		paddingLeft: 5,
		paddingBottom: 5,
	},
	adRowProfileImg: {
		width: 40,
		height: 40,
		borderRadius: 20,
		margin: 5
	},
	agent: {
		flex: 1,
		flexDirection: 'row'
	},
	agentProfileImg: {
		flex: 0.2
	},
	agentName: {
		flex: 1,
		padding: 5
	}
});
