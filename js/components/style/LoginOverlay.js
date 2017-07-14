import {
  StyleSheet,
  Dimensions
} from 'react-native';

const { height, width } = Dimensions.get('window');


module.exports = StyleSheet.create({
	
	LoginOverlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		flex: 1,
		backgroundColor: '#fff',
		width,
		height,
		zIndex: 2,
		opacity: 0.9,
		alignItems: 'center',
		justifyContent: 'center'
	},

	spinner: {
		height: 80
	},

	loggintxt: {
		fontWeight: 'bold'
	}
});
