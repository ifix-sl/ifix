import { View, Text } from "react-native";
import { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const SignUpScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<SafeAreaView>
			<TextInput onChangeText={setEmail} value={email} />
			<TextInput onChangeText={setPassword} value={password} />
			<TextInput
				onChangeText={onChangeNumber}
				value={number}
				placeholder="useless placeholder"
				keyboardType="numeric"
			/>
		</SafeAreaView>
	);
};

export default SignUpScreen;
