import { useEffect, useState } from "react";
import { Text, Image, StyleSheet, ScrollView } from "react-native";

const DetailPage = ({ route, navigation }) => {
	const { character } = route.params;
	const [characterDetails, setCharacterDetails] = useState(null);

	useEffect(() => {
		navigation.setOptions({ title: "Detail of " + character.name });
		setCharacterDetails(character);
	}, []);

	return (
		<ScrollView contentContainerStyle={styles.container}>
			{characterDetails && (
				<>
					<Image
						source={{ uri: characterDetails.image }}
						style={styles.characterImage}
					/>
					<Text style={styles.characterName}>
						{characterDetails.name}
					</Text>
					<Text>Status: {characterDetails.status}</Text>
					<Text>Species: {characterDetails.species}</Text>
					<Text>Gender: {characterDetails.gender}</Text>
					<Text>Origin: {characterDetails.origin.name}</Text>
					<Text>Location: {characterDetails.location.name}</Text>
					<Text>First seen in episode:</Text>
					<Text>{characterDetails.episode[0]}</Text>
					<Text>Created: {characterDetails.created}</Text>
				</>
			)}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
	characterImage: {
		width: 200,
		height: 200,
		borderRadius: 100,
		marginBottom: 20,
	},
	characterName: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 10,
	},
});

export default DetailPage;
