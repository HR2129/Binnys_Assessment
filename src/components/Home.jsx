import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPlus } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);

    gsap.from('.task-item', {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.task-list',
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <input 
          type="text" 
          className="border p-2 w-full" 
          placeholder="Search tasks..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to="/add" className="ml-4 bg-blue-500 text-white p-2 rounded-full">
          <FaPlus />
        </Link>
      </div>
      <div className="task-list grid gap-4">
        {filteredTasks.map(task => (
          <div key={task.id} className="task-item bg-white p-4 shadow-md rounded-md">
            <Link to={`/task/${task.id}`}>
              <h2 className="text-xl font-bold">{task.title}</h2>
              <p className="text-gray-600">{task.dueDate}</p>
            </Link>
            <button 
              onClick={() => handleDelete(task.id)} 
              className="bg-red-500 text-white p-2 mt-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;