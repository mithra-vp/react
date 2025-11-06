import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const UseEff = () => {

    const [seconds,setSeconds] = useState(0);

    useEffect(() => {
        const intervel = setInterval(() =>{
            setSeconds((s) => s+1);
        },1000)

        return ()=> clearInterval(intervel)                //(unmounted)
    },[])           //[]  =empty(mounted)
  return (
    <div>
      <p>Timer: {seconds}seconds</p>
    </div>
  )
}

export default UseEff
// Updated