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
 *  @flow
 */

'use strict';

type ParseObject = Object

export type Action =
   { type: 'FETCH_ADS' }
 | { type: 'FETCH_OLDADS' }
 | { type: 'FETCH_AD' }
 | { type: 'FETCH_ADS_FULFILLED', payload: Array<ParseObject> }
 | { type: 'FETCH_OLDADS_FULFILLED', payload: Array<ParseObject> }
 | { type: 'FILTER_SET_ADS_OFFSET', payload: ParseObject }
 | { type: 'FETCH_NEWADS_FULFILLED', payload: Array<ParseObject> }
 | { type: 'FETCH_AD_FULFILLED', payload: ParseObject }
 | { type: 'USER_LOGGED_IN', payload: ParseObject }
 | { type: 'USER_LOGGED_OUT' }

 ;

export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
