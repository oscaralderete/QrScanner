import { View } from 'react-native'

import Logo from '../assets/logo.svg'
import Styles from '../theme/Styles';

export default function Page({ children, isList = false }) {
	const x = 50;

	return (
		<View style={Styles.container}>
			<View style={Styles.logo}>
				<Logo width={x} height={x} />
			</View>
			<View style={isList ? Styles.list : Styles.main}>
				{children}
			</View>
		</View>
	);
}