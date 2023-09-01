import React, { useState, useEffect } from 'react'
import {
	Text,
	TouchableOpacity
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Ionicons } from '@expo/vector-icons';

import Page from '../components/Page'
import Styles, { Sizes } from '../theme/Styles'
import Colors from '../theme/Colors';
import { getScans, setScans } from '../actions/data';

// regex to parse + get URLs
const urlRegex = /(\b(https?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

export default function Scanner({ navigation }) {
	const [hasPermission, setHasPermission] = useState(null),
		[scanned, setScanned] = useState(false);

	useEffect(() => {
		const getBarCodeScannerPermissions = async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync()
			setHasPermission(status === 'granted')
		}

		getBarCodeScannerPermissions()
	}, [])

	const handleBarCodeScanned = async ({ type, data }) => {
		setScanned(true)

		// check for url
		let dataUrl = null;
		if (urlRegex.test(data)) {
			data.replace(urlRegex, (url) => {
				dataUrl = url
				return url
			})
		}

		// getting current scans
		let scans = await getScans(),
			el = {
				id: (new Date()).getTime(),
				type,
				data,
				dataUrl,
			},
			h = [];

		// append data if it already exists
		if (scans.length > 0) {
			// there's previous data
			h = [
				el
				, ...scans
			];
		}
		else {
			h = [el];
		}

		// set new scans then navigate...
		setScans(h).then(() => {
			navigation.navigate('History');
		})
	}

	if (hasPermission === null) {
		return <Text>Requesting for camera permission.</Text>
	}

	if (!hasPermission) {
		return <Text>No access to camera.</Text>
	}

	return (
		<Page>
			<BarCodeScanner
				onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				style={Styles.barCodeScanner}
			/>
			<TouchableOpacity style={Styles.fabCancel}>
				<Ionicons name="close" size={Sizes.fabIconSize} color={Colors.btnColor} onPress={() => navigation.navigate('Init')} />
			</TouchableOpacity>
		</Page>
	);
}
