import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import "./App.css";
import StoreData from "./component/component";
import thunk from "redux-thunk";
import { addData } from "./services/reducers";
import CreateUser from "./adduser";
import UpdateUser from "./viewdetails";
import Loginpage from "./loginpage";
import SignUp from "./signup";
import GetDetails from "./view";
import PageNotFound from "./pagenotfound";
import { GuardRoute } from "./guardRoute";

const store = createStore(addData, applyMiddleware(thunk));
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        {/* <Route path="/home" element={<StoreData />} /> */}
        <Route path="/home" element={<GuardRoute />} />
        <Route path="/adduser" element={<CreateUser />} />
        <Route path="/" element={<Loginpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/updateuser" element={<UpdateUser />}>
          <Route path=":userId" element={<UpdateUser />} />
        </Route>
        <Route path="/view" element={<GetDetails />}>
          <Route path=":userId" element={<GetDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
export default App;
