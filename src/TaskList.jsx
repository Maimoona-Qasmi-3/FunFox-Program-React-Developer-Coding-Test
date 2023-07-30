import React from 'react';
import Task from './Task';

function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
  const handleToggle = (taskId) => {
    toggleTaskCompletion(taskId);
  };

  const handleDelete = (taskId) => {
    deleteTask(taskId);
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTaskCompletion={handleToggle}
          deleteTask={handleDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
