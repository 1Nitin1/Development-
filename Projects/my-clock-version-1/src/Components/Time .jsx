import { useState } from "react";

function Time(){
   let t = new Date();
   let [currTime,setTime]=useState(`Current Time : ${t.toLocaleDateString()} - ${t.toLocaleTimeString()}`);
   setInterval(()=>{
      t = new Date();
      setTime(`Current Time : ${t.toLocaleDateString()} - ${t.toLocaleTimeString()}`);
   },1000);
   return <p>{currTime}</p>
}
export default Time;