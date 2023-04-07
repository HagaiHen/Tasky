const TaskStatus = {
    OPEN: 'Open',
    IN_PROGRESS: 'In Progress',
    ON_HOLD: 'On Hold',
    COMPLETE: 'Complete',
    ASSIGNED: 'Assigned' // Added state
  };
  
  class Task {
    constructor(title, description, dueDate, requiredTime, status = TaskStatus.OPEN, priority = 'Low', team = null, assignee = null) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.requiredTime = requiredTime;
      this.status = status;
      this.priority = priority;
      this.team = team;
      this.assignee = assignee;
    }
  
    markAsComplete() {
      this.status = TaskStatus.COMPLETE;
    }
  
    markAsOpen() {
      this.status = TaskStatus.OPEN;
    }
  
    markAsInProgress() {
      this.status = TaskStatus.IN_PROGRESS;
    }
  
    markAsOnHold() {
      this.status = TaskStatus.ON_HOLD;
    }
  
    markAsAssigned() {
      this.status = TaskStatus.ASSIGNED; // Added method
    }
  
    updatePriority(priority) {
      this.priority = priority;
    }
  
    assignToTeam(team) {
      this.team = team;
      this.markAsAssigned(); // Mark task as assigned when assigning to a team
    }
  
    assignToUser(user) {
      this.assignee = user;
      this.markAsAssigned(); // Mark task as assigned when assigning to a user
    }
  
    unassignFromTeam() {
      this.team = null;
      this.markAsOpen(); // Mark task as open when unassigning from a team
    }
  
    unassignFromUser() {
      this.assignee = null;
      this.markAsOpen(); // Mark task as open when unassigning from a user
    }
  }