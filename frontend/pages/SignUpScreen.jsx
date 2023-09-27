import { View, Text } from "react-native";
import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";

const SignUpScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");

	return (
		<SafeAreaView>
			<View className="mt-12 mb-0">
				<Text className="text-center text-5xl m-0">iFix</Text>
			</View>
			<View className="p-5 pt-8 mt-3">
				<TextInput
					className="mt-5"
					label="Email"
					mode="outlined"
					value={email}
					placeholder="Enter your email"
					onChangeText={(text) => setEmail(text)}
				/>
				<TextInput
					className="mt-5"
					label="Phone Number"
					mode="outlined"
					value={phone}
					keyboardType="numeric"
					maxLength={9}
					placeholder="Enter your phone number"
					onChangeText={(text) => setPhone(text)}
					left={<TextInput.Affix text="+94" />}
				/>
				<TextInput
					className="mt-5"
					label="Password"
					mode="outlined"
					secureTextEntry={true}
					value={password}
					placeholder="Enter your password"
					onChangeText={(text) => setPassword(text)}
				/>
				<Button
					mode="contained"
					className="mt-5 py-2"
					onPress={() => navigation.navigate("OTP Verification")}
				>
					Sign Up
				</Button>
			</View>
		</SafeAreaView>
	);
};

export default SignUpScreen;
