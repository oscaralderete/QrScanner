import {
	TouchableOpacity,
	Text,
	View
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';

import Styles, { Sizes } from '../theme/Styles';
import Colors from '../theme/Colors';

import { toast } from '../actions/data';

export default function Scanned({ item, isLast, deleteItem, openUrl }) {

	const link = async () => {
		await openUrl(item)
	}

	const copyTo = async () => {
		Clipboard.setStringAsync(item.data).then(() => {
			toast('Content was copied to clipboard')
		})
	}

	// scanned item info
	return (
		<View style={{ ...Styles.itemList, borderBottomColor: isLast ? 'none' : '#ccc', borderBottomWidth: isLast ? 0 : 1 }}>
			<View style={Styles.scanContent}>
				<Text style={Styles.mb}>Barcode type: {item.type}</Text>
				<Text>Content: <Text style={Styles.scanValue}>{item.data}</Text></Text>
				<View style={Styles.btnSet}>
					{item.dataUrl !== null && <TouchableOpacity style={Styles.btnUrl} onPress={link} ><Feather name="external-link" style={Styles.scanUrlIcon} size={Sizes.iconSize * .6} color={Colors.btnColor} /></TouchableOpacity>}
					<TouchableOpacity style={Styles.btnCopy} onPress={copyTo}><Feather name="copy" style={Styles.scanUrlIcon} size={Sizes.iconSize * .6} color={Colors.btnColor} /></TouchableOpacity>
				</View>
			</View>
			<TouchableOpacity style={Styles.btnDelete} onPress={() => deleteItem(item)}>
				<Ionicons name="trash" size={(Sizes.iconSize * 1.1)} />
			</TouchableOpacity>
		</View>
	);
}
