import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Reg from './Pages/Login/Reg/Reg';
import Appoinment from './Appoinment/Appoinment/Appoinment';
import AuthProvider from './context/AuthProvider';
// import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import PrivateOutlate from './Pages/Login/PrivateOutlate/PrivateOutlate';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Reg />} />
          <Route path='/*' element={<PrivateOutlate />}>
            <Route path='appoinment' element={<Appoinment />}/>
            <Route path='contact' element={<Contact />}/>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
