import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { formatStringSize } from "../utils/formats";
import { styles } from "../assets/styles";

const localstyles = StyleSheet.create({
	character_container: {
		padding: 10,
		borderWidth: 1,
		borderColor: "#dedede",
		marginBottom: 10,
		marginHorizontal: 20,
		borderRadius: 10,
	},
	character_name: {
		fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10
	},
	character_image: {
		borderRadius: 10,
		width: 100,
		height: 100,
	},
	charecter_image_container: {
		justifyContent: "center",
	},
	character_info_container: {
		color: "#222",
        justifyContent: "space-evenly"
	},
});

export function Character({ character, navigation }) {
	return (
		<TouchableOpacity
			onPress={() =>
				navigation.navigate("Detail", { character: character })
			}
			style={(styles.vertical_container, localstyles.character_container)}
		>
			<Text style={localstyles.character_name}>
				{formatStringSize(character.name, 20)}
			</Text>
			<View
				style={[
					styles.horizontal_container,
					localstyles.character_info_container,
				]}
			>
				<View style={localstyles.charecter_image_container}>
					<Image
						source={{ uri: character.image }}
						style={localstyles.character_image}
					/>
				</View>

				<View>
					<Text>
						Especies: {formatStringSize(character.species, 10)}
					</Text>
					<Text>
						Genero: {formatStringSize(character.gender, 10)}
					</Text>
					<Text>
						Origen: {formatStringSize(character.origin.name, 10)}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}
