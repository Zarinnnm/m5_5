import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserRegisterPage from './pages/userRegisterPage/UserRegisterPage';
import UsersListPage from './pages/usersListPage/UsersListPage';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route index element={<></>} />
        <Route path='/users-register' element={<UserRegisterPage />} />
        <Route path='/users' element={<UsersListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
