import { View, Text } from "react-native";
import React from "react";

const NotificationsPage = () => {
	return (
		<View className="w-screen min-h-screen">
			<View className="flex flex-col items-center text-center">
				<View className="flex items-center mt-40">
					<Text className="text-xl font-bold">No new notifications</Text>
				</View>
			</View>
		</View>
	);
};

export default NotificationsPage;
