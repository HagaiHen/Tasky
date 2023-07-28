class Team {
    constructor(name, teamLead = null, members = [], tasks = [], id = null) {
      this.id = id;
      this.name = name;
      this.teamLead = teamLead;
      this.members = members;
      this.tasks = tasks;
      this.taskNum = 0;
      this.sprintNum = 0; 
    }
  
    updateName(name) {
      this.name = name;
    }
  
    setTeamLead(teamLead) {
      this.teamLead = teamLead;
    }
  
    addMember(user) {
      this.members.push(user);
      user.assignToTeam(this);
    }
  
    removeMember(user) {
      const index = this.members.indexOf(user);
      if (index !== -1) {
        this.members.splice(index, 1);
        user.unassignFromTeam();
      }
    }
  
    getMembers() {
      return this.members;
    }
  
    addTask(task) {
      this.tasks.push(task);
      task.assignToTeam(this);
    }
  
    removeTask(task) {
      const index = this.tasks.indexOf(task);
      if (index !== -1) {
        this.tasks.splice(index, 1);
        task.unassignFromTeam();
      }
    }
  
    getTasks() {
      return this.tasks;
    }
  
    getTeamLead() {
      return this.teamLead;
    }

    getTaskNum() {
      return this.taskNum;
    }

    getSprintNum()  {
      return this.sprintNum;
    }

  }