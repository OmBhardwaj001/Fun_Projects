import React, { useEffect, useState } from "react";

function Clock(){

    const [time , setTime] = useState(0);
    const [isRunning , setisRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    const startTimer = ()=>{
        if(!isRunning){
            const id = setInterval(()=>{
                setTime(prev => prev +1);
            },1000);
            setIntervalId(id);
            setisRunning(true);
        }
    };

    const pauseTimer =()=>{
        if(intervalId){
            clearInterval(intervalId);
            setisRunning(false);
        }
    };


    const resetTimer = ()=>{
        clearInterval(intervalId);
        setTime(0);
        setisRunning(false); 
    };

    const resumeTimer =()=>{
        if(!isRunning){
            const id = setInterval(()=>{
                setTime(prev => prev + 1);
            },1000);

            setIntervalId(id);
            setisRunning(true);
        }
    };

    useEffect(()=>{
        return ()=>{
            if(intervalId){
                clearInterval(intervalId);
            }
        };
    },[intervalId]);




   return (
    <div>
      <h1>{time}</h1>
      <button onClick={startTimer} disabled={isRunning}>Start</button>
      <button onClick={pauseTimer} disabled={!isRunning}>Pause</button>
      <button onClick={resumeTimer} disabled={isRunning}>Resume</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );


}

export default Clock;