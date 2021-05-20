import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import OrderPage from './pages/Order';
import OTP from "./pages/OTP";
import { selectIsLoggedIn } from './features/user/userSlice';
import { useSelector } from 'react-redux';
import './App.css';


function App() {
  return (
    <Router>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/otp">
            <OTP />
          </Route>
          <PrivateRoute path="/order">
            <OrderPage />
          </PrivateRoute>
          <PrivateRoute path="/">
            <HomePage />
          </PrivateRoute>
        </Switch>
    </Router>
  );
}

function PrivateRoute({ children , ...rest }){
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ): (
          <Redirect to={{
            pathname: '/login',
            state: { from: location }
          }}
          />
        )
      }
    />
  )
}

export default App;
