// import Constants from 'expo-constants';

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    horizontal_container: {
        flexDirection: 'row',
        padding: 10,
        gap: 10
    },
    vertical_container: {
        flexDirection: 'column',
        padding: 10,
        gap: 10
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_rounded:{
        padding: 10,
        borderRadius: 50
    },
    white_button: {
        backgroundColor: '#dedede'
    }
});
