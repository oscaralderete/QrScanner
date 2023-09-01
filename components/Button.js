import {
	StyleSheet,
	Text,
	View, TouchableOpacity
} from 'react-native';

import Styles from '../theme/Styles';

export default function Button({ text, onPress, type = 'primary' }) {
	return (
		<TouchableOpacity onPress={onPress} style={Styles.button}>
			<View style={type === 'primary' ? Styles.btnPrimary : Styles.btnWarning}>
				<Text style={Styles.btnLabel}>{text}</Text>
			</View>
		</TouchableOpacity>

	);
}
