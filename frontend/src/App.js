import { BrowserRouter as BRouter, Routes, Route } from 'react-router-dom';
import './global.css';



import Login from './pages/login';
import Project from './pages/project';
import UserCreate from './pages/userCreate';



function App() {
  return (

    <BRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/userCreate' element={<UserCreate/>} />
      </Routes>
    </BRouter>
   
  );
}

export default App;
