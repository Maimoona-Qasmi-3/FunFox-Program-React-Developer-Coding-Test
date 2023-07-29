import React, { useEffect, useState } from 'react';
import Task from './Task';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import './index.css';

function TaskList({ tasks, setTasks, toggleTaskCompletion, deleteTask }) {
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const [showDeletedMessage, setShowDeletedMessage] = useState(false);

  useEffect(() => {
    if (showAddedMessage) {
      const timer = setTimeout(() => {
        setShowAddedMessage(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [showAddedMessage]);

  useEffect(() => {
    if (showDeletedMessage) {
      const timer = setTimeout(() => {
        setShowDeletedMessage(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [showDeletedMessage]);

  const handleDragEnd = (result) => {
    // ... (previously defined handleDragEnd logic) ...
  };

  const handleToggle = (taskId) => {
    toggleTaskCompletion(taskId);
  };

  const handleDelete = (taskId) => {
    deleteTask(taskId);
    setShowDeletedMessage(true);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="task-list" type="TASK">
        {(provided) => (
          <div
            className="task-list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Task
                key={task.id}
                task={task}
                index={index}
                toggleTaskCompletion={handleToggle}
                deleteTask={handleDelete}
              />
            ))}
            {provided.placeholder}

            {showAddedMessage && (
              <div className="message added-message">Task added!</div>
            )}

            {showDeletedMessage && (
              <div className="message deleted-message">Task deleted!</div>
            )}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default TaskList;
