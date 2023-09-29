import { SafeAreaView } from "react-native-safe-area-context";

import SearchCard from "../components/home/SearchCard";
import ServicesCard from "../components/home/ServicesCard";

const HomeScreen = () => {
	return (
		<SafeAreaView>
			<SearchCard />
			<ServicesCard />
		</SafeAreaView>
	);
};

export default HomeScreen;
