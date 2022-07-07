import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import PrivateRoute from './components/PrivateRouter/PrivateRouter';
import Registration from './components/Forms/Reg/Registration';
import Login from './components/Forms/Login/Login';
import Logout from './components/Forms/Logout/Logout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/start" element={<PrivateRoute>Start</PrivateRoute>} />
        <Route path="/game" element={<PrivateRoute>Game</PrivateRoute>} />
        <Route path="/rules" element={<PrivateRoute>Rules</PrivateRoute>} />
        <Route path="/info" element={<PrivateRoute>Info</PrivateRoute>} />
        <Route path="/auth/logout" element={<PrivateRoute><Logout /></PrivateRoute>} />
        <Route path="/auth/reg" element={<Registration />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
