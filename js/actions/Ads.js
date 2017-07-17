/**
 *
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

import client from '../client';
import { adsQuery, oldAdsQuery } from '../actions/graphql/Queries';
import { subscribeToNewAd } from '../actions/graphql/Subscriptions';
import type { ThunkAction } from '../actions/Types';


let NewAds = [];

export function fetchAds(): ThunkAction {
	return (dispatch, getState) => {
		const state = getState();
		const loadMore = state.Filter.loadMore;
		if (!loadMore) {
			dispatch(({ type: 'FETCH_ADS' }: any));
			client.query({
				query: adsQuery,
				variables: { first: state.Filter.limit }
			}).then((resp) => {
				if (resp.data && resp.data.allAds.length > 0) {
					const lastAd = resp.data.allAds[resp.data.allAds.length - 1];
					dispatch(({ type: 'FILTER_SET_ADS_OFFSET', payload: { offset: lastAd.id, loadMore: false } }: any));
					dispatch(({ type: 'FETCH_ADS_FULFILLED', payload: resp.data.allAds }: any));
				}
			}).catch((e) => {
				dispatch(({ type: 'FETCH_ADS_FULFILLED', payload: null }: any));
				console.log(e);
			});

			client.subscribe({
				query: subscribeToNewAd,
				onError: (err) => console.error(err),
				}).subscribe({
					next(data) {
						if (data && data.Ad.mutation === 'CREATED') {
							NewAds.push(data.Ad.node);
							dispatch(({ type: 'FETCH_NEWADS_FULFILLED', payload: NewAds }: any));
						}
					},
					error(error) {
						console.error('Subscription callback with error: ', error);
					},
				});
		}
	};
}

export function fetchGridAds(): ThunkAction {
	return (dispatch, getState) => {
		const state = getState();
		const loadMore = state.Filter.loadMore;
		if (!loadMore) {
			dispatch(({ type: 'FETCH_ADS' }: any));
			client.query({
				query: adsQuery,
				variables: { first: state.Filter.gridLimit }
			}).then((resp) => {
				if (resp.data && resp.data.allAds.length > 0) {
					const lastAd = resp.data.allAds[resp.data.allAds.length - 1];
					dispatch(({ type: 'FILTER_SET_ADS_OFFSET', payload: { offset: lastAd.id } }: any));
					dispatch(({ type: 'FETCH_ADS_FULFILLED', payload: resp.data.allAds }: any));
				}
			}).catch((e) => {
				dispatch(({ type: 'FETCH_ADS_FULFILLED', payload: null }: any));
				console.log(e);
			});
		} 
	};
}

export function fetchMapAds(): ThunkAction {
	return (dispatch, getState) => {
		const state = getState();
		const loadMore = state.Filter.loadMore;
		if (!loadMore) {
			dispatch(({ type: 'FETCH_ADS' }: any));
			client.query({
				query: adsQuery,
				variables: { first: state.Filter.mapLimit }
			}).then((resp) => {
				if (resp.data && resp.data.allAds.length > 0) {
					const lastAd = resp.data.allAds[resp.data.allAds.length - 1];
					dispatch(({ type: 'FILTER_SET_ADS_OFFSET', payload: { offset: lastAd.id } }: any));
					dispatch(({ type: 'FETCH_ADS_FULFILLED', payload: resp.data.allAds }: any));
				}
			}).catch((e) => {
				dispatch(({ type: 'FETCH_ADS_FULFILLED', payload: null }: any));
				console.log(e);
			});
		}
	};
}
 
export function fetchOldAds(): ThunkAction {
	return (dispatch, getState) => {
		const state = getState();
		dispatch(({ type: 'FETCH_OLDADS' }: any)); 
		let adList = [];
		adList = state.Ads.ads;
		client.query({
			query: oldAdsQuery,
			variables: { first: state.Filter.limit, after: state.Filter.offset }
		}).then((resp) => {
			let items = [];
			if (resp.data && resp.data.allAds.length > 0) {
				items = resp.data.allAds;
				const lastAd = items[items.length - 1];
				dispatch(({ type: 'FILTER_SET_ADS_OFFSET', payload: { offset: lastAd.id, loadMore: true } }: any));
				const adlistNew = adList.concat(items);
				dispatch(({ type: 'FETCH_ADS_FULFILLED', payload: adlistNew }: any));
			} 
			dispatch(({ type: 'FETCH_OLDADS_FULFILLED', payload: items }: any)); 
		}).catch((e) => console.log(e));
	};
}

export function fetchGridOldAds(): ThunkAction {
	return (dispatch, getState) => {
		const state = getState();
		dispatch(({ type: 'FETCH_OLDADS' }: any));
		let adList = [];
		adList = state.Ads.ads;
		client.query({
			query: oldAdsQuery,
			variables: { first: state.Filter.limit, after: state.Filter.offset }
		}).then((resp) => {
			let items = [];
			if (resp.data && resp.data.allAds.length > 0) {
				items = resp.data.allAds;
				const lastAd = items[items.length - 1];
				dispatch(({ type: 'FILTER_SET_ADS_OFFSET', payload: { offset: lastAd.id, loadMore: true } }: any));
				const adlistNew = adList.concat(items);
				dispatch(({ type: 'FETCH_ADS_FULFILLED', payload: adlistNew }: any));
			}
			dispatch(({ type: 'FETCH_OLDADS_FULFILLED', payload: items }: any));
		}).catch((e) => console.log(e));
	};
}


export function fetchNewAds(): ThunkAction {
	return (dispatch, getState) => {
		const state = getState();

		dispatch(({ type: 'FETCH_ADS' }: any));
		client.query({
			query: adsQuery,
			variables: { first: state.Filter.limit }
		}).then((resp) => {
			if (resp.data && resp.data.allAds.length > 0) {
				const lastAd = resp.data.allAds[resp.data.allAds.length - 1];
				dispatch(({ type: 'FILTER_SET_ADS_OFFSET', payload: { offset: lastAd.id, loadMore: false } }: any));
				dispatch(({ type: 'FETCH_ADS_FULFILLED', payload: resp.data.allAds }: any));
			}
		}).catch((e) => console.log(e));
	};
}


export function displayNewAds(): ThunkAction {
	return (dispatch, getState) => {
		const state = getState();
		const oldAds = state.Ads.ads;
		const newAds = state.Ads.newads;

		if (newAds.length > 0) {
			const listAd = newAds.concat(oldAds);
			dispatch(({ type: 'FETCH_NEWADS_FULFILLED', payload: [] }: any));
			dispatch(({ type: 'FETCH_ADS_FULFILLED', payload: listAd }: any));
			NewAds = [];
		}
	};
}
