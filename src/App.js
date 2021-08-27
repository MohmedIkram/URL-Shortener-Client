import "./App.css";
import Body from "./components/body";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UrlShort from "./components/UrlShort";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Body />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/UrlShort">
            <UrlShort
            // formName="Sample Form Submit"
            // formDescription="This is sample form using Material UI."
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
