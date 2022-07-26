import axios  from 'axios'
// import { useState } from 'react';
// import { useState } from 'react';
import { FETCHDATA,EDITDATA,VIEWDATA,LOADBEFORE,LOADAFTER} from './actionType'


export const  fetchProduct=()=>(dispatch)=>{
  
        axios.get("http://192.168.1.159:4000/users")
        .then(response=>{            
            dispatch({type:FETCHDATA,payload:response.data})
            console.log("line10",response.data)
        })
        .catch(error=>{
            console.log("err",error)
        });
}

export const deleteData =(id)=>(dispatch)=>{
    console.log("delete",id)
    axios.delete(`http://192.168.1.159:4000/users/${id}`)
    .then(response=>{            
        dispatch(fetchProduct())
        console.log("line22",response)
    })
    .catch(error=>{
        console.log("err",error)
    });
}

export const postData =(submitValues)=>(dispatch)=>{
    //  const navigate=useNavigate();
    let data= {...submitValues};
    console.log("post",data)
    axios.post("http://192.168.1.159:4000/users",data)
    .then(response=>{            
        dispatch(fetchProduct())
        console.log("line22",response)
    })
    .catch(error=>{
        console.log("err",error)
    });
}
export const editData =(id)=>(dispatch)=>{
    console.log("post",id)
    axios.get(`http://192.168.1.159:4000/users/${id}`)
    .then(response=>{   
        dispatch({type:EDITDATA,payload:response.data})         
        console.log("action create",response.data)
    })
    .catch(error=>{
        console.log("err",error)
    });
}
export const update=(updateValues,id)=>()=>{
    console.log("post",id)
    let data= {...updateValues};
    console.log("postgroup",data)
    axios.put(`http://192.168.1.159:4000/users/${id}`,data)
    .then(response=>{            
        // dispatch(editData())
        console.log("line22",response)
    })
    .catch(error=>{
        console.log("err",error)
    });
}
export const  viewData=()=>(dispatch)=>{
    
  
    axios.get("http://192.168.1.159:4000/users")
    .then(response=>{            
        dispatch({type:VIEWDATA,payload:response.data})
        console.log("response",response.data)
    })
    .catch(error=>{
        console.log("err",error)
    });
}

export const loadBefore=()=>(dispatch)=>{
    dispatch({type:LOADBEFORE})
}
export const loadAfter=()=>(dispatch)=>{
    dispatch({type:LOADAFTER})
}

