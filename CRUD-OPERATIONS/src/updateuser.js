// import { useState } from "react";
// import { Alert } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { viewData } from "./services/action";
// import { useEffect} from "react";
// import CreateUser from "./adduser";
// import { connect } from "react-redux";
// import { useNavigate } from "react-router-dom";
// function UpdateUser(props) {
//   const [emaillog, setEmailog] = useState("");
//   const [titlelog, setTitlelog] = useState("");
//   const [firstNamelog, setfirstNamelog] = useState("");
//   const [lastNamelog, setlastNamelog] = useState("");
//   const [rolelog, setRolelog] = useState("");
//   useEffect(() => {
//     props.viewData()
  
  // }, []);
  // const [warning, SetWarning] = useState(false);
  // let navigatePage = useNavigate();
  // function handleupdateUser() {
  //   navigatePage("/home");

  // }

// return (
//     <div className="LoginApp">
//       <div className="login-form-container">
//         <div className="login-form">
//           <div className="login-form-content">
//             <h3 className="login-form-title">Update User</h3>
//             <div className="text-center">
              
//               <span className="link-primary"></span>
//             </div>
//             {props}
//             <div className="form-group mt-3">
//               <label>Email</label>
//               <input
//                 type="email"
//                 className="form-control mt-1"
//                 placeholder="Enter email"
//                 onChange={(event) => setEmailog(event.target.value)}
//               />
//             </div>
//             <div className="form-group mt-3">
//               <label>title</label>
//               <input
//                 type="text"
//                 className="form-control mt-1"
//                 placeholder="Enter title"
//                 onChange={(event) => setTitlelog(event.target.value)}
//               />
//             </div>
//             <div className="form-group mt-3">
//               <label>Firstname</label>
//               <input
//                 type="text"
//                 className="form-control mt-1"
//                 placeholder="Enter title"
//                 onChange={(event) => setfirstNamelog(event.target.value)}
//               />
//             </div>

//             <div className="form-group mt-3">
//               <label>LastName</label>
//               <input
//                 type="text"
//                 className="form-control mt-1"
//                 placeholder="Enter title"
//                 onChange={(event) => setlastNamelog(event.target.value)}
//               />
//             </div>

//             <div className="form-group mt-3">
//               <label>Role</label>
//               <input
//                 type="text"
//                 className="form-control mt-1"
//                 placeholder="Enter title"
//                 onChange={(event) => setRolelog(event.target.value)}
//               />
//             </div>


//             <div className="d-grid gap-2 mt-3">
//               <button className="btn btn-primary" onClick={ handleupdateUser}>
//                 Submit
//               </button>
//             </div>
            
//           </div>
//           {/* {warning && (
//             <Alert>
//               <p> Please fill the details</p>
//             </Alert>
//           )} */}
//         </div>
//       </div>
//     </div>
//   );
// }
// const mapStatetoProps = (state) => {
// console.log("st", state);
// return { users: state.users ,deletestate:state.delete};
// };
// const StoreData = connect(mapStatetoProps,{viewData})(UpdateUser);
// export default StoreData;



// function App1() {
//   return <UpdateUser />;
// }
// export default App1;