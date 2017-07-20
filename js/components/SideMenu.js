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
  TouchableOpacity,
  View,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { ListItem } from './layout/Index';
import { Logout } from '../actions/Logout';
import Profile from '../containers/Profile';

const styles = require('./style/SideMenu');

 export default class SideMenu extends Component {
    onPressHome() {
      this.closeDrawer();
      setTimeout(() => {
          Actions.ads({ type: 'refresh' });
      }, 1);
    }

    onPressLogout() {
      Logout();
    }

    onPressProfile() {
        this.closeDrawer();
        setTimeout(() => {
            Actions.profile({ redirect: 'menu' });
        }, 1);
    }

    onPressArticle(title) {
        this.closeDrawer();
        setTimeout(() => {
            Actions.article({ title });
        }, 1);
    }

    closeDrawer() {
       Actions.refresh({ key: 'drawer', open: false });
    }

    render() {
        return (
            <View style={styles.menucontainer}>
              <View style={styles.menucontainertop}>
                 <Profile />
              </View>
              <View style={styles.menucontainermiddle}>
                  <View style={styles.spacer} />
                  <TouchableOpacity onPress={this.onPressHome.bind(this)}>
                        <ListItem 
                            title={'Home'} 
                            titleStyle={styles.titleStyle}
                            leftIcon={{ name: 'home', size: 15 }} 
                        />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.onPressProfile.bind(this)}>
                      <ListItem 
                          divider={true}
                          title={'Profile'} 
                          titleStyle={styles.titleStyle} leftIcon={{ name: 'user', size: 15 }} 
                      />
                  </TouchableOpacity>
                   <View style={styles.spacer} />
                   <TouchableOpacity onPress={() => this.onPressArticle('Campaign')}>
                      <ListItem 
                          title={'Campaign'} 
                          titleStyle={styles.titleStyle} leftIcon={{ name: 'th', size: 15 }} 
                      />
                  </TouchableOpacity>
                   <TouchableOpacity onPress={() => this.onPressArticle('Adset')}>
                      <ListItem 
                          title={'AdSet'} 
                          titleStyle={styles.titleStyle} leftIcon={{ name: 'object-group', size: 15 }} 
                      />
                  </TouchableOpacity>
                   <TouchableOpacity onPress={() => this.onPressArticle('Ad Creative')}>
                      <ListItem 
                          title={'Ad Creative'} 
                          titleStyle={styles.titleStyle} leftIcon={{ name: 'creative-commons', size: 15 }} 
                      />
                  </TouchableOpacity>
                   <TouchableOpacity onPress={() => this.onPressArticle('Ads')}>
                      <ListItem 
                          divider={true}
                          title={'Ads'} 
                          titleStyle={styles.titleStyle} leftIcon={{ name: 'bullhorn', size: 15 }} 
                      />
                  </TouchableOpacity>
                  <View style={styles.spacer} />
                   <TouchableOpacity onPress={() => this.onPressArticle('Setting')}>
                      <ListItem 
                          title={'Setting'} 
                          titleStyle={styles.titleStyle} leftIcon={{ name: 'cog', size: 15 }} 
                      />
                  </TouchableOpacity>
                   <TouchableOpacity onPress={() => this.onPressArticle('Privacy Policy')}>
                      <ListItem 
                          divider={true}
                          title={'Privacy Policy'} 
                          titleStyle={styles.titleStyle} leftIcon={{ name: 'lock', size: 15 }} 
                      />
                  </TouchableOpacity>
              </View>
              <View style={styles.menucontainerbottom}>
                 <TouchableOpacity onPress={this.onPressLogout.bind(this)}>
                      <ListItem 
                          title={'Logout'} 
                          titleStyle={styles.titleStyle} leftIcon={{ name: 'sign-out', size: 15 }} 
                      />
                  </TouchableOpacity>
              </View>
            </View>
        );
    }
}
