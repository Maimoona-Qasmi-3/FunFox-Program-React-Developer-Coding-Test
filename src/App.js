import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './index.css';

function App() {
  const [userGroup, setUserGroup] = useState('Group A');
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description for Task 1', completed: false },
    { id: 2, title: 'Task 2', description: 'Description for Task 2', completed: false },
  ]);

  const addTask = (title, description) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <h1>Task Management System</h1>
      <h2>User Group: {userGroup}</h2>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} setTasks={setTasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
