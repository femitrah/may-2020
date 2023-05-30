import { inital } from './inital';
import { LOGIN, ALLUSER, SIGNUP, CREATE_USER, UPDATE_USER, DELETE_USER, TOKEN_USER } from './actionType';
function Manuplate(state = inital, action) {
    console.log('action', action)

    switch (action.type) {
        case SIGNUP:
            {
                console.log('action', action)
                return { ...state, body: action.payload };
            }
        case LOGIN:
            {
                console.log('LOGIN', action)

                return { ...state, loginDetails: action.payload };
            }
        case ALLUSER:
            {
                console.log('ALLUSER123', action, action.data)

                return { ...state, userDetails: action.data };
            }
        case CREATE_USER:
            {
                console.log('CREATE_USER', action)
                return { ...state, adduser: action.payload };
            }
        case UPDATE_USER:
            {
                console.log('UPDATE_USER', action)

                return { ...state, updateuser: action.payload };
            }
        case DELETE_USER:
            {
                console.log('DELETE_USER', action)

                return { ...state, deleteuser: action.payload };
            }
        // case TOKEN_USER:
        //     {
        //         console.log('DELETE_USER', action)

        //         return { ...state, body: action.payload };
        //     }
        default:
            {
                console.log('default', action)
                console.log(inital, "inital",);

                return state;
            }
    }
}
export { Manuplate }