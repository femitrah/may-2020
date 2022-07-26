import React from "react";
import Log from "./login"
import Register from "./registration"
// import Home from "./home"
// import {Details} from "./details"
import NotFound from "./unknown"
import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from 'redux'
import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import {  Provider } from 'react-redux';
import {Reducer} from '../src/services/reducer';
import  Displaydata  from './component/component';
import AddUser from "./component/addUser"
import Edit from "./component/edit"
import View from "./component/view"

const App = () => {
 
  const ProtectedRoute = () => {
  
    let updatedList = JSON.parse( localStorage.getItem('items'));
      console.log("line12",updatedList);
    if (updatedList.some((user)=>user.activeUser)) {
      console.log("line12",ProtectedRoute);
      return <Displaydata/>;
    }
    else{
    return <Navigate to="/login" />;
    }
  };
  const store = createStore(Reducer, applyMiddleware(thunk))
  return  (
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound/>} />
          <Route path="/" element={<Log/>} />
          <Route path="/login" element={<Log/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/home" element={<ProtectedRoute />} />
          <Route exact path='/adduser' element={<AddUser/>} ></Route>
          <Route path="/home/:id" element={<Edit/>}></Route>
          <Route path="home/view/:id" element={<View/>}></Route>
          
          
        </Routes>
    </BrowserRouter>
    </Provider> 
  );

}


export default App;

