class Project {
  constructor(projectId = "", name="", taskNum = 0, backlogId = null, recentChange = null, sprintNum = 0) {
    this.projectId = projectId;
    this.name = name;
    this.taskNum = taskNum;
    this.backlogId = backlogId;
    this.recentChange = recentChange;
    this.sprintNum = sprintNum;
  }

  toJSON() {
    return {
      projectId: this.projectId,
      name: this.name,
      taskNum: this.taskNum,
      backlogId: this.backlogId,
      recentChange: this.recentChange,
      sprintNum: this.sprintNum,
    };
  }

  static fromJSON(json) {
    return new Project(
      json.projectId,
      json.name,
      json.taskNum,
      json.backlogId,
      json.recentChange,
      json.sprintNum
    );
  }
}

export default Project;
