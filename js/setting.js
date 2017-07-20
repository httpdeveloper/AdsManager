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

module.exports = {
	setting: {
		NETWORK_INTERFACE_URL: 'https://api.graph.cool/simple/v1/API_KEY', // Get API_KEY from https://console.graph.cool ENDPOINTS (SIMPLE)
		SUBSCRIPTION_CLIENT_URL: 'wss://subscriptions.graph.cool/v1/API_KEY', //Get API_KEY from https://console.graph.cool ENDPOINTS (SUBSCRIPTIONS)
		GOOGLE_MAP_API_KEY: 'AIzaSyB-a36YrqU2TnNDiwtz0zY_7FcctwSYX3s', //Use your own API_KEY from https://console.developers.google.com
		IMAGE_UPLOAD_API: 'http://your-api-domain.com/IMAGE_UPLOAD_API',
		IMAGE_UPLOAD_API_ACCESS_TOKEN: 'ACCESS_TOKEN',
		LOCAL_STORAGE_KEY: '@loginaccesstoken'
	}
};
