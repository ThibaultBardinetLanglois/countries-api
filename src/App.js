//Permettre la navigation
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/country/:country"  component={CountryDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
