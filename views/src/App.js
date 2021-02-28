import Nav from './components/navbar';
import Home from './components/home';
import SignUp from './components/signup';
import LogIn from './components/login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
<Router>
    <div className="App">
      <Switch>  
        <Route exact path = "/">
          <Nav />
          <Home />
        </Route>
        <Route path = "/signup">
          <SignUp />
        </Route>
        <Route path = "/login">
          <LogIn />
        </Route>
      </Switch>
    </div>
</Router>
  );
}
export default App;


