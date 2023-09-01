import {
	Text,
} from 'react-native';

import Styles from '../theme/Styles';

export default function Link({ i, openLink }) {
	const link = i.type === 'text' ? <Text style={Styles[i.style]} >{i.value}</Text> : <Text style={Styles[i.style]} onPress={() => openLink(i)}>{i.value}</Text>
	return (
		<Text style={Styles.text}>
			{i.label} {link}
		</Text>
	);
}