import React, { useState } from 'react';

function TaskForm({ onAddTask, groups, selectedGroup, setSelectedGroup }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
      groupId: selectedGroup.id,
    };

    onAddTask(newTask);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="task-form">
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <div className="group-selector">
        <span>Select Group:</span>
        <select value={selectedGroup.id} onChange={(e) => setSelectedGroup(groups.find(group => group.id === parseInt(e.target.value)))}>
          {groups.map(group => (
            <option key={group.id} value={group.id}>{group.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default TaskForm;
