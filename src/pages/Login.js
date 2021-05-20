import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { selectIsLoggedIn, login } from '../features/user/userSlice';
import logo from './../assets/images/logo.png';
import googleLogo from './../assets/images/logo-google.png';
import facebookLogo from './../assets/images/logo-facebook.png';
import flagUae from './../assets/images/flag-uae.png';
import { useHistory } from 'react-router-dom';
import classes from './Login.module.css';

export default function Login(){
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const history = useHistory();
  const [mobileNumber, setMobileNumber] = useState("");


  const loginClick = (event) => {
    //TODO: dispatch something to /login to ask for an OTP

      event.preventDefault();

    console.log(mobileNumber);
    fetch('/api/v1/login', {
      method: 'POST',
      body: JSON.stringify({
          "phone_number": mobileNumber,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
            history.push('/otp',mobileNumber);
          // history.push({
          //   pathname: '/otp',
          //   mobileNumber: mobileNumber,
          // });
          // setIsLoading(false);
        localStorage.setItem('MobileNumber', mobileNumber);
        });

  };

  const doNothing = () => {};

  if(isLoggedIn)
    return <Redirect to={{ pathname: '/' }} />;

  return (
    <div style={styles.container}>
      <img style={styles.image} src={logo} alt="logo" width="60" />
      
      <div className="hero-text" style={styles.heroText}>
        <h1 style={styles.noMargin}>Your Meal.</h1>
        <h1 style={styles.noMargin}>Fresh and Tasty.</h1>
      </div>
      
      <form style={styles.form}>

        <div className="input-group">
          <span className="input-group-addon"><img src={flagUae} alt="UAE" width="24" /></span>
          <input value={mobileNumber} onChange={e => setMobileNumber(e.target.value)} type="text" className="form-control form-control-lg" name="msg" placeholder="Mobile Number" />
        </div>

        <button className={'btn btn-lg ' + classes.signUpBtn} onClick={loginClick}>Free Sign Up</button>
      </form>
      
      <p className={classes.alreadyAccount}>Already have an account? <a className={classes.aLogin} href="/login">login</a></p>

      <p className={classes.or}>OR</p>

      <div style={styles.thirdPartyLoginContainer}>
        <button onClick={doNothing} className={'btn btn-lg ' + classes.facebookBtn} >
          <img className={classes.facebookLogo} src={facebookLogo} width="33"/> Continue with Facebook
        </button>
        <button onClick={doNothing} className={'btn btn-lg ' + classes.facebookBtn}>
          <img className={classes.facebookLogo} src={googleLogo} width="33" /> Continue with Google
        </button>
      </div>
    </div>
  ); 
}

const styles = {
  container: {
    marginTop: '50px',
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    paddingBottom:'20px',
  },

  heroText: {
    textAlign: 'center',
    fontSize: '40px',
    color:'#1F1F1F'
  },
  noMargin: {
    margin: 0
  },
  form: {
    width: '25%',
    marginTop: '40px',
    display: 'flex', 
    flexDirection: 'column'
  },
  thirdPartyLoginContainer: {
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center',
    width: '25%'
  },
  button: {
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'center'
  }
}