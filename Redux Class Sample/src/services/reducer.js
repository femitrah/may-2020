import {INCREMENT,DECREMENT} from '../services/ActionType'
import {inital} from '../services/initialState'
function Counter(state = inital, action) {
    switch (action.type) {
      case INCREMENT:
        console.log('action', action)
        return { ...state, count: state.count + 1 }
      case DECREMENT:
        return { ...state, count: state.count - 1 }
      default:
        return state;
    }
  }
  export {Counter}