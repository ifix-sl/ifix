import { SafeAreaView } from "react-native-safe-area-context";

import SearchCard from "../components/home/SearchCard";
import ServicesCard from "../components/home/ServicesCard";
import SubServicesCard from "../components/home/SubServicesCard";

const HomeScreen = () => {
	return (
		<SafeAreaView>
			<SearchCard />
			<ServicesCard />
			<SubServicesCard />
		</SafeAreaView>
	);
};

export default HomeScreen;
