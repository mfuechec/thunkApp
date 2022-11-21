import React, { useState } from "react";
import {Image, Pressable, StyleSheet} from "react-native";
import { IconVariants } from "../../types";

const headerIcon = require("../../assets/thunkAssets/headerIcon.png");
const beaverIcon = require("../../assets/thunkAssets/beaverIcon.png");
const deleteIcon = require("../../assets/thunkAssets/deleteIcon.png");
const editIcon = require("../../assets/thunkAssets/editIcon.png");
const deleteIconHover = require("../../assets/thunkAssets/deleteIcon_Hover.png");
const editIconHover = require("../../assets/thunkAssets/editIcon_Hover.png");
const questionIcon = require("../../assets/thunkAssets/question.png");

type IconProps = {
    variant: IconVariants;
    onPress?(): void;
};

const getIcon = (variant: IconVariants, isBeingPressed?: boolean) => {
    switch(variant) {
        case "beaverIcon" :
            return beaverIcon;
        case "deleteIcon" :
            return isBeingPressed ? deleteIconHover : deleteIcon;
        case "editIcon" :
            return isBeingPressed ? editIconHover : editIcon;
        case "headerIcon" :
            return headerIcon;
        case "questionIcon" :
            return questionIcon;
        default :
            break;
    }
};

const getStyle = (variant: IconVariants) => {
    switch(variant) {
        case "beaverIcon" :
            return styles.beaverIcon;
        case "deleteIcon" :
            return styles.deleteIcon;
        case "editIcon" :
            return styles.editIcon;
        case "headerIcon" :
            return styles.headerIcon;
        case "questionIcon" :
            return styles.questionIcon;
        default:
            break;
    }
};

const Icon = ({variant, onPress}: IconProps): JSX.Element => {
    const [isBeingPressed, setIsBeingPressed] = useState(false);
    const handlePressIn = () => setIsBeingPressed(true);
    const handlePressOut = () => setIsBeingPressed(false);
    if (onPress) {
        return (
            <Pressable onPress={onPress} onPressIn={handlePressIn} onPressOut={handlePressOut} >
                <Image
                    source={getIcon(variant, isBeingPressed)}
                    style={getStyle(variant)}
                />
            </Pressable>
        )
    } else {
        return (
            <Image
                source={getIcon(variant)}
                style={getStyle(variant)}
            />
        )
    }
}

const styles = StyleSheet.create({
    beaverIcon: {
        height: 39.31,
        width: 34.99,
    },
    deleteIcon: {
        height: 24,
        width: 24,
    },
    editIcon: {
        height: 24,
        width: 24,
    },
    headerIcon: {
        height: 32,
        width: 32,
        marginLeft: 16,
        marginTop: 16
    },
    questionIcon: {
        height: 32,
        width: 32,
    }
})

export default Icon;