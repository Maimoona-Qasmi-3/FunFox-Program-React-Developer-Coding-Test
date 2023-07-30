import React from 'react';

function Task({ task, toggleTaskCompletion, deleteTask }) {
  const handleToggle = () => {
    toggleTaskCompletion(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="task-buttons">
        <button onClick={handleToggle}>
          {task.completed ? 'Mark Incomplete' : 'Mark Completed'}
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Task;
