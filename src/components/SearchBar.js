import React from "react";
import { useState } from "react";
import {FaSearch} from "react-icons/fa";
import './SearchBar.css';
var data = require('../test.json')


export const SearchBar=()=>{

    const [value,setValue] = useState('');
    const onChange=(event)=>{
        setValue(event.target.value);
    }
    const onSearch=(searchTerm)=>{
        setValue(searchTerm);
    }
    const onKeyPress=(event)=>{
        if(event.key==='Enter'){
            //json fetch
            console.log(value);
        }
    }
    return(
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input type="text" value={value} placeholder="Type to search.." onChange={onChange} onKeyDown={onKeyPress} />
            <div className="dropdown">
                {data.filter(item=>{
                    const searchTerm = value.toLowerCase(); 
                    const name = item.dish.toLowerCase();
                    return searchTerm && name.startsWith(searchTerm)
                })
                .map((item)=>(
                <div onClick={()=>onSearch(item.dish)} className="dropdrown-row">{item.dish}</div>
                ))
            }
            </div>
        </div>
    )
}