import React, {useContext, useEffect, useState} from 'react';
import RestaurantCard from '../components/restaurants/RestaurantCard';
import logo from './../assets/images/logo.png';
import RestaurantList from "../components/restaurants/RestaurantList";
import {BrowserRouter as Router} from "react-router-dom";
import Layout from '../components/layout/Layout';
import AuthContext from "../store/auth-context";


export default function Home(){

    const [isLoading, setIsLoading] = useState(true);
    const [loadedRestaurants, setLoadedRestaurants] = useState([]);
    const authCtx = useContext(AuthContext);

    console.log(authCtx.token);

    useEffect(() => {
        setIsLoading(true);
    fetch(
        '/api/v1/restaurants',
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ authCtx.token
            }
        }
    )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setIsLoading(false);
            setLoadedRestaurants(data);
        });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p style={styles.loading}>Loading...</p>
            </section>
        );
    }


  return (
      <Layout>
        <div className="container">
          <div className="">
            <div className="">
                <RestaurantList restaurants={loadedRestaurants} />
            </div>
          </div>
        </div>
      </Layout>
  ); 
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  column: {
    width: 300
  },
    loading:{
      marginTop: '20%',
      textAlign: 'center'
    }

}