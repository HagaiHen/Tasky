// Create a new task
export const createTask = async (task) => {
    try {
      const response = await fetch('/docs/tasks/createNewTask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      });
      if (!response.ok) {
        throw new Error('Failed to create task.');
      }
      const createdTask = await response.json();
      console.log('Created task:', createdTask);
      // Do something with created task
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };
  
  // Update an existing task
export const updateTask = async (taskId, task) => {
    try {
      const response = await fetch(`/docs/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      });
      if (!response.ok) {
        throw new Error('Failed to update task.');
      }
      const updatedTask = await response.json();
      console.log('Updated task:', updatedTask);
      // Do something with updated task
    } catch (error) {
      console.error(error);
      // Handle error
    }
};
  
  // Delete a task
export const deleteTask = async (taskId) => {
    try {
      const response = await fetch(`/docs/tasks/${taskId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete task.');
      }
      console.log('Deleted task:', taskId);
      // Do something after deleting task
    } catch (error) {
      console.error(error);
      // Handle error
    }
};
  
  // Retrieve all tasks
export const getTasks = async () => {
    try {
      const response = await fetch('/docs/tasks/getAllTasks');
      if (!response.ok) {
        throw new Error('Failed to retrieve tasks.');
      }
      const tasks = await response.json();
      console.log('Tasks:', tasks);
      // Do something with retrieved tasks
    } catch (error) {
      console.error(error);
      // Handle error
    }
};




// Create a new user
export const createUser = async (user) => {
  try {
    const response = await fetch('/docs/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    if (!response.ok) {
      throw new Error('Failed to create user.');
    }
    const createdUser = await response.json();
    console.log('Created user:', createdUser);
    // Do something with created user
  } catch (error) {
    console.error(error);
    // Handle error
  }
};

// Update an existing user
export const updateUser = async (userId, user) => {
  try {
    const response = await fetch(`/docs/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    if (!response.ok) {
      throw new Error('Failed to update user.');
    }
    const updatedUser = await response.json();
    console.log('Updated user:', updatedUser);
    // Do something with updated user
  } catch (error) {
    console.error(error);
    // Handle error
  }
};

// Delete a user
export const deleteUser = async (userId) => {
  try {
    const response = await fetch(`/docs/users/${userId}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete user.');
    }
    console.log('Deleted user:', userId);
    // Do something after deleting user
  } catch (error) {
    console.error(error);
    // Handle error
  }
};

// Retrieve all users
export const getUsers = async () => {
  try {
    const response = await fetch('/docs/users');
    if (!response.ok) {
      throw new Error('Failed to retrieve users.');
    }
    const users = await response.json();
    console.log('Users:', users);
    // Do something with retrieved users
  } catch (error) {
    console.error(error);
    // Handle error
  }
};