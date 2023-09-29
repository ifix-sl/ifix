import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import { TextInput } from "react-native-paper";

const SearchCard = () => {
	return (
		<View className="px-3 mt-4">
			<Card>
				<Card.Content>
					<Text className="uppercase font-medium text-md text-slate-500 tracking-wider">
						Hello John 👋
					</Text>
					<Text className="mt-1 font-bold text-4xl">
						What you are looking for today?
					</Text>
					<TextInput
						className="mt-3"
						mode="outlined"
						label="Search what you need..."
						value={""}
						onChangeText={(text) => setText(text)}
						right={<TextInput.Icon icon="magnify" />}
						outlineColor="lightgray"
					/>
				</Card.Content>
			</Card>
		</View>
	);
};

export default SearchCard;
