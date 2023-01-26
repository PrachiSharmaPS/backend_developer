import NavBar from './Navbar';
import React from 'react';
import TableForEdit from './Tabels';
import CreateTask from './CreateTask';
import './App.css';
function App() {
  return (
    <React.StrictMode>
    <NavBar/>,
    <CreateTask/>
    <TableForEdit/>
  </React.StrictMode>
  );
}

export default App;
