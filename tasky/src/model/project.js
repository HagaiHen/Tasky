class Project {
  constructor(taskNum, backlogId, recentChange, sprintNum) {
    this.taskNum = taskNum;
    this.backlogId = backlogId;
    this.recentChange = recentChange;
    this.sprintNum = sprintNum;
  }

  toJSON() {
    return {
      taskNum: this.taskNum,
      backlogId: this.backlogId,
      recentChange: this.recentChange,
      sprintNum: this.sprintNum,
    };
  }

  static fromJSON(json) {
    return new Project(
      json.taskNum,
      json.backlogId,
      json.recentChange,
      json.sprintNum
    );
  }
}

export default Project;
