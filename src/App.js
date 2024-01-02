import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Componets/landingPage';
import Admin_login from './Componets/Admin/Admin_login';
import User_log from './Componets/User/User_log';
import AdminPannel from './Componets/Admin/AdminPannel';
import UserPortal from './Componets/User/UserPortal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/admin_log' element={<Admin_login/>}/>
          <Route path='/admin_pannel/*' element={<AdminPannel/>}/>
          <Route path='/user_log' element={<User_log/>}/>
          <Route path='/user_portal/*' element={<UserPortal/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
