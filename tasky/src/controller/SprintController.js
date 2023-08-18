import { getMessage, postMessage } from "./APIController";
import Sprint from "../model/sprint";

export const createSprint = async (sprint) => {
  const res = await postMessage("/sprint/createSprint", sprint.toJSON()).catch((err) => {
    alert("couldnt create task");
  });
  return res.sprintId;
};

export const getSprint = async (sprintId) => {
  const sprint = await getMessage(`/sprint/getSprint/${sprintId}`).catch((err) => {
    alert("couldnt get sprint" + err.message);
    return false;
  });
  return sprint;
};

export const deleteSprint = async (sprintId) => {
  await getMessage(`/sprint/deleteSprint/${sprintId}`).catch((err) => {
    alert("coulnt delete sprint" + err.message);
    return false;
  });
  return true;
};

// updateParams is an object which contains all the feilds we wish to update.
export const updateSprint = async (updateParams, sprintId) => {
  await postMessage("/sprint/updateSprint", {
    ...updateParams,
    sprint_id: sprintId,
  }).catch((err) => {
    alert("couldnt update sprint");
  });
};

export const getAllSprints = async (projectId) => {
    const sprints = await getMessage(`/sprint/getAllSprints/${projectId}`);
    return sprints.map((sprint) => (Sprint.fromJSON(sprint)));
}
