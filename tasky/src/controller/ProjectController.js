import Project from "../models/Project";

export const createProject = async (projectInstance) => {
  await postMessage("/project/createProject", projectInstance).catch((err) => {
    alert("couldnt create project");
  });
};

export const getProject = async (projectId) => {
  const project = await getMessage(`/project/getProject/${projectId}`).catch(
    (err) => {
      alert("couldnt get project" + err.message);
      return false;
    }
  );
  return project;
};

export const deleteProject = async (projectId) => {
  await getMessage(`/project/deleteProject/${projectId}`).catch((err) => {
    alert("coulnt delete project" + err.message);
    return false;
  });
  return true;
};

// updateParams is an object which contains all the feilds we wish to update.
export const updateProject = async (projectInstance) => {
  await postMessage("/project/updateProject", projectInstance).catch((err) => {
    alert("couldnt create project");
  });
};

export const getProjectOfUser = async (userId) => {
  const projects = await getMessage(`/project/getProjectOfUser/${userId}`);
  const projectsObject = [];
  projects.forEach((project) => {
    projectsObject.push(Project.fromJSON(project));
  });
  return projects;
};
