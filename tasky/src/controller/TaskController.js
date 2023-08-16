import { getMessage, postMessage, uniquePostMessage } from "./APIController";
import Task from "@/model/task";

export const createTask = async (taskInstance) => {
  const task = taskInstance.toJSON();
  await postMessage("/task/createTask", task).catch((err) => {
    alert("couldnt create task");
  });
};

export const getTask = async (taskId) => {
  const task = await postMessage(`/task/getTask/${taskId}`).catch((err) => {
    alert("couldnt get task" + err.message);
    return false;
  });
  return Task.fromJSON(task);
};

export const deleteTask = async (taskId) => {
  await getMessage(`/task/deleteTask/${taskId}`).catch((err) => {
    alert("coulnt delete task" + err.message);
    return false;
  });
  return true;
};

// updateParams is an object which contains all the feilds we wish to update.
export const updateTask = async (taskInstance) => {
  const task = taskInstance.toJSON();
  await postMessage("/task/updateTask", task).catch((err) => {
    alert("couldnt create task");
  });
};

export const getAllTasks = async (sprintId) => {
  const tasksJSON = await getMessage(`/task/getAllTasks/${sprintId}`);
  return tasksJSON.map((task) => Task.fromJSON(task));
};

export const getSortedList = async (lst) => {
  console.log("get sortedlist fun");
  const tasksJSON = await uniquePostMessage(`task/sort`, lst);
  return tasksJSON['Sched'];
};

