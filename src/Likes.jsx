import { useState } from "react"


function init(){
    return 0;
}

export default function Likes(){
    let [state, setState] = useState(false);
    let [count, setCount] = useState(init);
        
    
    let toggle=()=>{
            
        setState(!state);
        setCount((count)=>{
            return count+1;
        });
        setCount((count)=>{
            return count+1;
        });
    }


    let style={color:"red"};
    return(
        <>
        <div onClick={toggle}>
            <p>Count : {count}</p>
            {!state ? (
                <i className="fa-regular fa-heart"></i>
            ) : (
                <i className="fa-solid fa-heart" style={style}></i>
            )}
        </div>
        </>
    )
}