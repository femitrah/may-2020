import { createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Manuplate } from './reducer';
const  store =createStore( Manuplate, applyMiddleware(thunk))
export{store}