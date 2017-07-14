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
    color: 'white',
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
