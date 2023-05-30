import './App.css';
import UserDetails from './pages/userDetails';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './pages/page.css'
import UserList from './pages/userList';
import UserEditForm from './pages/userEditForm'
import UserLogin from './pages/userLogin';
import UserRegister from './pages/userRegister';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Nopage from './pages/Nopage';
import Adduser from './pages/Adduser';
import { Provider } from 'react-redux';
import { store } from './redux/store';
// import UserDetails from './pages/userDetails';
function App() {
  const authToken = localStorage.getItem("auth_token")
  console.log("authToken123", typeof authToken, authToken);
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<UserLogin />}></Route>
          <Route path='/UserRegister' element={<UserRegister />}></Route>
          <Route path='/UserList' element={!authToken ?  <Navigate to="/" replace={true} /> : <UserList />  }></Route>
          <Route path='/UserList/Adduser' element={!authToken ? <Navigate to="/" replace={true} /> : <Adduser />}></Route>
          <Route path='/UserDetails/:id' element={!authToken? <Navigate to="/" replace={true} /> : <UserDetails />}></Route>
          <Route path='/UserEditForm/:id' element={!authToken ? <Navigate to="/" replace={true} /> : <UserEditForm />}></Route>
          <Route path='*' element={authToken === null ? <Navigate to="/" replace={true} /> : <Nopage />}></Route>
        </Routes>

      </BrowserRouter>
      </Provider>

    </>
  );
}

export default App;
