import { useEffect, useState } from "react"
import { Getdata } from "./component/Getdata"
import User from "./component/UserCard"; 

function App() {
  const [userData , setUserData] = useState(null);
  const [state , setState] = useState(false);

  function refresh(){
    
    setState(!state);
  }

  useEffect(()=>{
    Getdata().then((user)=> setUserData(user.results[0]))
  },[state])
  return(
    <>
      { userData && <User data={userData}/>}
      <button onClick={refresh}> New User </button>
    </>
  )
}

export default App
