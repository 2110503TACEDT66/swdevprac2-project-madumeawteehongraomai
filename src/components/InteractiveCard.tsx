'use client'

import React from "react";

export default function InteractiveCard( {children,contentName} : {children:React.ReactNode,contentName:string}){
    
    function onCardMouseAction(event:React.SyntheticEvent){
        if(event.type == 'mouseover'){
            event.currentTarget.classList.remove('rounded-lg');
            event.currentTarget.classList.remove('bg-white');
            event.currentTarget.classList.add('rounded-lg');
            event.currentTarget.classList.add('bg-neutral-400');
        }else{
            event.currentTarget.classList.remove('rounded-lg');
            event.currentTarget.classList.remove('bg-neutral-400');
            event.currentTarget.classList.add('rounded-lg');
            event.currentTarget.classList.add('bg-white');
        }
    }

    return (
        <div className='w-[250px] h-[250px] rounded-lg mr-8' 
        
        onMouseOver={(e)=> onCardMouseAction(e)}
        onMouseOut={(e)=>onCardMouseAction(e)}>
            {children}
        </div>
    )
}