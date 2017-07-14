import {
	StyleSheet,
	Dimensions
} from 'react-native';

const {
	height,
	width
} = Dimensions.get('window');

module.exports = StyleSheet.create({
	Container: {
		flex: 1,
	},

	preview: {
		flex: 1,
		position: 'absolute',
		top: 0,
		left: 0,
		width,
		height,

	},

	capture: {
		flex: 1,
		backgroundColor: 'transparent',
		color: '#3F51B5',
		margin: 40,
	},

	cameraoption: {

		flex: 0,
		flexDirection: 'row',
		bottom: 10,
		position: 'absolute',
	},

	toggleview: {

		flex: 0,
		backgroundColor: 'transparent',
		borderRadius: 5,
		color: '#3F51B5',
		margin: 40,

	},

	close: {
		flex: 0,
		margin: 40,
		color: '#3F51B5',
		backgroundColor: 'transparent',
	},

	cameraoptionleft: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		//backgroundColor: 'red',
	},

	cameraoptionright: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		//backgroundColor: 'blue'
	},

	cameraoptionmiddle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		//backgroundColor: 'yellow'
	},

	cameraoptionclose: {
		position: 'absolute',
		top: 0,
		right: 0,
		flex: 0,
	},
	captureimg: {
		width: 30,
		height: 30
	}
});
