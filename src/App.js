import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Reg from './Pages/Login/Reg/Reg';
import Appoinment from './Appoinment/Appoinment/Appoinment';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Reg />} />
        <Route path='appoinment' element={<Appoinment />} />
      </Routes>
    </div>
  );
}

export default App;
