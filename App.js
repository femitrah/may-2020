import React from "react";
import Log from "./login"
import Register from "./registration"
import Home from "./home"
import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";

const App = () => {
 
  const ProtectedRoute = ({ user }) => {
    console.log("line10",user);
    let updatedList = JSON.parse( localStorage.getItem('items'));
      console.log("line12",updatedList);
    if (updatedList.some((user)=>user.activeUser)) {
      console.log("line12",ProtectedRoute);
      return <Home/>;
    }
    else{
    return <Navigate to="/login" />;
    }
  };

  return  (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Log/>} />
          <Route path="/login" element={<Log/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/home" element={<ProtectedRoute />} />
        </Routes>
    </BrowserRouter>
  );

}


export default App;

