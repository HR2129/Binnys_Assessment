import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { formatISO } from 'date-fns';

function AddEditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      const tasks = JSON.parse(localStorage.getItem('tasks'));
      const task = tasks.find(task => task.id === id);
      if (task) {
        setTitle(task.title);
        setDescription(task.description);
        setDueDate(task.dueDate);
      }
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      setError('Title is required');
      return;
    }

    const newTask = { id: id || Date.now().toString(), title, description, dueDate: formatISO(new Date(dueDate)) };
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    if (id) {
      tasks = tasks.map(task => (task.id === id ? newTask : task));
    } else {
      tasks.push(newTask);
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">{id ? 'Edit Task' : 'Add Task'}</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input 
          type="text" 
          className="border p-2" 
          placeholder="Title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea 
          className="border p-2" 
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input 
          type="date" 
          className="border p-2" 
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save</button>
      </form>
    </div>
  );
}

export default AddEditTask;