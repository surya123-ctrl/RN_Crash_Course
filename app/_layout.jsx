import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Slot } from 'expo-router';
const RootLayout = () => {
    return (
        // <View style={styles.container}>
        //     <Text>Root Layout</Text>
        // </View>
        <Slot />
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "plum",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    }
})

export default RootLayout;
