import react from 'react';
import "./Home.css"
import { Link} from "react-router-dom";

function Home({user}){
    const logout = () => {
        window.open("http://localhost:5000/auth/logout", "_self");
      };

    return(
        
        <div className='home'>
            <div className='navbar'>
                <span className='logo'><h1>Eyepax</h1></span>
                {
                    user ? (
                <ul className='list'>
                    <li className='listitem'>
                        <img src={user.photos[0].value} alt='' className='avatar' />
                    </li>
                    <li className='listitem'>{user.displayName}</li>
                    <li className='listitem' onClick={logout}>Logout</li>
                </ul>) : (<Link className="link" to="login">Login</Link>)}
            </div>
        </div>
    );
}

export default Home;