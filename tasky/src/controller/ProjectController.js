import { getMessage } from "./APIController";
import Project from "@/model/project";
export const getAllProjectsByUserId = async (userId) => {
  const projects = await getMessage(`/project/getProjectOfUser/${userId}`);
  return projects.map((project) => Project.fromJSON(project));
};

export const getUsersOfProject = async (projectId) => {
  const users = await getMessage(`/project/getUsersOfProject/${projectId}`);
  return users.map((user) => ({ label: user.firstName, value: user.uid }));
};
