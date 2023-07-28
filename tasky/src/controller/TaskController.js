import { getMessage, postMessage } from "./APIController";

export const createTask = async (
 params
) => {
  await postMessage("/task/createTask", {
    Assignee: params?.assignee,
    BuisnessValue: params?.buisnessValue,
    Dependencies: params?.dependencies,
    Description: params?.description,
    DevelopmentEffort: params?.devEffort,
    RiskReduction: params?.riskReduction,
    Urgency: params?.urgency,
    Sprint: params?.sprint,
    Status: params?.status,
    TaskNum: params?.taskNum,
    Title: params?.title,
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

export const getAllTasks = async (sprintId) => {
  const tasks = await getMessage(`/task/getAllTasks/${sprintId}`);
  return tasks;
};
