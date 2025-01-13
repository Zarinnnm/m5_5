import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainPage from './pages/mainPage/MainPage';

function App() {
  return (
    // <BrowserRouter>
    //   <Menu/>
    //   <Routes>
    //     <Route index element={<></>} />
    //     <Route path='/users-register' element={<UserRegisterPage />} />
    //     <Route path='/users' element={<UsersListPage />} />
    //   </Routes>
    // </BrowserRouter>
    <div className='App'>
      <MainPage />
    </div>
  );
}

export default App;
