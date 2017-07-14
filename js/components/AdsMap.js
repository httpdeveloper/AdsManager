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
import {
  Text,
  View,
  ActivityIndicator
} from 'react-native';

import MapView from 'react-native-maps';
import { fetchMapAds } from '../actions/Ads';
import MapCustomTooltip from './MapCustomTooltip';
import MapCustomMarker from './MapCustomMarker';
import { getCenterRegion } from '../helpers/map';
import NoAds from './NoAds';

const styles = require('./style/Map');

export default class AdsMap extends Component {
   constructor(props) {
    super(props);

    this.state = {
        refreshing: false,
        showmore: false,
        region: {
          latitude: 0,
          longitude: 0,
          latitudeDelta: 0,
          longitudeDelta: 0,
        },
        mapType: 'standard',
    };
  }

  componentWillMount() {
     this.props.dispatch(fetchMapAds());

     if (this.props.ads.length > 0) {
        const region = getCenterRegion(this.props.ads);
        this.setState({ region });
     }
  }

  onPressMapType(mapType) {
      this.setState({ mapType });
  }

  onRegionChange(region) {
    this.setState({ region });
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
        <MapView
          region={this.state.region}
          style={styles.map}
          mapType={this.state.mapType}
        >
        {ads.map(ad => (
          <MapView.Marker
            key={ad.id}
            coordinate={{ latitude: ad.latitude, longitude: ad.longitude }}
            title={ad.title}
            description={ad.description}
          >
          <MapCustomMarker mapType={this.state.mapType} />
           <MapView.Callout>
              <MapCustomTooltip {...ad} />
          </MapView.Callout>
          </MapView.Marker>
        ))}
        </MapView>
        <View style={styles.mapTypes}>
          <Text style={styles.mapType} onPress={() => this.onPressMapType('standard')}>
              Standard
          </Text>
          <Text style={styles.mapType} onPress={() => this.onPressMapType('satellite')}>
              Statellite
          </Text>
          <Text style={styles.mapType} onPress={() => this.onPressMapType('hybrid')}>Hybrid</Text>
        </View>
      </View>
    );
  }
}
