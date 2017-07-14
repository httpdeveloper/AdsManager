import {
  StyleSheet,
  Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

module.exports = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5'
	},
	jobRow: {
		padding: 5,
		backgroundColor: '#fff',
		marginBottom: 5

	},
	jobRowHeader: {
		flex: 1,
		backgroundColor: '#fff',
	},

	jobRowHeaderContent: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},

	jobRowDesc: {
		fontSize: 15,
		padding: 5
	},
	jobTitle: {
		fontWeight: 'bold', 
		fontSize: 17,
		padding: 5,
		margin: 5
	},

	address: {
		marginRight: 10
	},
	jobRowImage: {
		width: width - 10,
		height: 200,
		borderRadius: 5,
		borderWidth: 0.5,
		borderColor: '#f5f5f5'
	},

	jobRowBottom: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 5
	},
	spinnercontainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	spinner: {
		height: 80
	},

	map: {
	...StyleSheet.absoluteFillObject,
	},
	
	markerIcon: {
		width: 30,
		height: 30
	},

	mapTypes: {
		flex: 1,
		flexDirection: 'row',
		position: 'absolute',
		top: 10,
		right: 20,
		backgroundColor: 'transparent'
	},

	mapType: {
		padding: 2,
		fontWeight: 'bold'
	}

});
