import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IndexPage from "./pages/Index";
import DetailPage from "./pages/Detail";

const Stack = createNativeStackNavigator();

function Main() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={IndexPage}
					options={{ title: "Rick and Morty Characters" }}
				/>
				<Stack.Screen
					name="Detail"
					component={DetailPage}
					options={{ title: "Loading..." }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Main;
