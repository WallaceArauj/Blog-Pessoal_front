import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import NavBar from './components/estaticos/navbar/nabar';
import { Home } from './paginas/home/Home';
import { About} from "./paginas/about/About"

function App() {
  return (
  <>
    <Router /*Orquestrador - que monta a página que o usuário quer. */>  
    <NavBar />
    <Routes /*lista de rotas da aplicação. */>
      <Route /* Rota. */ path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </Router>
  </>
);
}

export default App;
