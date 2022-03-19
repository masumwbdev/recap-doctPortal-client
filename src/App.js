import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Reg from './Pages/Login/Reg/Reg';
import Appoinment from './Appoinment/Appoinment/Appoinment';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Reg />} />
          <Route path='appoinment' element={<Appoinment />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
