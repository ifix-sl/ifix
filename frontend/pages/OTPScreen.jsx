import { View, Text } from "react-native";
import React from "react";
import OTPTextInput from "react-native-otp-textinput";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";

const OTPScreen = ({ navigation }) => {
	return (
		<SafeAreaView>
			<View className="mt-5">
				<Text className="text-center text-3xl m-0">Verification Code</Text>
				<Text className="text-center text-sm m-0">
					Enter the code sent to your phone number
				</Text>
			</View>
			<View className="p-8 my-8">
				<OTPTextInput
					inputCount={4}
					handleTextChange={(text) => console.log(text)}
					inputCellLength={1}
					keyboardType="numeric"
				/>
				<Button
					mode="contained"
					className="mt-5 py-2"
					onPress={() => navigation.navigate("TabNavigator")}
				>
					Continue
				</Button>
			</View>
		</SafeAreaView>
	);
};

export default OTPScreen;
