import React, {useContext, useReducer, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import {selectIsLoggedIn, login, userSlice} from '../features/user/userSlice';
import logo from './../assets/images/logo.png';
import AuthContext from "../store/auth-context";
import {createStore} from "redux";
import classes from './OTP.module.css';




export default function OTP() {
  let isLoggedIn= useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const [something, setSomething] = useState("");


    const MobileNumber = localStorage.getItem('MobileNumber');
    const authCtx = useContext(AuthContext);
    const store = createStore(useReducer)
    // console.log(this.props.location.mobileNumber);
    // const mobileNumber = this.props.location.mobileNumber;
    const loginClick = (event) => {
  //TODO: dispatch something to /login/otp to get an access token
    event.preventDefault();
    fetch('/api/v1/login/otp', {
      method: 'POST',
      body: JSON.stringify({
          "phone_number": MobileNumber,
          "otp": something,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = 'Authentication failed!';
              // if (data && data.error && data.error.message) {
              //   errorMessage = data.error.message;
              // }

              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
            authCtx.login(data.access_token);
            //dispatch(userSlice.reducer.bind(login(true)));
            dispatch(login(true));

            // localStorage.setItem('tokenID', data.access_token)
            // userSlice.reducer.apply(selectIsLoggedIn(true));
            // dispatch(selectIsLoggedIn(true));
            // dispatch(login(true));
          // history.replace('/');
        })
        .catch((err) => {
          alert(err.message);
        });
  }
    console.log(isLoggedIn);

    if (isLoggedIn)
    return <Redirect to={{ pathname: '/' }} />;

  return (
    <div style={styles.container}>


        <img style={styles.image} src={logo} alt="logo" width="60" />

        <div className="hero-text" style={styles.heroText}>
            <h1 style={styles.noMargin}>OTP Verification</h1>
        </div>

        <p className={classes.otp}>
            Please Enter the <strong>One Time Password</strong><p className={classes.otpNote}> we sent to your mobile number</p>
      </p>

      <form style={styles.form}>
        <div>
            <input className={classes.partitioned} value={something} onChange={e => setSomething(e.target.value)} type="text" maxLength="4"/>
          {/*  <div className="form-group">*/}
          {/*<input className="form-control"  style={styles.input} value={something} onChange={e => setSomething(e.target.value)} />*/}
          {/*<input className="form-control"  style={styles.input} value={something} onChange={e => setSomething(e.target.value)} />*/}
          {/*<input className="form-control"  style={styles.input} value={something} onChange={e => setSomething(e.target.value)} />*/}
          {/*<input className="form-control"  style={styles.input} value={something} onChange={e => setSomething(e.target.value)} />*/}
          {/*  </div>*/}
        </div>
          <button className={'btn btn-lg ' + classes.verifyBtn} onClick={loginClick}>Verify</button>
      </form>

        <p className={classes.resendText}>Didn't receive the OTP? <a  href="/resend-otp">Resend it</a></p>
    </div>
  );
}

/*const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heroText: {
    textAlign: 'center'
  },
  noMargin: {
    margin: 0
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    width: 30
  }
}*/


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
        width: '15%',
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