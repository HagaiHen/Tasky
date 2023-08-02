import { getMessage, postMessage } from "./APIController";

export const createSprint = async (
  startDate,
  endDate,
  sprintNum,
  sprintTeam
) => {
  await postMessage("/sprint/createSprint", {
    StartDate: startDate,
    EndDate: endDate,
    SprintNum: sprintNum,
    SprintTeam: sprintTeam,
  }).catch((err) => {
    alert("couldnt create task");
  });
};

export const getSprint = async (sprintId) => {
  const sprint = await postMessage(`/sprint/getSprint/${sprintId}`).catch((err) => {
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

export const getAllSprints = async (teamId) => {
    const sprints = await getMessage(`/sprint/getAllSprints/${teamId}`);
    return sprints;
}
