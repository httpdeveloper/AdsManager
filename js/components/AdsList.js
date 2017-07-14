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

import {
  Text,
  View,
  ActivityIndicator,
  ListView,
  RefreshControl,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { fetchOldAds, fetchNewAds } from '../actions/Ads';
import { Divider } from './layout/Index';
import FooterLoading from './FooterLoading';
import NewAdNotification from './NewAdNotification';
import NoAds from './NoAds';
import NetworkImage from './NetworkImage';

const moment = require('moment');
const styles = require('./style/Ads');

export default class AdsList extends Component {
   constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2, 
                                        sectionHeaderHasChanged: (s1, s2) => s1 !== s2 });
    this.state = {
        refreshing: false,
    };
  }
  
  getJobsLoadingSpinner() {
      return (<View style={styles.spinnercontainer}>
                <ActivityIndicator
                  animating={true}
                  color={'#3F51B5'}
                  style={styles.spinner}
                />
            </View>);
  }
   getListItemsWithSection(ads) {
         const listItems = {};
         ads.forEach((list) => {
             if (!listItems[list.id]) {
                listItems[list.id] = [];
             }
            listItems[list.id].push(list);
        });

      return listItems;
    }
  getSectionIDs(ads) {
       const sectionIds = [];

       if (ads.length > 0) {
           ads.forEach((ad) => {
            sectionIds.push(ad.id);
           });
       }
       return sectionIds;
  }

  _onRefresh() {
      this.setState({ refreshing: true });
      this.props.dispatch(fetchNewAds());

      if (this.props.fetched) {
        this.setState({ refreshing: false });
      }
    }

  _onEndReached() {
    this.props.dispatch(fetchOldAds());
  }

  _renderFooterContent() {
      return <FooterLoading showmore={this.props.oldfetching} />;
  }

  _renderRow(item) {
    return (
         <View key={item.id} style={styles.adRow}>
              <View style={styles.DescImgWrapper}>
                {item.user && <View style={styles.DescImgWrapperLeft}>
                    <Image style={styles.adRowProfileImg} source={{ uri: item.user.image }} />
                </View>}
                <View style={styles.DescImgWrapperRight}>  
                    <NetworkImage key={item.id} source={{ uri: item.image }} resizeMode="cover" />
                    <Text numberOfLines={4} style={styles.adRowDesc}>{item.description}</Text>
                </View>
             </View>
             <Divider style={styles.divider} />
             <View style={styles.adRowBottom}>
                  <Text><Icon name="thumbs-o-up" /> Like</Text>
                   <Text onPress={() => Actions.ad({ id: item.id, title: item.title })}>
                      <Icon name="comment-o" /> Comments
                    </Text>
                   <Text><Icon name="heart-o" /> Save</Text>
             </View>
         </View>
    );
  }

  _renderSectionHeader(sectionData) {
    return (<View style={styles.adRowHeader}>
     <View>
        <View style={styles.adRowHeaderContent}>
          <Text onPress={() => Actions.ad({ id: sectionData[0].id, title: sectionData[0].title })} style={styles.adTitle}>
            {sectionData[0].title}
          </Text>
          <Text style={styles.createdDate}>
              {moment(sectionData[0].createdAt).fromNow()}
          </Text>
          </View>
      </View>
      <View style={styles.createDateWrapper}>
         <Text style={styles.address}>
              {sectionData[0].address} 
          </Text>
      </View>
      </View>);
  }

  render() {
    const { ads, fetching, fetched } = this.props;
    if (fetching) {
      return this.getJobsLoadingSpinner();
    }

    if (fetched && !ads) {
        return <NoAds />;
    }

    return (
      <View style={styles.container}>
        <ListView
          refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
              />
          }
          dataSource={this.ds.cloneWithRowsAndSections(this.getListItemsWithSection(ads), this.getSectionIDs(ads))}
          renderRow={this._renderRow.bind(this)}
          renderSectionHeader={this._renderSectionHeader.bind(this)}
          onEndReached={this._onEndReached.bind(this)}
          renderFooter={this._renderFooterContent.bind(this)}
          onEndReachedThreshold={0.1}
        />
        <NewAdNotification {...this.props} />
      </View>
    );
  }
}
