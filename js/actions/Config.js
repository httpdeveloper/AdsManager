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
import store from '../store';

const init = async (): Promise<void> => {
    await AsyncStorage.getItem(setting.LOCAL_STORAGE_KEY).then((data) => {
        if (data !== null) {
          const jsonData = JSON.parse(data);
          if (jsonData.id) {
            store.dispatch(({ type: 'USER_LOGGED_IN', payload: jsonData }: any));
          }
        }
    });
};


module.exports = { init };
