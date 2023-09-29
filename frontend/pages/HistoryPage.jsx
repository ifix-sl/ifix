import { View, Text } from "react-native";
import React from "react";

const HistoryPage = () => {
	return (
		<View className="w-screen min-h-screen">
			<View className="flex flex-col items-center text-center">
				<View className="flex items-center mt-40">
					<Text className="text-xl font-bold">No previous services found</Text>
				</View>
			</View>
		</View>
	);
};

export default HistoryPage;
