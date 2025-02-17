import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import AddEditTask from './components/AddEditTask';
import TaskDetail from './components/TaskDetail';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-500 p-4 text-white">
        <Link to="/" className="text-2xl">Task Manager</Link>
      </header>
      <main className="p-4">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/add" element={<AddEditTask/>} />
          <Route path="/edit/:id" element={<AddEditTask/>} />
          <Route path="/task/:id" element={<TaskDetail/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;