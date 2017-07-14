import {
	StyleSheet,
} from 'react-native';

module.exports = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 65,
		backgroundColor: '#f5f5f5'
	},
	adRow: {
		padding: 5,
		backgroundColor: '#fff',

	},
	adRowTitle: {
		flex: 1,
		backgroundColor: '#fff',
		
	},

	address: {
		marginRight: 10
	},

	createdDate: {
		fontSize: 12,
		marginRight: 10
	},
	
	adRowHeaderContent: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},

	adRowDesc: {
		fontSize: 15,
		padding: 5
	},
	adTitle: {
		flex: 1,
		backgroundColor: '#fff',
		fontWeight: 'bold', 
		fontSize: 17,
		padding: 5,
		
	},
	adRowImage: {
		width: null,
		height: 200,
	},

	createDateWrapper: {
		flex: 1,
		marginLeft: 5,
		marginBottom: 5
	},
	adRowBottom: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 5,
	},
	spinnercontainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	spinner: {
		height: 80
	},

	mapWrapper: {
		height: 300,
	},

	map: {
		height: 300
	},


	markerIcon: {
		width: 30,
		height: 30
	},

	divider: {
		margin: 1,
	},

	headerDetails: {
		fontWeight: 'bold',
		paddingTop: 10,
		paddingLeft: 5,
		paddingBottom: 5,
	},

	headerLocation: {
		fontWeight: 'bold',
		paddingTop: 10,
		paddingLeft: 5,
		paddingBottom: 5,
	},

	adRowProfileImg: {
		width: 40,
		height: 40,
		borderRadius: 20,
		margin: 5
	},

	agent: {
		flex: 1,
		flexDirection: 'row'
	},

	agentProfileImg: {
		flex: 0.2
	},

	agentName: {
		flex: 1,
		padding: 5
	}

});
