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
  Image,
  ScrollView
} from 'react-native';

import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import { fetchAd } from '../actions/Ad';
import { Divider } from './layout/Index';
import MapCustomTooltip from './MapCustomTooltip';
import MapCustomMarker from './MapCustomMarker';
import { getCenterRegion } from '../helpers/map';
import NetworkImage from './NetworkImage';

const moment = require('moment');
const styles = require('./style/Ad');

export default class AdDetail extends Component {
  
  componentWillMount() {
     this.props.dispatch(fetchAd(this.props.id));
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

  noJob() {
     return (<View style={styles.container}>
            <Text>Ad Not Found.</Text>
      </View>);
  }
  
  render() {
    const { fetching, ad } = this.props;
    if (fetching) {
      return this.getJobsLoadingSpinner();
    }

      if (!ad) {
      return this.noJob();
    }

    const mapArr = [];
    mapArr.push({ latitude: ad.latitude, longitude: ad.longitude });

    const region = getCenterRegion(mapArr);
    
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
           <View style={styles.adRow}>
            <View>
                  <View style={styles.adRowHeaderContent}>
                      <Text style={styles.adTitle}>{ad.title}</Text>
                      <Text style={styles.createdDate}>{moment(ad.createdAt).fromNow()}</Text>
                  </View>
                  <View style={styles.createDateWrapper}>
                      <Text style={styles.address}>{ad.address}</Text>
                  </View>
                </View>
                <NetworkImage key={ad.id} source={{ uri: ad.image }} style={styles.adRowImage} />

                <Text style={styles.headerDetails}>Details: </Text>
                 <Divider style={styles.divider} />
                 <Text style={styles.adRowDesc}>{ad.description}</Text>
                
                 <Text style={styles.headerLocation}>Location: </Text>
                 <Divider style={styles.divider} />

                 <View style={styles.mapWrapper}>
                 
                     
                      <MapView
                        style={styles.map}
                        region={region}
                      >
                      <MapView.Marker
                        coordinate={{ latitude: ad.latitude, longitude: ad.longitude }}
                        title={ad.title}
                        description={ad.description}
                      >  
                          <MapCustomMarker mapType={'standard'} />

                             <MapView.Callout>
                                <MapCustomTooltip {...ad} />
                            </MapView.Callout>
                         </MapView.Marker>
                     </MapView>
                  </View>
                  
                 <Text style={styles.headerDetails}>Agent: </Text>
                 <Divider style={styles.divider} />
                  {ad.user && <View style={styles.agent}>
                     <View style={styles.agentProfileImg}>
                        <Image style={styles.adRowProfileImg} source={{ uri: ad.user.image }} />
                     </View>
                     <View style={styles.agentName}>
                        <Text>{ad.user.name}</Text>
                        <Text>{ad.user.email}</Text>
                     </View>
                  </View>}

                 <Divider style={styles.divider} />
                 <View style={styles.adRowBottom}>
                      <Text><Icon name="thumbs-o-up" /> Like</Text>
                       <Text onPress={() => Actions.ad({ id: ad.id })}><Icon name="comment-o" /> Comments</Text>
                       <Text><Icon name="heart-o" /> Save</Text>
                 </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
