import { View, Text } from "react-native";
import { useState, useRef } from "react";
import OTPTextInput from "react-native-otp-textinput";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import axios from "axios";

const APP_ID = "APP_008059";
const PHONE_NO = "94714349454";
const PASSWORD = "53588ebf948008be442cfe978ec7dbea";

const sendRequest = () => {
	const url = "https://api.mspace.lk/otp/request";
	const payload = {
		applicationId: APP_ID,
		password: PASSWORD,
		subscriberId: "tel:" + PHONE_NO,
		applicationHash: "abcdefgh",
		applicationMetaData: {
			client: "MOBILEAPP",
			device: "Samsung S10",
			os: "android 8",
			appCode: "https://play.google.com/store/apps/details?id=lk",
		},
	};
	axios
		.post(url, payload)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
};

const verifyRequest = (OTP) => {
	const url = "https://api.mspace.lk/otp/verify";
	const payload = {
		applicationId: APP_ID,
		password: PASSWORD,
		referenceNo: "213561321321613",
		otp: OTP,
	};
	axios
		.post(url, payload)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
};

const OTPScreen = ({ navigation }) => {
	let otpInput = useRef(null);
	console.log(otpInput);

	const clearText = () => {
		otpInput.current.clear();
	};

	const setText = () => {
		otpInput.current.setValue("1234");
	};

	const [otp, setOTP] = useState("");

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
					ref={(e) => (otpInput = e)}
					inputCellLength={1}
					handleTextChange={(text) => setOTP(text)}
					keyboardType="numeric"
				/>
				<Button mode="contained" className="mt-5 py-2" onPress={sendRequest}>
					Request OTP
				</Button>
				<Button
					mode="contained"
					className="mt-5 py-2"
					onPress={() => verifyRequest(otp)}
				>
					Verify OTP
				</Button>
				<Button
					mode="contained"
					className="mt-5 py-2"
					onPress={() => navigation.navigate("TabNavigator")}
				>
					Go to Home Screen
				</Button>
			</View>
		</SafeAreaView>
	);
};

export default OTPScreen;
