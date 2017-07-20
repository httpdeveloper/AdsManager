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

import {
  StyleSheet,
  Dimensions
} from 'react-native';

const { height, width } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 65
  },
  inputRow: {
    padding: 5,
    margin: 0,
    backgroundColor: '#fff'
  },
  inputHeading: {
    color: '#999',
    paddingLeft: 5,
  },
  photoPlaceholderContainer: {
    alignItems: 'center',
    height: 80,
  },
  inputStyle: {
    backgroundColor: '#fff',
    height: 40,
    padding: 4,
    marginTop: 10,
    color: '#888',
    borderRadius: 5
  },
  descriptionInput: {
    height: 80,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#888',
    paddingLeft: 5,
    marginTop: 20,
    borderRadius: 5
  },
  selectedImage: {
    width: 60,
    height: 60
  },
  inputRowImgBrowse: {
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 1
  },
  inputRowImgBrowseLeft: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2,
  },
  inputRowImgBrowseRight: {
    flex: 0.8,
  },
  buttons: {
    flex: 1,
    padding: 10
  },
  photoButton: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
  },
  saveButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(39,174,96,1)',
    height: 45,
    borderRadius: 5
  },
  saveButtonText: {
    color: '#fff',
  },
  cancelButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
  },
  cancelButtonText: {
    color: 'rgba(0,0,0,.5)',
  },
  inputErr: {
    color: '#f00',
    padding: 10,
    backgroundColor: '#fff'
  },
  formProcessingWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height,
    backgroundColor: '#eee',
    opacity: 0.8,
  },
  formProcessingMsg: {
    position: 'absolute',
    top: (height / 2) - 50,
    left: 0,
    width,
    height,
    alignItems: 'center',
  },
  processingTxt: {
    fontWeight: 'bold'
  },
  spinner: {
    height: 80
  },
  divider: {
    height: 0.5, 
    backgroundColor: '#999', 
    marginLeft: 5
  }
});
