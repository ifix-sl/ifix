import axios from "axios";

const CHATGPT_API_URL =
	"https://api.openai.com/v1/engines/davinci-codex/completions";

const generateResponse = async (text) => {
	const response = await axios.post(
		CHATGPT_API_URL,
		{
			prompt: `The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.
    Human: ${text}
    AI:`,
			max_tokens: 150,
			temperature: 0.7,
			n: 1,
			stop: "Human:",
		},
		{
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${YOUR_API_KEY}`,
			},
		}
	);

	const { choices } = response.data;
	const { text: generatedText } = choices[0];

	return generatedText.trim();
};
