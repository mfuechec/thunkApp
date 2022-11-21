import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type ButtonProps = {
    onPress(): void;
}

const Button = ({onPress}: ButtonProps): JSX.Element => {
    return (
        <Pressable style={styles.pressable} onPress={onPress}>
            <Text style={styles.text}>+</Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    pressable: {
        height: 60,
        width: 60,
        backgroundColor: "#4A475F",
        borderRadius: 360,
        position: "absolute",
        bottom: 40,
        right: 20
    },
    text: {
        textAlign: "center",
        marginTop: "auto",
        marginBottom: "auto",
        fontSize: 32,
        color: "white",
        lineHeight: 32
    }
})

export default Button;