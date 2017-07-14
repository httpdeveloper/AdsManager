import {
	StyleSheet,
	Dimensions
} from 'react-native';

const {
	width
} = Dimensions.get('window');

module.exports = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
		flexDirection: 'row',
		flexWrap: 'wrap',
		padding: 5,
	},

	subContainer: {
		flex: 1,
	},

	topContainer: {
		flex: 0.3
	},

	middleContainer: {
		flex: 0.6
	},

	bottomContainer: {
		flex: 0.1
	},

	adRow: {
		margin: 5,
		backgroundColor: '#fff',
		borderRadius: 5,
		width: (width / 2) - 15,
		borderColor: '#fff',
		borderWidth: 0.5
	},
	adRowTitle: {
		flex: 1,
		backgroundColor: '#fff',
	},

	adRowDesc: {
		fontSize: 13,
		padding: 5
	},
	divider: {
		marginTop: 5 
	},
	adTitle: {
		fontWeight: 'bold',
		fontSize: 17,
		padding: 5,
		margin: 5
	},

	address: {
		margin: 5,
		fontSize: 13,
	},
	adRowImage: {
		width: (width / 2) - 25,
		height: 150,
		borderWidth: 0.5,
		borderColor: '#f5f5f5',
		margin: 5,
		borderRadius: 5
	},

	adRowBottom: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 8,
	},
	spinnercontainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	spinner: {
		height: 80
	},

});