import { postMessage, getMessage } from "./APIController";

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