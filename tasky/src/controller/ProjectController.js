import { getMessage } from "./APIController";
import Project from "@/model/project";
export const getAllProjectsByUserId = async (userId) => {
  const projects = await getMessage(`/project/getProjectOfUser/${userId}`);
  return projects.map((project) => Project.fromJSON(project));
};
