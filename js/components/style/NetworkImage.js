import {
	StyleSheet,
	Dimensions
} from 'react-native';

const {
	width
} = Dimensions.get('window');

module.exports = StyleSheet.create({
	base: {
		width: width - 110,
		height: 200,
		flex: 1
	},
	progress: {
		flex: 1,
	},
	loadingwrapper: {
		flex: 1,
		backgroundColor: '#fff',
		opacity: 0.9,
		alignItems: 'center',
		justifyContent: 'center',
	},
	loadingimg: {
		width: 50,
		height: 50
	}
});
