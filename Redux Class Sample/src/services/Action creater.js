import axios from 'axios'
import {INCREMENT,DECREMENT} from '../services/ActionType'
const doIncrement = (data, data2) => (dispatch, getState) => {
    console.log("data", getState());
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => {
        console.log('res', res)
        dispatch({ type: INCREMENT, data: res });
      })
      .catch(err => {
        console.log('err', err)
      })
  }
  const doDecrement = () => dispatch => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => {
        console.log("res", res);
        dispatch({ type: DECREMENT, data: res });
      })
      .catch(err => {
        console.log("err", err);
      });
  };
  axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(res=>{
    
  })
  .catch(err=>{
      
  })
  export {doIncrement,doDecrement}