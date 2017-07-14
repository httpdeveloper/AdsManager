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
*  @flow
*/

'use strict';

import { AsyncStorage } from 'react-native';
import { setting } from '../setting';
import type { ThunkAction } from './Types';

type userFields = string;

const FacebookSDK = require('../FacebookSDK');

const _FBLogin = async (scope: string): Promise<Object> => {
  return new Promise((resolve, reject) => {
      FacebookSDK.login(scope, (response) => {
          if (response && !response.error) {
            resolve(response);
          } else {
            reject(response && response.error);
          }
      });
  });
};


function FBLogin(scope: string): ThunkAction {
 return (dispatch) => {
  let payload = null;
	return _FBLogin(scope).then((data) => {
		return FBUser(data);
		}).then((user) => {
			if (user) {
				payload = { id: user.id, name: user.name, email: user.email, image: user.picture.data.url };
				return saveUser(payload);
			}
		}).then(() => {
			const action = {
				type: 'USER_LOGGED_IN',
				payload
			};
			dispatch((action: any));
			return Promise.resolve(action);
		});
  };
}

const FBUser = async (data: Object, fields: userFields='name,email,picture.type(large){url}'): Promise<Object> => {
  return new Promise((resolve, reject) => {
      FacebookSDK.api('/me', {
                            accessToken: data.accessToken,
                            parameters: {
                              fields: {
                                string: fields
                              }
                            }
                          },
                      (response) => {
                          if (response && !response.error) {
                            resolve(response);
                          } else {
                            reject(response && response.error);
                          }
                      });
  });
};

const getAccessToken = async (): Promise<any> => {
  return FacebookSDK.getAccessToken();
};

const saveUser = async (payload: Object): Promise<Object> => {
  return await AsyncStorage.setItem(setting.LOCAL_STORAGE_KEY, JSON.stringify(payload));
};

module.exports = { FBLogin, FBUser, saveUser, getAccessToken };
