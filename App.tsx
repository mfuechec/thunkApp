import React, {useState} from "react";

import Header from "./component/organisms/Header";
import List from "./component/organisms/List";
import Button from "./component/molecules/Button";

import type {project} from "./types";

const App = () => {

  const [projects, setProjects] = useState<project[]>([]);
  const [updates, setUpdates] = useState(0);

  const addProject = () => {
    const newProject = {
      name: "",
      timeStamp: new Date()
    }
    setProjects(projects.concat([newProject]));
    setUpdates(updates+1);
  };

  const deleteProject = (index: number) => {
    const proj = projects;
    proj.splice(index, 1);
    setProjects(proj);
    setUpdates(updates+1);
  }

  const updateProjectName = (projectId: number, text: string) => {
    const proj = projects;
    proj[projectId].name = text;
    setProjects(proj);
    setUpdates(updates+1);
  }

  return (
    <>
      <Header />
      <List projects={projects} deleteProject={deleteProject} updateProjectName={updateProjectName} updates={updates} />
      <Button onPress={addProject} />
    </>
  );
};

export default App;
