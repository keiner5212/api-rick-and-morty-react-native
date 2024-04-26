import axios from "axios";

export const fetchCharacter = async (characterId) => {
	try {
		const response = await axios.get(
			`https://rickandmortyapi.com/api/character/${characterId}`
		);
		return response.data;
	} catch (error) {
		console.error("Error fetching character:", error);
		return null;
	}
};

export const fetchAllCharacters = async (page = 1) => {
	try {
		const response = await axios.get(
			"https://rickandmortyapi.com/api/character?page=" + page
		);
		return response.data;
	} catch (error) {
		console.error("Error fetching characters:", error);
		return null;
	}
};
