import React from "react";
import { Dimensions, ScrollView } from "react-native";

import ProjectDescription from "../molecules/ProjectDescription";

import type { project } from "../../types";

import {v4 as uuid} from "uuid";

const {height} = Dimensions.get("screen");

type ListProps = {
    projects: project[];
    deleteProject(index: number): void;
    updateProjectName(index: number, text: string): void;
    updates: number;
};

const List = ({projects, deleteProject, updateProjectName, updates}: ListProps): JSX.Element => {
    
    return (
        <ScrollView style={{height: height - 180, backgroundColor: "#F7F9FD"}}>
            {projects.map((project, i, {length}) => {
                return <ProjectDescription updateProjectName={updateProjectName} project={project} projectId={i} key={uuid()} deleteProject={deleteProject} isLast={i + 1 === length} />
            })}
        </ScrollView>
    )
}

export default List;