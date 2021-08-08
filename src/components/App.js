import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Container 
    className="d-flex align-items-center justify-content-center"
    style={{minHeight: "100vh"}}> 
    <div className="w-100" style={{ maxWidth: "400px"}}>
    <AuthProvider>
      <Router>
         <Switch>
           <PrivateRoute exact path="/" component={Dashboard} />
           <Route path="/signup" component={Signup} />
           <Route path="/login" component={Login} />
         </Switch>
      </Router>
      </AuthProvider>
    </div>
    </Container> 
  )
}

export default App;
