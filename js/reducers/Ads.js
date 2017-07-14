/**
 *
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
 *  @flow
 */

'use strict';

const initialState = {
	ads: [],
	oldads: [],
	newads: [],
	fetching: false,
	oldfetching: false,
	fetched: false,
	oldfetched: false,
	newfetched: false,
};

type State = Object;
type Action = { type: string; payload: Array<any>; };

export default function reducers(state: State=initialState, action: Action) {
	switch (action.type) {
		case 'FETCH_ADS': 
			return { ...state, fetching: true };
		case 'FETCH_OLDADS': 
			return { ...state, oldfetching: true, oldfetched: false, };
		case 'FETCH_ADS_REJECTED': 
			return { ...state, fetching: false, error: action.payload };
		case 'FETCH_ADS_FULFILLED': 
			return {
				...state,
				fetching: false,
				fetched: true,
				ads: action.payload,
			
			};
		case 'FETCH_OLDADS_FULFILLED':
			return {
				...state,
				oldfetching: false,
				oldfetched: true,
				oldads: action.payload,
			};
		case 'FETCH_NEWADS_FULFILLED':
			return {
				...state,
				newfetched: (action.payload.length > 0 ? true : false),
				newads: action.payload,
			};
		default:
			return state;

	}
}
