import { getMessage, postMessage } from "./APIController";

export const createTask = async (
  startDate,
  endDate,
  sprintNum,
  sprintTasks,
  sprintTeam
) => {
  await postMessage("/task/createSprint", {
    StartDate: startDate,
    EndDate: endDate,
    SprintNum: sprintNum,
    SprintTasks: sprintTasks,
    SprintTeam: sprintTeam,
  }).catch((err) => {
    alert("couldnt create task");
  });
};

export const getSprint = async (sprintId) => {
  const task = await postMessage(`/task/getSprint/${sprintId}`).catch((err) => {
    alert("couldnt get sprint" + err.message);
    return false;
  });
  return task;
};

export const deleteSprint = async (sprintId) => {
  await getMessage(`/task/deleteSprint/${sprintId}`).catch((err) => {
    alert("coulnt delete sprint" + err.message);
    return false;
  });
  return true;
};

// updateParams is an object which contains all the feilds we wish to update.
export const updateSprint = async (updateParams, sprintId) => {
  await postMessage("/task/updateSprint", {
    ...updateParams,
    sprint_id: sprintId,
  }).catch((err) => {
    alert("couldnt update sprint");
  });
};
