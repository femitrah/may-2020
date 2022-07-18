import {BrowserRouter,Routes,Route,Navigate,} from "react-router-dom";
import Loginpage from './loginpage'
import SignUp from './signup';
import Home from './home';
import App1, { GetDetails } from "./viewdetails";
// import PageNotFound from './pagenotfound';
// import GetDetails from './viewdetails'

function App() {
  const ProtectedRoute = () => {
    // console.log("line7",userdata);
    let updatedList = JSON.parse( localStorage.getItem('Data'));
      // console.log("line11",updatedList);
    if (updatedList.some((userdata)=>userdata.activeStatus)) {
      // console.log("line11",ProtectedRoute);
      return <Home/>;
    }
    else{
    return <Navigate to="/login" />;
    }
  };
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Loginpage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/home" element={<ProtectedRoute/>} />
      <Route path="/signup" element={<SignUp />}/>
      <Route path="app1" element={<App1 />}>
        <Route path=":userId" element={<GetDetails />} />
      </Route>
      {/* <Route path="/pagenotfound" element={<PageNotFound />}/> */}
      {/* <Route path=":userId" element={<GetDetails />} /> */}

      </Routes>
    </BrowserRouter>
  )
}
export default App
