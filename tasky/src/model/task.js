// enum for task status:
export const TaskStatus = {
  TODO: "TODO",
  IN_PROGRESS: "IN_PROGRESS",
  IN_REVIEW: "IN_REVIEW",
  DONE: "DONE",
};

export const statusOptions = [
  { value: 0, label: "TO DO" },
  { value: 1, label: "SELECTED FOR DEVELOPMENT" },
  { value: 2, label: "IN PROGRESS" },
  { value: 3, label: "IN REVIEW" },
  { value: 4, label: "IN TESTING" },
  { value: 5, label: "DONE" },
];

class Task {
  constructor(
    taskId = "",
    title,
    description,
    status,
    sprintId,
    assigneeId,
    publisherId,
    dependencies,
    urgency,
    buisnessValue,
    riskReduction,
    devEffort,
    taskNum
  ) {
    this.taskId = taskId;
    this.title = title;
    this.description = description;
    this.status = status;
    this.sprintId = sprintId;
    this.assigneeId = assigneeId;
    this.publisherId = publisherId;
    this.dependencies = dependencies;
    this.urgency = urgency;
    this.buisnessValue = buisnessValue;
    this.riskReduction = riskReduction;
    this.devEffort = devEffort;
    this.taskNum = taskNum;
  }

  toJSON() {
    return {
      taskId: this.taskId,
      title: this.title,
      description: this.description,
      status: this.status,
      sprintId: this.sprintId,
      assigneeId: this.assigneeId,
      publisherId: this.publisherId,
      dependencies: this.dependencies,
      urgency: this.urgency,
      buisnessValue: this.buisnessValue,
      riskReduction: this.riskReduction,
      devEffort: this.devEffort,
      taskNum: this.taskNum,
    };
  }

  static fromJSON(json) {
    return new Task(
      json.taskId,
      json.title,
      json.description,
      json.status,
      json.sprintId,
      json.assigneeId,
      json.publisherId,
      json.dependencies,
      json.urgency,
      json.buisnessValue,
      json.riskReduction,
      json.devEffort,
      json.taskNum
    );
  }
}

export default Task;
