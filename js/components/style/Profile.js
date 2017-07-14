import {
  StyleSheet,
} from 'react-native';


module.exports = StyleSheet.create({
	menucontainer: {
		justifyContent: 'center',
		margin: 5,
		padding: 10,
	},


	pagecontainer: {
		justifyContent: 'center',
		margin: 5,
		paddingTop: 60,
	},

	profileimg: {
		width: 40,
		height: 40,
		borderRadius: 20,
		marginTop: 10
	},

	profilename: {
		
		color: '#000',
		fontWeight: 'bold',
		marginTop: 5
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
