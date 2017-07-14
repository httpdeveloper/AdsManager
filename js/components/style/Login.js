import {
  StyleSheet,
} from 'react-native';

module.exports = StyleSheet.create({
	LoginContainer: {
		flex: 1,
		backgroundColor: '#fff'
	},

	
	LoginContainerMiddleBtnFBSK: {
		height: 45,
		margin: 50
	},

	linearGradient: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 5
	},

	imageContainer: {
		width: null,
		height: null,
		flex: 1,
	},

	loginbtntxt: { 
		fontSize: 18,
		fontFamily: 'Gill Sans',
		textAlign: 'center',
		margin: 10,
		color: '#ffffff',
		backgroundColor: 'transparent'
	},

	spinnercontainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	loginerrortxt: {
		fontSize: 15,
		color: '#f00'
	}
	
});
