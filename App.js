import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './screens/Home'
import History from './screens/History'
import Author from './screens/Author'
import Scanner from './screens/Scanner'
import TabIcon from './components/TabIcon';


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();

function TabsSection() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={Home} options={{
				headerShown: false,
				tabBarIcon: (tabInfo) => <TabIcon name="home" tabInfo={tabInfo} />
			}} />
			<Tab.Screen name="History" component={History} options={{
				headerShown: false,
				tabBarIcon: (tabInfo) => <TabIcon name="history" tabInfo={tabInfo} />
			}} />
			<Tab.Screen name="Author" component={Author} options={{
				headerShown: false,
				tabBarIcon: (tabInfo) => <TabIcon name="keyboard" tabInfo={tabInfo} />
			}} />
		</Tab.Navigator>
	);
}

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Init">
				<Stack.Screen name="Init" component={TabsSection}
					options={{
						headerShown: false
					}}
				/>
				<Stack.Screen name="Scanner" component={Scanner}
					options={{
						headerShown: false
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;