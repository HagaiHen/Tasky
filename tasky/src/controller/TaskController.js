import { getMessage, postMessage } from "./APIController";

export const createTask = async (
  assignee,
  buisnessValue,
  dependencies,
  description,
  devEffort,
  riskReduction,
  urgency,
  sprint,
  status,
  taskNum,
  title
) => {
  await postMessage("/task/createTask", {
    Assignee: assignee,
    BuisnessValue: buisnessValue,
    Dependencies: dependencies,
    Description: description,
    DevelopmentEffort: devEffort,
    RiskReduction: riskReduction,
    Urgency: urgency,
    Sprint: sprint,
    Status: status,
    TaskNum: taskNum,
    Title: title,
  }).catch((err) => {
    alert("couldnt create task");
  });
};

export const getTask = async (taskId) => {
  const task = await postMessage(`/task/getTask/${taskId}`).catch((err) => {
    alert("couldnt get task" + err.message);
    return false;
  });
  return task;
};

export const deleteTask = async (taskId) => {
  await getMessage(`/task/deleteTask/${taskId}`).catch((err) => {
    alert("coulnt delete task" + err.message);
    return false;
  });
  return true;
};

// updateParams is an object which contains all the feilds we wish to update.
export const updateTask = async (updateParams, taskId) => {
  await postMessage("/task/updateTask", {
    ...updateParams,
    task_id: taskId,
  }).catch((err) => {
    alert("couldnt create task");
  });
};
