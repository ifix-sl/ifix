import { View, Text } from "react-native";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { registerUser } from "../services/register";

const SignUpScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");

	const register = () => {
		const PHONE_NO = "94714349454";
		const payload = {
			contactNo: PHONE_NO,
			name: "John Doe",
			password: "pwd12345",
		};
		const res = registerUser(payload);
		res
			.then((response) => {
				console.log(response);
				navigation.navigate("OTP Verification");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<SafeAreaView>
			<View className="mt-12 mb-0 flex justify-center align-middle items-center">
				<Image className="" source={require("../assets/img/logo.png")} />
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
				<Button mode="contained" className="mt-5 py-2" onPress={register}>
					Sign Up
				</Button>
				<Button
					mode="contained"
					className="mt-3 py-2"
					onPress={() => navigation.navigate("OTP Verification")}
				>
					Go to OTP Screen
				</Button>
			</View>
		</SafeAreaView>
	);
};

export default SignUpScreen;
