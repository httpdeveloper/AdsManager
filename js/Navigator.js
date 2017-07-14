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
import { Scene, Router, Modal, Actions, Reducer } from 'react-native-router-flux';
import { connect } from 'react-redux';

import {
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuDrawer from './components/MenuDrawer';
import Dashboard from './components/Dashboard';
import AdsListView from './containers/AdsList';
import AdDetail from './containers/AdDetail';
import CreateAd from './containers/CreateAd';
import Media from './components/Media';
import Camera from './components/Camera';
import Profile from './containers/Profile';
import Article from './components/Article';
import ProfilePicture from './containers/ProfilePicture';

const styles = require('./components/style/Navigator');

const reducerCreate = params => {
    const defaultReducer = Reducer(params);
    return (state, action) => {
      return defaultReducer(state, action);
    };
};

class Navigator extends Component {

  onSelectMedia() {
    if (this.props.imagePath) {
        this.props.dispatch({ 
            type: 'MEDIA_SET_SELECTED_IMAGE', 
            payload: { path: this.props.imagePath, selected: true } 
        });
        Actions.pop();
    }
   
    return false;
  }

  render() {
    return (
        <Router 
            createReducer={reducerCreate} 
            navigationBarStyle={Platform.OS === 'ios' ? styles.navigationBarStyle : styles.navigationBarStyleAndroid}
        >
            <Scene key="drawer" component={MenuDrawer} open={false}>
                <Scene key="modal" component={Modal} >
                    <Scene key="root">
                        <Scene 
                            key="dashboard" 
                            component={Dashboard} 
                            title="Ads" 
                            navigationBarStyle={styles.tabAdsHeaderColor}
                            titleStyle={styles.headerTxtColor}
                            rightTitle={<Icon style={styles.sceneAd} name="plus" size={20} />}
                            onRight={() => Actions.createad()}
                            onLeft={() => Actions.refresh({ key: 'drawer', open: value => !value })} 
                            leftTitle={Platform.OS === 'ios' ? <ProfilePicture width={30} height={30} /> : <Icon style={styles.drawerMenuIcon} name="bars" />} 
                            initial={true} 
                        />
                        <Scene 
                            key="ads" 
                            component={AdsListView} 
                            title="Ads" 
                            navigationBarStyle={styles.tabAdsHeaderColor}
                            titleStyle={styles.headerTxtColor}
                        />
                        <Scene 
                            key="ad" 
                            component={AdDetail} 
                            title="Ad" 
                            navigationBarStyle={styles.tabAdsHeaderColor}
                            titleStyle={styles.headerTxtColor}
                            leftButtonIconStyle={styles.leftButtonIconStyle}
                            
                        />
                        <Scene 
                            key="createad" 
                            component={CreateAd} 
                            title="Create Ad" 
                            hideNavBar={false} 
                            navigationBarStyle={styles.tabAdsHeaderColor}
                            leftButtonIconStyle={styles.leftButtonIconStyle} 
                            titleStyle={styles.headerTxtColor}
                            backButtonTextStyle={styles.headerTxtColor}
                            panHandlers={null}
                            direction="vertical"
                            backTitle="Close"
                            onLeft={() => Actions.pop()}
                            backButtonImage={null}
                        />
                        <Scene 
                            key="media" 
                            component={Media} 
                            title="Media" 
                            navigationBarStyle={styles.tabAdsHeaderColor}
                            titleStyle={styles.headerTxtColor}
                            leftButtonIconStyle={styles.leftButtonIconStyle}
                            backButtonTextStyle={styles.headerTxtColor}
                            rightButtonTextStyle={styles.headerTxtColor}
                            direction="vertical"
                            backTitle="Close"
                            onLeft={() => Actions.pop()}
                            backButtonImage={null}
                            panHandlers={null}
                            rightTitle="Select"
                            onRight={this.onSelectMedia.bind(this)}
                        />
                        <Scene 
                            key="camera" 
                            component={Camera} 
                            title="Camera" 
                            hideNavBar={true}
                            direction="vertical"
                            panHandlers={null}
                        />
                        <Scene 
                            key="profile" 
                            component={Profile} 
                            title="Profile"
                            navigationBarStyle={styles.tabAdsHeaderColor}
                            titleStyle={styles.headerTxtColor}
                            leftButtonIconStyle={styles.leftButtonIconStyle} 
                        />
                        <Scene 
                            key="article" 
                            component={Article} 
                            title="Article"
                            navigationBarStyle={styles.tabAdsHeaderColor}
                            titleStyle={styles.headerTxtColor}
                            leftButtonIconStyle={styles.leftButtonIconStyle} 
                        />
                    </Scene>
                </Scene>
            </Scene>
        </Router>
    );
  }
}

function mapStateToProps(store) {
  return {
    isLoggedIn: store.User.isLoggedIn,
    imagePath: store.Media.imagePath,
  };
}

export default connect(
  mapStateToProps,
)(Navigator);
