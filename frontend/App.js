import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, BottomNavigation } from "react-native-paper";
import { CommonActions } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import "react-native-gesture-handler";

import SignUpScreen from "./pages/SignUpScreen";
import OTPScreen from "./pages/OTPScreen";
import HomeScreen from "./pages/HomeScreen";
import NotificationsPage from "./pages/NotificationsPage";
import HistoryPage from "./pages/HistoryPage";
import ChatsPage from "./pages/ChatsPage";

import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import {
	MD2LightTheme,
	adaptNavigationTheme,
	PaperProvider,
} from "react-native-paper";
import merge from "deepmerge";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import pallete from "./pallete.json";

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

const tabPages = [
	{
		name: "Home",
		component: HomeScreen,
		options: { headerShown: true },
		icon: "home-outline",
	},
	{
		name: "History",
		component: HistoryPage,
		options: { headerShown: true },
		icon: "newspaper-outline",
	},
	{
		name: "Notifications",
		component: NotificationsPage,
		options: { headerShown: true },
		icon: "notifications-outline",
	},
	{
		name: "Messages",
		component: ChatsPage,
		options: { headerShown: true },
		icon: "chatbox-ellipses-outline",
	},
];

const { LightTheme } = adaptNavigationTheme({
	reactNavigationLight: NavigationDefaultTheme,
});

const CombinedDefaultTheme = merge(MD2LightTheme, LightTheme);

const theme = {
	...CombinedDefaultTheme,
	colors: pallete.colors,
};

const MainTabNavigator = () => (
	<Tab.Navigator
		initialRouteName={"Home"}
		// screenOptions={({ route }) => ({
		// 	header: (props) => <CustomNavigationBar {...props} />,
		// })}
		tabBar={({ navigation, state, descriptors, insets }) => (
			<BottomNavigation.Bar
				activeColor="black"
				inactiveColor="grey"
				barStyle={{
					backgroundColor: "transparent",
				}}
				style={{
					backgroundColor: "transparent",
					paddingTop: 10,
					paddingBottom: 10,
				}}
				// theme={{ colors: { secondaryContainer: "transparent" } }}
				navigationState={state}
				safeAreaInsets={insets}
				onTabPress={({ route, preventDefault }) => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (event.defaultPrevented) {
						preventDefault();
					} else {
						navigation.dispatch({
							...CommonActions.navigate(route.name, route.params),
							target: state.key,
						});
					}
				}}
				renderIcon={({ route, focused, color }) => {
					const { options } = descriptors[route.key];
					if (options.tabBarIcon) {
						return options.tabBarIcon({ focused, color, size: 24 });
					}

					return null;
				}}
				getLabelText={({ route }) => {
					const { options } = descriptors[route.key];
					const label =
						options.tabBarLabel !== undefined
							? options.tabBarLabel
							: options.title !== undefined
							? options.title
							: route.title;

					return label;
				}}
			/>
		)}
	>
		{tabPages.map((page, idx) => {
			return (
				<Tab.Screen
					key={idx}
					name={page.name}
					component={page.component}
					options={{
						...page.options,
						tabBarLabel: page.name,
						tabBarIcon: ({ color, size }) => {
							return <Icon name={page.icon} size={size} color={color} />;
						},
					}}
				/>
			);
		})}
	</Tab.Navigator>
);

export default function App() {
	return (
		<PaperProvider theme={theme}>
			<NavigationContainer theme={theme}>
				<StatusBar translucent backgroundColor="transparent" />
				<Stack.Navigator initialRouteName="Sign Up">
					<Stack.Screen
						name="TabNavigator"
						component={MainTabNavigator}
						options={{ headerShown: false }}
					/>
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
