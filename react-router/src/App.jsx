import './App.css';
import UserDetails from './pages/userDetails';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './pages/page.css'
import UserList from './pages/userList';
import UserEditForm from './pages/userEditForm'
import UserLogin from './pages/userLogin';
import UserRegister from './pages/userRegister';
import {BrowserRouter ,Route,Routes ,Navigate} from 'react-router-dom'
import Nopage from './pages/Nopage';
import Adduser from './pages/Adduser';
// import UserDetails from './pages/userDetails';
function App() {
  return (
    <>
<BrowserRouter>
<Routes>
<Route path='/' index element={<UserLogin/>}></Route>
<Route path='/UserRegister'  element={<UserRegister/>}></Route>
<Route path='/UserList'  element={JSON.parse(localStorage.getItem("login")) === null ? <Navigate to="/" replace={true} />:<UserList/>}></Route>
<Route path='/UserList/Adduser'  element={JSON.parse(localStorage.getItem("login")) === null ? <Navigate to="/" replace={true} />:<Adduser/>}></Route>

<Route path='/UserDetails/:id'  element={JSON.parse(localStorage.getItem("login")) === null ? <Navigate to="/" replace={true} />:<UserDetails/>}></Route>
<Route path='/UserEditForm/:id'  element={JSON.parse(localStorage.getItem("login")) === null ? <Navigate to="/" replace={true} />:<UserEditForm/>}></Route>
<Route path='*'  element={JSON.parse(localStorage.getItem("login")) === null ? <Navigate to="/" replace={true} />:<Nopage/>}></Route>



</Routes>

</BrowserRouter>
    </>
  );
}

export default App;
