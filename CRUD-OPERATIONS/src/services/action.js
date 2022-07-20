import axios from 'axios'
import { USERINFO } from './action type';
const viewData =()=>(dispatch) => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        console.log('res', res)
        dispatch({type:USERINFO, payload: res });
      })
      .catch(err => {
        // console.log('err', err)
      })
  }
export {viewData}
