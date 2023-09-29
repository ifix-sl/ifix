import { Card, Text } from "react-native-paper";
import { Image, View } from "react-native";

const iconButtons = [
	{
		img: require("../../assets/img/icons/ac.png"),
		text: "A/C Repair",
	},
	{
		img: require("../../assets/img/icons/plumbing.png"),
		text: "Plumbing",
	},
	{
		img: require("../../assets/img/icons/appliance.png"),
		text: "Appliance",
	},
	{
		img: require("../../assets/img/icons/all.png"),
		text: "See all",
	},
];

const ServicesCard = () => {
	return (
		<View className="px-3 mt-4">
			<Card>
				<Card.Content>
					<View className="flex flex-row gap-6 justify-around items-stretch">
						{iconButtons.map((item, idx) => {
							return (
								<View
									key={idx}
									className="flex justify-center align-middle items-center"
								>
									<Image className="h-20 w-20" source={item.img} />
									<Text className="mt-1">{item.text}</Text>
								</View>
							);
						})}
					</View>
				</Card.Content>
			</Card>
		</View>
	);
};

export default ServicesCard;
