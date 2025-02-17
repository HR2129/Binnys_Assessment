import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const task = tasks.find(task => task.id === id);

  const handleDelete = () => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    navigate("/");

  };

  if (!task) {
    return <p>Task not found</p>;
  }

  return (
    <>
      <h1 className="text-2xl mb-4">{task.title}</h1>
      <p className="mb-4">{task.description}</p>
      <p className="mb-4">{task.dueDate}</p>
      <button 
        onClick={() => history.push(`/edit/${task.id}`)} 
        className="bg-yellow-500 text-white p-2 rounded mr-2"
      >
        Edit
      </button>
      <button 
        onClick={handleDelete} 
        className="bg-red-500 text-white p-2 rounded"
      >
        Delete
      </button>
    </>
  );
}

export default TaskDetail;