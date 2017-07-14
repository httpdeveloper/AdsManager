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
  Platform
} from 'react-native';

import AdsList from '../containers/AdsList';
import AdsGrid from '../containers/AdsGrid';
import AdsMap from '../containers/AdsMap';


const ScrollableTabView = require('react-native-scrollable-tab-view');

const styles = require('./style/Dashboard');

export default class Dashboard extends Component {
		render() {
			return (
				<View style={Platform.OS === 'ios' ? styles.adscontainer : styles.adscontainerandroid}>
					<ScrollableTabView 
						tabBarUnderlineStyle={styles.tabBarUnderlineStyle} 
						tabBarActiveTextColor='#fff'
						tabBarBackgroundColor='#3F51B5'
						tabBarInactiveTextColor='#fff'
					>
						<AdsList tabLabel="LIST" />
						<AdsGrid tabLabel="GRID" />
						<AdsMap tabLabel="MAP" />
					</ScrollableTabView>
				</View>
				
			);
		}
}
