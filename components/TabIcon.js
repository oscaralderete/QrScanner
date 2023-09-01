import { MaterialIcons } from '@expo/vector-icons'

import Colors from '../theme/Colors'

export default function TabIcon({ name, tabInfo }) {
	const iconSize = 28
	return (
		<MaterialIcons
			name={name}
			size={iconSize}
			color={tabInfo.focused ? Colors.iconActive : Colors.iconInactive}
		/>
	);
}