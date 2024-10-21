// import logo from './logo.svg';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Menu from './pages/menu/menu';

function App() {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/menu' element={<Menu></Menu>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
