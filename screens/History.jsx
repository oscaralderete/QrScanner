import { useState, useCallback, useRef } from 'react';
import {
	ScrollView,
	TouchableOpacity,
	Alert,
	Platform
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

import Page from '../components/Page'
import Styles, { Sizes } from '../theme/Styles';
import Colors from '../theme/Colors';
import Scanned from '../components/Scanned';
import Separator from '../components/Separator';

import { getScans, setScans, openUrl, toast } from '../actions/data';

export default function History({ route, navigation }) {
	const [history, setHistory] = useState([]);
	const scrollRef = useRef()

	const deleteItem = (item) => {

		Alert.alert('DELETE ITEM', 'Are you sure?', [
			{
				text: 'Cancel',
				onPress: () => { }
			},
			{
				text: 'OK',
				onPress: () => {
					const x = history.filter(i => i.id !== item.id)
					setHistory([...x])

					// update local storage
					setScans([...x]).then(() => {
						toast('Item successfully deleted!');
					})
				}
			}
		])
	}

	useFocusEffect(useCallback(() => {
		// always get stored data
		getScans().then(scans => {
			setHistory(scans)
			scrollRef.current?.scrollTo({
				y: 0,
				animated: true,
			})
		});
	}, [route]));

	const historyList = history.map((i, index) => <Scanned key={i.id}
		item={i}
		isLast={history.length - 1 === index}
		deleteItem={deleteItem}
		openUrl={openUrl}
	/>)

	return (
		<Page isList={true}>
			<ScrollView ref={scrollRef} style={Styles.scrollView}>
				{historyList}
				<Separator />
			</ScrollView>
			<TouchableOpacity style={Styles.fabScan} onPress={() => navigation.navigate('Scanner')}>
				<Ionicons name="scan" size={Sizes.fabIconSize} color={Colors.btnColor} />
			</TouchableOpacity>
		</Page>
	);
}
