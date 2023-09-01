import { StyleSheet, StatusBar } from "react-native";

import Colors from "./Colors";

export const Sizes = {
	margin: 10,
	padding: 20,
	elevation: 20,
	fontSize: 16,
	btnWidth: 200, //250,
	scrollMB: 45,
	fabSize: 64,
	fabIconSize: 36,
	iconSize: 26,
}

const Styles = StyleSheet.create({
	// Page component
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
	},
	list: {
		marginTop: StatusBar.currentHeight,
		alignItems: 'center',
	},
	logo: {
		marginTop: Sizes.margin,
		justifyContent: 'center',
		alignItems: 'center',
	},
	main: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: Sizes.padding,

	},
	// Button component
	button: {
		width: Sizes.btnWidth,
		elevation: Sizes.elevation,
		shadowColor: '#000',
		marginTop: Sizes.margin,
	},
	btnPrimary: {
		backgroundColor: Colors.iconActive,
	},
	btnWarning: {
		backgroundColor: Colors.warningColor,
	},
	btnLabel: {
		color: Colors.btnColor,
		paddingVertical: 8,
		textAlign: 'center',
	},
	// Author page
	text: {
		fontSize: Sizes.fontSize,
		flexWrap: 'wrap',
		textAlign: 'center',
		marginBottom: Sizes.margin,
	},
	bold: {
		fontWeight: 'bold',
	},
	link: {
		color: Colors.iconActive,
	},
	// Scanner page
	fabCancel: {
		position: 'absolute',
		bottom: Sizes.margin,
		width: Sizes.fabSize,
		height: Sizes.fabSize,
		backgroundColor: Colors.warningColor,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100,
		elevation: Sizes.margin,
	},
	barCodeScanner: {
		width: '100%',
		height: '100%',
	},
	scanContent: {
		flex: 1,
		padding: 10
	},
	scanValue: {
		fontWeight: 'bold',
		fontSize: 17,
	},
	// History page
	scrollView: {
		width: '100%',
		marginBottom: Sizes.scrollMB,
		height: '90%',
	},
	itemList: {
		maxWidth: '100%',
		width: '100%',
		display: 'flex',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	fabScan: {
		position: 'absolute',
		bottom: 60,
		width: Sizes.fabSize,
		height: Sizes.fabSize,
		backgroundColor: Colors.greenColor,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100,
		elevation: Sizes.margin,
	},
	btnDelete: {
		paddingHorizontal: 10,
	},
	btnUrl: {
		width: 40,
		alignItems: 'center',
		backgroundColor: Colors.iconActive,
		borderRadius: 6,
		marginTop: Sizes.margin,
	},
	btnCopy: {
		width: 40,
		alignItems: 'center',
		backgroundColor: Colors.orangeColor,
		borderRadius: 6,
		marginTop: Sizes.margin,
	},
	scanUrlIcon: {
		paddingVertical: 5,
		elevation: 10,
	},
	btnSet: {
		flexDirection: 'row',
		gap: 5,
	},
	// misc
	separator: {
		height: 20,
	},
	mb: {
		marginBottom: Sizes.margin,
	},

});

export default Styles;