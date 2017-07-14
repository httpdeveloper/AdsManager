import {
  StyleSheet,
  Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

module.exports = StyleSheet.create({

	container: {
		
		height: 50,
	},

	defaultStyle: {
		flex: 1,
		margin: 5,
		padding: 5,
		flexDirection: 'row',
		
	},

	title: {
		flex: 1,
		justifyContent: 'center'
	},

	rightIcon: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-end',
		marginRight: 10
	},
	leftIcon: {
		flex: 0.1,
		justifyContent: 'center',
		alignItems: 'flex-start'
	},
	titletxt: {
		padding: 5,
		fontSize: 16,
		color: '#999',
	},
	divider: {
		width
	}
});
