import "./App.css";
import Body from "./components/Body";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import UrlShort from "./components/UrlShort";
import SendEmail from "./components/SendEmail";
import ResetPassword from "./components/ResetPassword";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorPage from "./components/Pagefournotfour";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Body />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route exact path="/forgot-password">
            <SendEmail />
          </Route>
          <Route exact path="/ResetPassword/:resetToken">
            <ResetPassword />
          </Route>
          <Route path="/UrlShort">
            <UrlShort />
          </Route>
          <Route path="/*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
