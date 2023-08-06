// a class for a sprint with properties: sprintid, startdate, enddate, teamid, sprintnumber

class Sprint {
  constructor(sprintId="", startDate, endDate, projectId, sprintNumber) {
    this.sprintId = sprintId,
    this.startDate = startDate;
    this.endDate = endDate;
    this.projectId = projectId;
    this.sprintNumber = sprintNumber;
  }

  toJSON() {
    return {
      startDate: this.startDate,
      endDate: this.endDate,
      projectId: this.projectId,
      sprintNumber: this.sprintNumber,
    };
  }

  static fromJSON(json) {
    return new Sprint(
      json.sprintId,
      json.startDate,
      json.endDate,
      json.projectId,
      json.sprintNumber
    );
  }
}

export default Sprint;
