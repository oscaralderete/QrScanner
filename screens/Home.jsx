import {
	StyleSheet,
	Text,
	View
} from 'react-native';

import Page from '../components/Page';
import Button from '../components/Button';

export default function Home({ navigation }) {
	function startScan() {
		navigation.navigate('Scanner')
	}

	return (
		<Page>
			<Button text="Scan" onPress={startScan} />
		</Page>
	);
}

const styles = StyleSheet.create({
	container: {

	},
});