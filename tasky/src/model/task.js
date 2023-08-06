// enum for task status:
export const TaskStatus = {
  TODO: "TODO",
  IN_PROGRESS: "IN_PROGRESS",
  IN_REVIEW: "IN_REVIEW",
  DONE: "DONE",
};

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
    devEffort
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
      json.businessValue,
      json.riskReduction,
      json.devEffort
    );
  }
}

export default Task;
