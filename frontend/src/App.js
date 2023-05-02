import { BrowserRouter as BRouter, Routes, Route } from 'react-router-dom';
import './global.css';



import Login from './pages/login';
import Project from './pages/project';
import UserCreate from './pages/userCreate';
import Perfil from './pages/perfil';
import Kanban from './pages/kanban';

function App() {
  return (

    <BRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/userCreate' element={<UserCreate/>} />
        <Route path= '/perfil' element={<Perfil/>} />
        <Route path= '/project/kanban' element={<Kanban/>} />
      </Routes>
    </BRouter>
   
  );
}

export default App;
