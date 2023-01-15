import React from 'react'
import { useNavigate } from 'react-router-dom';


const Forbidden = () => {

    const navigate = useNavigate();


    const navigateDashboard= () => {
        // 👇️ navigate to /contacts
        navigate('/');
      };
    
    return (
        <div>
            <h1 className='title'>FORBIDDEN</h1>
            <h2 className='subtitle'> You do not have access to this page. Please Press the Home Button</h2>
            <div className="buttons">
                <button onClick={navigateDashboard} className="button is-light">
                  Home
                </button>
              </div>
        </div>
        
    )
}
export default Forbidden