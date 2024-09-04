import { useEffect, useState } from 'react'
import { format } from "date-fns";
const Signup = () => {
  const [currentTime, setCurrentTime]= useState(format(Date.now(),"hh:mm:ss a"));

    useEffect(()=>{
      const id=setInterval(()=>{
        setCurrentTime(format(Date.now(),"hh:mm:ss a"))
      },1000);

      return ()=>{
        clearInterval(id);
      }
    },[])  

  return (
    <div className='flex'>

        <img src='https://cdn-icons-png.flaticon.com/512/6159/6159448.png' alt='img'/>

        <div className='text-6xl text-orange-600 font-bold'>{currentTime}</div>
    </div>
  )
}

export default Signup