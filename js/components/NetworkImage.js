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

import React from 'react';
import {
  Image,
  View,
  Text,
  Platform
} from 'react-native';

const styles = require('./style/NetworkImage');

const NetworkImage = React.createClass({
  getInitialState: function() {
    return {
      error: false,
      loading: true,
      progress: 0,
      total: 0
    };
  },

  renderIOS: function() {
    const loader = this.state.loading ?
      (<View style={styles.progress}>
        <View style={styles.loadingwrapper}>
            <Image source={require('./img/loading.gif')} style={styles.loadingimg} />
        </View>
      </View>) : null;

    return this.state.error ?
      <Text>{this.state.error}</Text> :
      <Image
        source={this.props.source}
        style={[styles.base, this.props.style]}
        onLoadStart={() => this.setState({ loading: true })}
        onError={(e) => this.setState({ error: e.nativeEvent.error, loading: false })}
        onProgress={(e) => this.setState({ progress: e.nativeEvent.loaded, total: e.nativeEvent.total })}
        onLoad={() => this.setState({ loading: false, error: false })}
        resizeMode={this.props.resizeMode}
      >
        {loader}
      </Image>;
  },

  renderAndroid: function() {
    const loader = this.state.loading ?
      (<View style={styles.progress}>
        <View style={styles.loadingwrapper}>
            <Image source={require('./img/loading.gif')} style={styles.loadingimg} />
        </View>
      </View>) : null;

     return this.state.error ?
      <Text>{this.state.error}</Text> : (
            <Image
              source={this.props.source}
              style={[styles.base, this.props.style]}
              onError={(e) => this.setState({ error: e.nativeEvent.error, loading: false })}
              onLoad={() => this.setState({ loading: false, error: false })}
            >
             {loader}
            </Image>
          );
  },

  render: function() {
    return (Platform.OS === 'android') ? this.renderAndroid() : this.renderIOS();
  }
});

module.exports = NetworkImage;
