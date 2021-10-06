//Permettre la navigation
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HashRouter as Router } from 'react-router-dom'
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/country/:country" component={CountryDetails} />
      </Switch>
    </Router>
  );
}

export default App;
