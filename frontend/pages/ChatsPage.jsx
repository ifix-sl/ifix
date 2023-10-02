import React, { useState } from "react";
import { GiftedChat, InputToolbar } from "react-native-gifted-chat";
import { OPENAI_KEY } from "@env";
import axios from "axios";
import { StyleSheet } from "react-native";
import { Configuration, OpenAIApi } from "openai";

const ChatsPage = () => {
	const [messages, setMessages] = useState([]);

	function generatePrompt(prompt) {
		return `You are a AI assistant in a on demand home services app. 
		The app provides services like plumbing, gardening, appliance repair etc. 
		You are chatting with the customer and he says the following prompt.
		Prompt: ${prompt}`;
	}

	const sendMessage = async (message) => {
		const configuration = new Configuration({
			apiKey: OPENAI_KEY,
		});
		const openai = new OpenAIApi(configuration);

		try {
			const completion = await openai.createCompletion({
				model: "text-davinci-003",
				prompt: generatePrompt(message),
				temperature: 0.6,
			});

			return completion.data.choices[0].text;
		} catch (error) {
			console.log(error);
		}
	};

	const onSend = async (newMessages = []) => {
		setMessages((prev) => GiftedChat.append(prev, newMessages));

		const response = await sendMessage(newMessages[0].text);
		const chatMessage = [
			{
				_id: Math.random().toString(36).substring(7),
				text: response,
				createdAt: new Date(),
				user: {
					_id: 2,
					name: "iFix",
					// avatar: require("../assets/chatgptlogo.png"),
				},
			},
		];

		setMessages((prev) => GiftedChat.append(prev, chatMessage));
	};

	const user = {
		_id: 1,
		name: "John Doe",
		// avatar: require("../assets/profile.jpeg"),
	};

	const renderInputToolbar = (props) => {
		return <InputToolbar {...props} containerStyle={styles.input} />;
	};

	return (
		<GiftedChat
			messages={messages}
			onSend={onSend}
			user={user}
			placeholder={"How can I help you?"}
			showUserAvatar={true}
			showAvatarForEveryMessage={true}
			renderInputToolbar={renderInputToolbar}
			messagesContainerStyle={styles.messageContainer}
		/>
	);
};

const styles = StyleSheet.create({
	messageContainer: {
		// paddingBottom: 16,
	},
	input: {
		borderColor: "transparent",
		borderWidth: 0,
		borderRadius: 4,
		// marginBottom: 16,
	},
});

export default ChatsPage;
