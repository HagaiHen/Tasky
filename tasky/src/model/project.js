import moment from "moment";

class Project {
  constructor(projectId = "", name="", taskNum = 0, backlogId = null, recentChange = null, sprintNum = 0, teamLeaderUid = '') {
    this.projectId = projectId;
    this.name = name;
    this.taskNum = taskNum;
    this.backlogId = backlogId;
    this.recentChange = recentChange;
    this.sprintNum = sprintNum;
    this.teamLeaderUid = teamLeaderUid;
  }

  toJSON() {
    return {
      projectId: this.projectId,
      name: this.name,
      taskNum: this.taskNum,
      backlogId: this.backlogId,
      recentChange: moment().format('YYYY-MM-DD HH:mm:ss'),
      sprintNum: this.sprintNum,
      teamLeaderUid: this.teamLeaderUid
    };
  }

  static fromJSON(json) {
    return new Project(
      json.projectId,
      json.name,
      json.taskNum,
      json.backlogId,
      json.recentChange,
      json.sprintNum,
      json.teamLeaderUid
    );
  }
}

export default Project;
