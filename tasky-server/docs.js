/* js file for handle firestore documents http requests for tasky-server */
import { db } from "./server.js";
import express from "express";

// Create a new express router instance
export const docsRouter = express.Router();


// GET route to retrieve all tasks
docsRouter.get('/tasks/getAllTasks', async (req, res) => {
    try {
      const snapshot = await db.collection('tasks').get();
      const tasks = snapshot.docs.map(doc => doc.data());
      tasks.forEach((task, index) => task.id = snapshot.docs[index].id);
      res.json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve tasks.' });
    }
});

// GET route to retrieve a single task
docsRouter.get('/tasks/:taskId', async (req, res) => {
    try {
      const taskId = req.params.taskId;
      const taskSnapshot = await db.collection('tasks').doc(taskId).get();
      if (!taskSnapshot.exists) {
        res.status(404).json({ error: 'Task not found.' });
      }
      const task = taskSnapshot.data();
      task.id = taskSnapshot.id;
      res.json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve task.' });
    }
});

// POST route to create a new task
docsRouter.post('/tasks/createNewTask', async (req, res) => {
    try {
      const task = req.body;
      const docRef = await db.collection('tasks').add(task);
      task.id = docRef.id;
      res.status(201).json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create task.' });
    }
});
  
// PUT route to update an existing task
docsRouter.put('/tasks/:taskId', async (req, res) => {
    try {
      const taskId = req.params.taskId;
      const task = req.body;
      await db.collection('tasks').doc(taskId).set(task);
      res.json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update task.' });
    }
});
  
// DELETE route to delete a task
docsRouter.delete('/tasks/:taskId', async (req, res) => {
    try {
      const taskId = req.params.taskId;
      await db.collection('tasks').doc(taskId).delete();
      res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete task.' });
    }
});




// Retrieve all users
docsRouter.get('/getAllUsers', async (req, res) => {
  try {
    const snapshot = await admin.firestore().collection('users').get();
    const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// User Routes
// Create a new user
docsRouter.post('/createNewUser', async (req, res) => {
    try {
      const user = req.body;
      const userRef = await admin.firestore().collection('users').add(user);
      const createdUser = { id: userRef.id, ...user };
      res.status(201).json(createdUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

// Retrieve a user by id
docsRouter.get('/users/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
      const userSnapshot = await admin.firestore().collection('users').doc(userId).get();
      if (!userSnapshot.exists) {
        res.status(404).json({ error: 'User not found.' });
      }
      const user = userSnapshot.data();
      user.id = userSnapshot.id;
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  
// Update an existing user
docsRouter.put('/users/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = req.body;
      await admin.firestore().collection('users').doc(userId).update(user);
      res.status(200).json({ message: 'User updated successfully.' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  
// Delete a user
docsRouter.delete('/users/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
      await admin.firestore().collection('users').doc(userId).delete();
      res.status(200).json({ message: 'User deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  