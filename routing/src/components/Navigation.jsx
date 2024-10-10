import React from 'react'
import { useNavigate   } from 'react-router-dom';
const Navigation = () => {
 const navigate = useNavigate();
    return (

    <div className='flex flex-row gap-4'> 
      <button
        onClick={()=>
          navigate ("/")
        }
      >home</button>
      <hr/>
      <button
        onClick={() =>
          navigate("/dashboard")
        }
      >dashboard</button>
    </div>
  )
}

export default Navigation
