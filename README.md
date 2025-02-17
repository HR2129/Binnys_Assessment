# Task Manager

A simple task management application built with **React**, **GSAP** for animations, **React Router** for routing, and **TailwindCSS** for styling. The app allows users to add, edit, delete, and search tasks. All data is stored in the browser's **localStorage**.

## Features
- Add new tasks with a title, description, and due date.
- Edit existing tasks.
- Delete tasks.
- Search for tasks.
- Animated task list with **GSAP** scroll animations.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/task-manager.git
   cd task-manager
   npm install
   npm run dev


Technologies Used

React: For building the UI and managing state.
React Router: For handling routing.
GSAP: For smooth animations on the task list.
TailwindCSS: For utility-first styling.
LocalStorage: For storing task data persistently in the browser.


src/
├── components/
│   ├── AddEditTask.jsx
│   ├── Home.jsx
│   ├── TaskDetail.jsx
├── App.jsx
├── index.css
├── index.js
├── main.jsx
