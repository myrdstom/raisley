import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterView from "./components/Registration";


function App() {
  return (
    <Router className="App">
        <ToastContainer autoClose={3000} />
        <Switch>
            <Route exact path="/" component={RegisterView} />
        </Switch>
    </Router>
  );
}

export default App;
