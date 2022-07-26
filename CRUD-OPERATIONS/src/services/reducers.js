import { GETUSER,DELETEUSER,PUTUSER,POSTUSER, SINGLEGETUSER,VIEWUSER, SHOWLOAD,HIDELOAD} from "./action type";
const initialState = {
  users: [],
  delete:[],
  single:[],
  viewed:[],
  // loading:false
};
function addData(state = initialState, action) {
  // console.log("action", action.type);
  switch (action.type) {
    case GETUSER:
    //  console.log("get3345",action.payload.data)
      return {...state, users:action.payload.data}
      case SINGLEGETUSER:
        return{...state,single:action.payload.data}
           case PUTUSER:
       return {...state, updated:action.payload.data}
       case VIEWUSER:
        return {...state, viewed:action.payload}
        // case SHOWLOAD:
        //    return {...state,loading:true}

          //  case HIDELOAD:
           
          //    return {...state,loading:false}
    default:
      return state;
  }
}
export { addData };


