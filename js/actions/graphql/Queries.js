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

import { gql } from 'react-apollo';

const adsQuery = gql`
  query AllAdsQuery($first: Int!){
    allAds(first: $first, orderBy: createdAt_DESC) {
      id
      title
      description
      image
      address
      latitude
      longitude
      createdAt
      user {
        id
        name
        image
      }
    }
  }`;

const oldAdsQuery = gql`
  query AllAdsQuery($first: Int!, $after: String!){
    allAds(first: $first, after: $after, orderBy: createdAt_DESC) {
      id
      title
      description
      image
      address
      latitude
      longitude
      createdAt
      user {
        id
        name
        image
      }
    }
  }`;

const adQuery = gql`
  query AdQuery($id: ID!){
    Ad(id: $id) {
      id
      title
      description
      image
      address
      latitude
      longitude
      createdAt
      user {
        id
        name
        email
        image
      }
    }
}`;

const userQuery = gql`
  query UserQuery($fbuserid: String!){
    User(fbuserid: $fbuserid) {
      id
      name
      email
      image
      fbuserid
    }
}`;

export {
	adsQuery,
	oldAdsQuery,
  adQuery,
  userQuery
};
