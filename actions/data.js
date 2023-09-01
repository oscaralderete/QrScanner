import { Linking, ToastAndroid, AlertIOs } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const APP_PREFIX = 'oa_scanner';

export const getScans = async () => {
	try {
		const str = await AsyncStorage.getItem(APP_PREFIX);
		const scans = JSON.parse(str);

		return scans && scans.length > 0 ? scans : [];
	}
	catch (err) {
		// nothing here
	}
}

export const setScans = async (array) => {
	try {
		await AsyncStorage.setItem(APP_PREFIX, JSON.stringify(array));
	}
	catch (err) {
		// nothing here
	}
}

export const openLink = async (item) => {
	let x = item.value;

	if (item.type === 'email') {
		x = 'mailto:' + x

	}
	await Linking.openURL(x)
}

export const openUrl = async (item) => {
	await Linking.openURL(item.dataUrl)
}

export const toast = (msg) => {
	if (Platform.OS === 'android') {
		ToastAndroid.show(msg, ToastAndroid.SHORT)
	}
	else {
		AlertIOs.alert(msg)
	}
}