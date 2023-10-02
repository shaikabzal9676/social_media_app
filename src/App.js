import Login from "./pages/login/Login";
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Profile from './pages/profile/Profile';

import {
  
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
     <Route index element={<Home/>}  />
     <Route path="login" element={<Login/>}/>
     <Route path="register" element={<Register/>}/>
     <Route path="profile/:username" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
      )
}
export default App;
