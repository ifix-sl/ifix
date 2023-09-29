import { Card, Text } from "react-native-paper";
import { Image, View } from "react-native";

const iconButtons = [
	{
		img: require("../../assets/img/sub-services/1.png"),
		text: "Home Cleaning",
	},
	{
		img: require("../../assets/img/sub-services/2.png"),
		text: "Carpet Cleaning",
	},
	{
		img: require("../../assets/img/sub-services/3.png"),
		text: "Sofa Cleaning",
	},
];

const SubServicesCard = () => {
	return (
		<View className="px-3 mt-4">
			<Card>
				<Card.Content>
					<Text className="text-lg font-bold mb-5">Cleaning Services</Text>
					<View className="flex flex-row justify-between  ml-0">
						{iconButtons.map((item, idx) => {
							return (
								<View
									key={idx}
									className="justify-center align-middle items-center"
								>
									<Image className="w-28 h-28" source={item.img} />
									<Text className="mt-1 text-xs">{item.text}</Text>
								</View>
							);
						})}
					</View>
				</Card.Content>
			</Card>
		</View>
	);
};

export default SubServicesCard;
