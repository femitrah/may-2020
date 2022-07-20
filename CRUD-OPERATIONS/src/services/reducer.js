import { USERINFO } from "./action type";
const initialState = {
  users: [],
};
function addData(state = initialState, action) {
  console.log("action", action.type);
  switch (action.type) {
    case USERINFO:
      console.log("act", action.payload);
      return {...state, users:action.payload.data.data};

    default:
      return state;
  }
}
export { addData };
