import {
  StyleSheet,

} from 'react-native';

module.exports = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: 60,
  },

  wrapper: {
    margin: 5,
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },

  mediarow: {
    padding: 1
  },

  image: {
    width: 50,
    height: 50
  },
  selectedrow: {
    padding: 1,
    borderWidth: 1,
    borderColor: '#3F51B5',
  },

  camera: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  cameraicon: {
    textAlign: 'center',
    top: 10,
  }
});
