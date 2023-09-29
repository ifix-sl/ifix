import { SafeAreaView } from "react-native-safe-area-context";

import SearchCard from "../components/home/SearchCard";
import ServicesCard from "../components/home/ServicesCard";
import SubServicesCard from "../components/home/SubServicesCard";
import OffersCard from "../components/home/OffersCard";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = () => {
	return (
		<SafeAreaView>
			<ScrollView>
				<SearchCard />
				<ServicesCard />
				<SubServicesCard />
				<OffersCard />
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
