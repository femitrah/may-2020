import UserData from "./component/component";
import { Navigate } from "react-router-dom";

export const GuardRoute = () => {
    console.log("sasasas");
    let updatedList = JSON.parse(localStorage.getItem("Data"));
    console.log("ul",updatedList)
    if (updatedList.some((userdata) => userdata.activeStatus)) {
      return <UserData />;
    } else {
      return <Navigate to="/login" />
    }
  };