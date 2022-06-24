import { Autocomplete } from "@mui/material";
import './App.css'
import SearchIcon from '@mui/icons-material/Search';
import React,{useState} from 'react';

export default function SearchBar({data,placeholder}){
    // let [selects,setSelects]=useState();
    let [Data,setData]=useState()
    function getData(val){
        setData(val.target.value)
        console.warm(val.target.value);
    }
    return(
        <div className="search">
            <div className="display">{Data}</div>
            <div className="searchInput">
                <Autocomplete
                    id="custom-input-demo"
                    options={data}
                    getOptionLabel={(opt)=> opt.name} 
                    
                    renderInput={(params)=>(
                        <div ref={params.InputProps.ref}>
                            <input type="text"{...params.inputProps} placeholder={placeholder} autoFocus='true' onClick={getData}/>
                        </div>
                    )}
                    >
                </Autocomplete>
                <div className="searchIcon">
                <SearchIcon></SearchIcon>
               </div>
               {/* <input type="button" value="search"/> */}
            </div>
            
            
            
        </div>
       
    )
    
}
