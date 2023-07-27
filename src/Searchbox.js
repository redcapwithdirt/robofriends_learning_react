import React from "react";

const Searchbox = ({searchfield,onsearch})=>{
    return(
        <div className="pa2">

            <input className="pa2 ba b--green bg-lightest-blue" type="search" placeholder="search robots" onChange={onsearch}/>
        </div>
        
    );
}

export default Searchbox;