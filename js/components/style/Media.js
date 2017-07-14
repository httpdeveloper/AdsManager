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
    padding: 3
  },

  image: {
    width: 50,
    height: 50
  },
  selectedrow: {
    padding: 3,
    borderWidth: 2,
    borderColor: '#3F51B5',
  },

  camera: {
    justifyContent: 'center',
    padding: 3
  },

  cameraicon: {
    width: 50,
    textAlign: 'center',
    marginTop: 10,
  }
});
