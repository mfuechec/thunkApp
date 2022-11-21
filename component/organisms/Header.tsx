import React from "react";
import { SafeAreaView, Text } from "react-native";
import Icon from "../atoms/Icon";

const Header = () => {
    return (
        <SafeAreaView style={{backgroundColor: "#F7F9FD", height: 180}}>
            <Icon variant="headerIcon" />
            <Text style={{marginLeft: 16, marginBottom: 19, fontSize: 16, marginTop: "auto"}}>MY PROJECTS</Text>
        </SafeAreaView>
    );
};

export default Header;