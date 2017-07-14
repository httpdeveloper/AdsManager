import {
  StyleSheet,
  Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

module.exports = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		padding: 5,
		width: width - 50
	},
	containerLeft: {
		flex: 0.4,
	},

	containerRight: {
		flex: 0.6,
	},
	adImage: {
		width: 100,
		height: 100
	},

	adDesc: {
		flexWrap: 'wrap',
		flex: 1,
		fontSize: 12,
		padding: 3,
	},

	adTitle: {
		fontWeight: 'bold',
		padding: 3,
	},

	adAddr: {
		fontSize: 13,
		padding: 3,
	}
});
