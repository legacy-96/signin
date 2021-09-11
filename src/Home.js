import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import './Home.css'
const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>    
      <h1 className='heading'>0X64 Library</h1>
      <div className='grid_container'>
          <div className='admin_side'>
              Login As Admin
          </div>
          <div className='user_side'>
              Login As user
              {currentUser ? (
        <p>
          You are logged - <Link to="/dashboard">View Dashboard</Link>
        </p>
      ) : (
        <p>
          <Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link> 
        </p>
      )}
          </div>
      </div>
      
    </>
  );
};

export default Home;