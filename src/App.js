import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './index.css';

const initialGroups = [
  { id: 1, name: 'Group 1' },
  { id: 2, name: 'Group 2' },
  // Add more groups if needed
];

function App() {
  const [tasks, setTasks] = useState([]);
  const [groups] = useState(initialGroups);
  const [selectedGroup, setSelectedGroup] = useState(groups[0]);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, { ...newTask, groupId: selectedGroup.id }]);
  };

  const handleToggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Filter tasks based on the selected group
  const filteredTasks = tasks.filter((task) => task.groupId === selectedGroup.id);

  return (
    <div className="container">
      <h1>Task Management System</h1>
      <TaskForm onAddTask={handleAddTask} groups={groups} selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} />
      <TaskList tasks={filteredTasks} toggleTaskCompletion={handleToggleTaskCompletion} deleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
