import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SignUpScreen from "./pages/SignUpScreen";
import OTPScreen from "./pages/OTPScreen";

import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import {
	MD2LightTheme,
	adaptNavigationTheme,
	PaperProvider,
} from "react-native-paper";
import merge from "deepmerge";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const stackPages = [
	{
		name: "Sign Up",
		component: SignUpScreen,
		options: { tabBarVisible: false },
	},
	{
		name: "OTP Verification",
		component: OTPScreen,
		options: { tabBarVisible: false },
	},
];

const { LightTheme } = adaptNavigationTheme({
	reactNavigationLight: NavigationDefaultTheme,
});

const CombinedDefaultTheme = merge(MD2LightTheme, LightTheme);

const theme = {
	...CombinedDefaultTheme,
	// colors: customPallete.colors,
};

export default function App() {
	return (
		<PaperProvider theme={theme}>
			<NavigationContainer theme={theme}>
				<StatusBar translucent backgroundColor="transparent" />
				<Stack.Navigator initialRouteName="SignUpScreen">
					{stackPages.map((page, idx) => {
						return (
							<Stack.Screen
								key={idx}
								name={page.name}
								component={page.component}
								options={page.options}
							/>
						);
					})}
				</Stack.Navigator>
			</NavigationContainer>
		</PaperProvider>
	);
}

AppRegistry.registerComponent(appName, () => Main);
