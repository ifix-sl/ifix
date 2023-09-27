import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SignUpScreen from "./pages/SignUpScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const stackPages = [
	{
		name: "SignUp",
		component: SignUpScreen,
	},
];

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar translucent backgroundColor="transparent" />
			<Stack.Navigator initialRouteName="SignUpScreen">
				{stackPages.map((page, idx) => {
					return (
						<Stack.Screen
							key={idx}
							name={page.name}
							component={page.component}
						/>
					);
				})}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
