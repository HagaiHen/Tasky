import { postMessage, getMessage } from "./APIController";

export const createTeam = async (id, name, teamLead, members, tasks) => {
  await postMessage(
    "/task/createTask",
    new Team(name, teamLead, members, tasks)
  ).catch((err) => {
    alert("couldnt create team");
  });
  const getTeam = async (id) => {
    const team = await postMessage("/task/getTeam", id).catch((err) => alert(err));
    return team;
  };
};
