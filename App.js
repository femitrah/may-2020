import React from "react";
import Log from "./login"
import Register from "./registration"
import Home from "./home"
import { BrowserRouter,Routes,Route} from "react-router-dom";

const App = () => {
  // let navigate = useNavigate();

  // const finalize = () => {
  //   const getIteams=JSON.parse( localStorage.getItem('teams'));
  //   if(getIteams.activeUser===false){
  //     // navigate("/login",{replace:true});
  //     return <Navigate to="/"/>
  //   }
    // else{
    //   // navigate("/home",{replace:true})
    //   return <Navigate to="/home"/>
    // }
  // }


  return  (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Log/>} />
          <Route path="/login" element={<Log/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
        
       
    </BrowserRouter>
  );

}


export default App;