import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import logo from "../../assets/images/logo.png";
import React from "react";

function MainNavigation() {
  return (
    <header className={classes.header}>
        <img src={logo} alt="logo" width="60" />
        <h1 className="text-lg-center font-weight-bold">Best classic Dubai restaurants</h1>
    </header>
  );
}

export default MainNavigation;
