import Nav from './components/navbar';
import Home from './components/home';
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
      </Switch>
    </div>
</Router>
  );
}
export default App;


