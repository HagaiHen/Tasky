class User {
  constructor(name, email, role, team = null) {
    this.name = name;
    this.email = email;
    this.role = role;
    this.team = team;
    this.assignedTasks = [];
  }

  updateName(name) {
    this.name = name;
  }

  updateEmail(email) {
    this.email = email;
  }

  updateRole(role) {
    this.role = role;
  }

  assignToTeam(team) {
    this.team = team;
  }

  unassignFromTeam() {
    this.team = null;
  }

  assignTask(task) {
    this.assignedTasks.push(task);
  }

  unassignTask(task) {
    const index = this.assignedTasks.indexOf(task);
    if (index !== -1) {
      this.assignedTasks.splice(index, 1);
    }
  }
}