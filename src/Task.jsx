import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './index.css';

function Task({ task, index, toggleTaskCompletion, deleteTask }) {
  const handleToggle = () => {
    toggleTaskCompletion(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          className={`task ${task.completed ? 'completed' : ''}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <div className="task-buttons">
            <button onClick={handleToggle}>
              {task.completed ? 'Mark Incomplete' : 'Mark Completed'}
            </button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default Task;
