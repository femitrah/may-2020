import { EDITDATA, FETCHDATA,LOADBEFORE,LOADAFTER,UPDATEDATA,VIEWDATA} from "./actionType";
// import {useState} from "react"
let inital={
    item:[],
    edit:{},
    loaded:false
}


function Reducer(state=inital,action){
    
    switch(action.type){
        case FETCHDATA:
            console.log("line8",action.payload)
            return{...state,item:action.payload}
        case EDITDATA:
            console.log("line13",action.payload)
           return{...state,edit:action.payload}
        case UPDATEDATA:
            console.log("line16",action.payload)
           return{...state,edit:action.payload}
        case VIEWDATA:
            console.log("line8",action.payload)
            return{...state,item:action.payload}
        case LOADBEFORE:
            return{...state,loaded:true}
        case LOADAFTER:
            return{...state,loaded:false}
        
            default:
                return state;
    }
}
export  {Reducer}


