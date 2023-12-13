import { useEffect, useState } from "react";
import { useState } from 'react';

const useOnlineStatus=()=>{
    const [onlineStatus,setomlineStatus]=useState(true)
    useEffect(()=>{
        window.addEventListener('online',()=>{
            setomlineStatus(true);
        })
        window.addEventListener('offline',()=>{
            setomlineStatus(false);
        });
    },[])

    return onlineStatus;
}

export default useOnlineStatus;