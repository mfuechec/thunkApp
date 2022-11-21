import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet, Alert} from "react-native";

import {project} from "../../types";
import humanize from "../../utils/humanize";
import Icon from "../atoms/Icon";

type ProjectDescriptionProps = {
    project: project,
    projectId: number,
    deleteProject(index: number): void;
    updateProjectName(projectId: number, text: string): void;
    isLast: boolean;
}

const ProjectDescription = ({project, projectId, deleteProject, updateProjectName, isLast}: ProjectDescriptionProps): JSX.Element => {
    const [text, setText] = useState(project.name);
    const [editting, setEditting] = useState(false);

    const onEndEditing =() => {
        updateProjectName(projectId, text);
        setEditting(false);
    };

    const handleEditPressed = () => {
        setEditting(true);
    };

    const handleDeletePressed = () => {
        Alert.alert(
            "Are you sure you want to delete this project?",
            "This action can't be undone",
            [
                {
                    text: "No",
                    onPress: () => console.log("No Pressed"),
                    style: "cancel"
                },
                {
                    text: "Yes",
                    onPress: () => deleteProject(projectId)
                }
            ]
        )
    };

    if (project.name.length === 0 || editting) {
        return (
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Icon variant="beaverIcon" />
                </View>
                <TextInput style={styles.input} autoFocus={isLast} onEndEditing={onEndEditing} placeholder="Name your project" onChangeText={setText} />
                {editting && 
                <View style={styles.iconsContainer}>
                    <Icon variant="editIcon" onPress={handleEditPressed} />
                    <Icon variant="deleteIcon" onPress={handleDeletePressed} />
                </View>}
            </View>
        )
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Icon variant="beaverIcon" />
            </View>
            <View style={styles.descContainer}>
                <Text style={styles.projectName}>{project.name}</Text>
                <Text style={styles.timeStamp}>{humanize(project.timeStamp)}</Text>
            </View>
            <View style={styles.iconsContainer}>
                <Icon variant="editIcon" onPress={handleEditPressed} />
                <Icon variant="deleteIcon" onPress={handleDeletePressed} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        borderTopWidth: .25,
        borderColor: "lightgrey"
    },
    descContainer: {
        marginTop: "auto",
        marginBottom: "auto",
    },
    iconContainer: {
        marginHorizontal: 16,
        marginTop: "auto",
        marginBottom: "auto",
    },
    iconsContainer: {
        marginLeft: "auto",
        display: "flex",
        flexDirection: "row",
        marginTop: "auto",
        marginBottom: "auto",
        justifyContent: "space-between",
        width: 55,
        marginRight: 10
    },
    input: {
        borderWidth: 1,
        borderColor: "#40A9FF",
        height: "30%",
        width: "50%",
        marginTop: "auto",
        marginBottom: "auto",
    },
    projectName: {
        fontSize: 16,
        fontWeight: "600"
    },
    timeStamp: {
        fontSize: 12,
        opacity: .5
    }
})

export default ProjectDescription;