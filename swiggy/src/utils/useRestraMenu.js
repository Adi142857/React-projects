import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants.js";

const useRestraMenu=(resId)=>{

    const [resInfo,setResInfo]=useState(null);

    useEffect(() => {
        fetchData();
        // console.log("Use Effect");
        // return()=>{
        //   console.log("Clean")
        // }
      }, []);

      const fetchData = async () => {
        try {
          const data = await fetch(MENU_URL+resId);
          const json = await data.json();
          setResInfo(json?.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      return resInfo;

}

export default useRestraMenu;