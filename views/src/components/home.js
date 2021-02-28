import '../styles/home.css';
import '../App.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <div className="container">

            <div className="lock"></div>

            <h1 className="welcome">WELCOME TO</h1>

            <h1 className="name">SECURE VAULT</h1>

            <h1 className="motto">Your Privacy Matters</h1>

            

            {/* <nav>
            <ul>
            <div><a className="logo" href="/"></a></div>

            <div className="btn-conatiner"> 

            <button className="btn-signup" variant="contained" color="primary">
                <li><a href="#">SIGNUP</a></li>
            </button>

            <button className="btn-login" variant="contained" color="primary">
            <li><a href="#">LOGIN</a></li>
            </button>


          </div>

        </ul>

     </nav> */}

     <Link to = "/signup" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" style= {{ fontFamily :'Graduate', left : '120vh', top: '5vh', padding: '16px 32px', textAlign: 'center', textDecoration: 'none', display: 'inlineBlock' , fontSize: '16px', margin: '4px 2px', opacity: '1', transition: '0.3s', cursor: 'pointer', width: '250px', height : '75px' }}>
     Try for Free</Button></Link>

   </div>

    );
}

export default Home;

