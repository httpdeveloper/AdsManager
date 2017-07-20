/**
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
import { setting } from '../setting';

const { GooglePlacesAutocomplete } = require('react-native-google-places-autocomplete');

export default class PlaceAutocomplete extends Component {
  render() {  
    return (
      <GooglePlacesAutocomplete
        ref={(ref) => this.props.onRef(ref)}
        placeholder='Search..'
        minLength={2} // minimum length of text to search
        autoFocus={false}
        returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
        listViewDisplayed='auto'    // true/false/undefined
        fetchDetails={true}
        renderDescription={(row) => row.description} // custom description render
        onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
          const latlng = details.geometry.location;
          this.props.onSearch({ address: data.description, latlng });
        }}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: setting.GOOGLE_MAP_API_KEY,
          language: 'en', // language of the results
          types: 'geocode', // default: 'geocode'
        }}
        styles={{
          description: {
            fontWeight: 'bold',
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
          textInputContainer: {
            borderRadius: 5,
            borderTopWidth: 0,
          },
          loader: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            width: 50,
            height: 30
          }
        }}
        getDefaultValue={this.props.getDefaultValue}
        textInputProps={this.props.textInputProps}
        enablePoweredByContainer={false}
        nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      >
        {this.props.children}
      </GooglePlacesAutocomplete>
    );
  }
}
