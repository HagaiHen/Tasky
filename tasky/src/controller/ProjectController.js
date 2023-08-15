import { getMessage, postMessage } from "./APIController";
import Project from "@/model/project";

export const createProject = async (projectInstance) => {
  // take the projectId from the response and set it to the projectInstance
  const serverRes = await postMessage(
    "/project/createProject",
    projectInstance
  ).catch((err) => {
    alert("couldnt create project " + err.message);
  });
  await postMessage("/project/addUserToProject", {
    projectId: serverRes.projectId,
    userId: projectInstance.teamLeaderUid,
    timeEstimate: 0
  }).catch((err) => {
    alert("couldnt add user to project " + err.message);
  });
  return serverRes.projectId;
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

export const getAllProjectsByUserId = async (userId) => {
  const projects = await getMessage(`/project/getProjectOfUser/${userId}`);
  return projects.map((project) => Project.fromJSON(project));
};

export const getUsersOfProject = async (projectId) => {
  const users = await getMessage(`/project/getUsersOfProject/${projectId}`);
  return users.map((user) => ({ label: user.firstName, value: user.uid }));
};

export const addUsersToProject = async (projectId, usersId) => {
  await postMessage(`/project/addUsersToProject/${projectId}`, usersId).catch(
    (err) => {
      alert("couldnt add users to project");
    }
  );
};

export const removeUsersFromProject = async (projectId, users) => {
  await postMessage(
    `/project/removeUsersFromProject/${projectId}`,
    users
  ).catch((err) => {
    alert("couldnt remove users from project");
  });
};
