import '../styles/home.css';
import '../App.css';
import Button from '@material-ui/core/Button';



const Home = () => {
    return (
        <div className="container">

            <div className="lock"></div>

            <h1 className="welcome">WELCOME TO</h1>

            <h1 className="name">SECURE VAULT</h1>

            <h1 className="motto">Your Privacy Matters</h1>

            

            <div className="navbar">
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

        <button className="btn" variant="contained" color="primary">Try For Free</button>

     </div>

   </div>

    );
}

export default Home;