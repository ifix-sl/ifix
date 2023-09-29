import { Card, Text } from "react-native-paper";
import { Image, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const iconButtons = [
	{
		img: require("../../assets/img/offers/1.png"),
	},
	{
		img: require("../../assets/img/offers/2.png"),
	},
];

const OffersCard = () => {
	return (
		<View className="px-3 mt-4">
			<View className="flex flex-row gap-3">
				<ScrollView horizontal={true}>
					{iconButtons.map((item, idx) => {
						return (
							<View
								key={idx}
								className="justify-center align-middle items-center mr-2"
							>
								<Image className="" source={item.img} />
							</View>
						);
					})}
				</ScrollView>
			</View>
		</View>
	);
};

export default OffersCard;
