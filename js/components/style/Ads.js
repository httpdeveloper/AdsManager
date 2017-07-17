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
		backgroundColor: '#f5f5f5'
	},
	adRow: {
		padding: 5,
		backgroundColor: '#fff',
		marginBottom: 5

	},
	adRowHeader: {
		flex: 1,
		backgroundColor: '#fff',
	},

	adRowHeaderContent: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	adRowDesc: {
		fontSize: 15,
		paddingTop: 5,
		paddingRight: 10,
		paddingBottom: 5
	},

	divider: {
		margin: 5
	},

	adTitle: {
		fontWeight: 'bold',
		fontSize: 17,
		padding: 5,
		margin: 5
	},

	address: {
		marginRight: 10
	},
	adRowImage: {
		width: null,
		height: 160,
		flex: 1
	},
	createDateWrapper: {
		flex: 1,
		marginLeft: 10,
		marginBottom: 5
	},
	DescImgWrapper: {
		flex: 1,
		flexDirection: 'row'
	},

	DescImgWrapperLeft: {
		flex: 0.2,
		alignItems: 'center',
	},

	DescImgWrapperRight: {
		flex: 1,
		paddingRight: 5,
		backgroundColor: '#fff'	
	},

	adRowProfileImg: {

		width: 30,
		height: 30,
		borderRadius: 15,
		margin: 5
	},

	createdDate: {
		fontSize: 12,
		marginRight: 10
	},

	adRowBottom: {
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
});
