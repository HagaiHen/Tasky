class Project {
  constructor(projectId = "", taskNum, backlogId, recentChange, sprintNum) {
    this.projectId = projectId;
    this.taskNum = taskNum;
    this.backlogId = backlogId;
    this.recentChange = recentChange;
    this.sprintNum = sprintNum;
  }

  toJSON() {
    return {
      projectId: this.projectId,
      taskNum: this.taskNum,
      backlogId: this.backlogId,
      recentChange: this.recentChange,
      sprintNum: this.sprintNum,
    };
  }

  static fromJSON(json) {
    return new Project(
      json.projectId,
      json.taskNum,
      json.backlogId,
      json.recentChange,
      json.sprintNum
    );
  }
}

export default Project;
