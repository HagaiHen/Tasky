const TaskStatus = {
    OPEN: 'Open',
    IN_PROGRESS: 'In Progress',
    ON_HOLD: 'On Hold',
    COMPLETE: 'Complete',
    ASSIGNED: 'Assigned' // Added state
};

const TaskDependencyType = {
    START: 'start',
    FINISH: 'finish'
};

class Task {
    constructor(id, title, description, status = TaskStatus.TODO, requiredTime = 0, team = null, assignee = null, dependencies = { [TaskDependencyType.START]: [], [TaskDependencyType.FINISH]: [] }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.requiredTime = requiredTime;
        this.team = team;
        this.assignee = assignee;
        this.dependencies = dependencies;
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

    /**
     * Add a dependency to the task.
     * @param {string} type - The type of dependency ('start' or 'finish').
     * @param {string} taskId - The unique ID of the task to be added as a dependency.
     */
    addDependency(type, taskId) {
        if (type === TaskDependencyType.START) {
            if (!this.dependencies[TaskDependencyType.START].includes(taskId)) {
                this.dependencies[TaskDependencyType.START].push(taskId);
        }
        } else if (type === TaskDependencyType.FINISH) {
        if (!this.dependencies[TaskDependencyType.FINISH].includes(taskId)) {
            this.dependencies[TaskDependencyType.FINISH].push(taskId);
        }
        }
    }

    /**
     * Remove a dependency from the task.
     * @param {string} type - The type of dependency ('start' or 'finish').
     * @param {string} taskId - The unique ID of the task to be removed as a dependency.
     */
    removeDependency(type, taskId) {
        if (type === TaskDependencyType.START) {
            const index = this.dependencies[TaskDependencyType.START].indexOf(taskId);
            if (index !== -1) {
                this.dependencies[TaskDependencyType.START].splice(index, 1);
            }
        } else if (type === TaskDependencyType.FINISH) {
            const index = this.dependencies[TaskDependencyType.FINISH].indexOf(taskId);
            if (index !== -1) {
                this.dependencies[TaskDependencyType.FINISH].splice(index, 1);
            }
        }
    }

    /**
     * Get the list of dependencies for the task.
     * @param {string} type - The type of dependencies to retrieve ('start' or 'finish').
     * @returns {array} - The list of task IDs that are dependencies of the current task.
     */
    getDependencies(type) {
        if (type === TaskDependencyType.START) {
            return this.dependencies[TaskDependencyType.START];
        } else if (type === TaskDependencyType.FINISH) {
            return this.dependencies[TaskDependencyType.FINISH];
        }
    }
}