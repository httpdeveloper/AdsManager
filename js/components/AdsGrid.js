/**
 *  Copyright (c) 2017 Dinesh Maharjan <httpdeveloper@gmail.com>
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy of 
 *  this software and associated documentation files (the "Software"), to deal in 
 *  the Software without restriction, including without limitation the rights to 
 *  use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
 *  of the Software, and to permit persons to whom the Software is furnished to do so,
 *  subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be 
 *  included in all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
 *  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
 *  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
 *  CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
 *  OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

'use strict';  

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Text,
  View,
  ActivityIndicator,
  ListView,
  ScrollView,
  Dimensions
} from 'react-native';

import { fetchGridAds, fetchGridOldAds } from '../actions/Ads';
import { Divider } from './layout/Index';
import FooterLoading from './FooterLoading';
import NoAds from './NoAds';
import NetworkImage from './NetworkImage';

const styles = require('./style/Grid');

const { height } = Dimensions.get('window');

export default class AdsGrid extends Component {
   constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2, 
                                        sectionHeaderHasChanged: (s1, s2) => s1 !== s2 });
    this.state = {
        refreshing: false,
    };
  }
  
  componentWillMount() {
     this.props.dispatch(fetchGridAds());
  }

  onScrollGrid(evt) {
      if (evt.nativeEvent.contentOffset.y + height >= evt.nativeEvent.contentSize.height && !this.props.oldfetching) {
          this.props.dispatch(fetchGridOldAds());
      }
  }

  getLoadingSpinner() {
        return (<View style={styles.spinnercontainer}>
                  <ActivityIndicator
                    animating={true}
                    style={styles.spinner}
                    color={'#3F51B5'}
                  />
              </View>);
  }

  render() {
    const { ads, fetching, fetched } = this.props;
    if (fetching) {
      return this.getLoadingSpinner();
    }
    if (fetched && !ads) {
        return <NoAds />;
    }
    return (
      <ScrollView 
            ref={(scrollView) => { this._scrollView = scrollView; }} 
            scrollEventThrottle={1}
            onScroll={this.onScrollGrid.bind(this)}
      >
        <View style={styles.container}>
          {ads.map((ad) => 
            <View style={styles.adRow} key={ad.id}>
              <View style={styles.subContainer}>
                  <View style={styles.topContainer}>
                    <NetworkImage style={styles.adRowImage} source={{ uri: ad.image }} />
                  </View>
                   <View style={styles.middleContainer}>
                      <Text numberOfLines={1} onPress={() => Actions.ad({ id: ad.id, title: ad.title })} style={styles.adTitle}>
                          {ad.title}
                      </Text>
                      <Text style={styles.address}>{ad.address}</Text>
                      <Text numberOfLines={3} style={styles.adRowDesc}>{ad.description}</Text>
                  </View>
                   <View style={styles.bottomContainer}>
                   <Divider style={styles.divider} />
                     <View style={styles.adRowBottom}>
                    <Text><Icon name="thumbs-o-up" /></Text>
                      <Text onPress={() => Actions.ad({ id: ad.id, title: ad.title })}>
                        <Icon name="comment-o" />
                      </Text>
                     <Text><Icon name="heart-o" /></Text>
               </View>
                  </View>
              </View>
            </View>
          )}
        </View>
        <FooterLoading showmore={this.props.oldfetching} />
      </ScrollView>
    );
  }
}
