import { useEffect, useState } from "react";
import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { fetchAllCharacters } from "../api/Fetcher";
import { Character } from "../components/Character";
import { styles } from "../assets/styles";

const localstyles = StyleSheet.create({
	characters_container: {
		height: "80%",
	},
	index_ui_container: {
		height: "10%",
	},
});

export default function IndexPage({ navigation }) {
	const [data, setData] = useState([]);
	const [totalPages, settotalPages] = useState(0);
	const [page, setPage] = useState(1);
	const [cache, setCache] = useState({});

	useEffect(() => {
		if (!cache[page]) {
			console.log("fetching page", page);
			fetchAllCharacters(page).then((data) => {
				setCache({ ...cache, [page]: data.results });
				setData(data.results);
				settotalPages(data.info.pages);
			});
		} else {
			console.log("using cache for page", page);
			setData(cache[page]);
		}
	}, [page]);

	function handleNextPage() {
		if (page < totalPages) {
			setPage((page) => page + 1);
		}
	}

	function handlePrevPage() {
		if (page > 1) {
			setPage((page) => page - 1);
		}
	}

	return (
		<View>
			<View
				style={[
					styles.horizontal_container,
					localstyles.index_ui_container,
					styles.center,
				]}
			>
				<Text>Characters of Rick and Morty</Text>
			</View>
			<FlatList
				data={data}
				style={localstyles.characters_container}
				renderItem={({ item }) => (
					<Character character={item} navigation={navigation} />
				)}
				keyExtractor={(item) => item.id}
			/>

			<View
				style={[
					styles.horizontal_container,
					localstyles.index_ui_container,
					styles.center,
				]}
			>
				<Text>
					page {page} of {totalPages}
				</Text>
				<TouchableOpacity
					style={[styles.button_rounded, styles.white_button]}
					onPress={handlePrevPage}
				>
					<Text>prev</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.button_rounded, styles.white_button]}
					onPress={handleNextPage}
				>
					<Text>next</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
