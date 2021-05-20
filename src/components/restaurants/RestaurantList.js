// import classes from 'RestaurantList.module.css';
import RestaurantCard from "./RestaurantCard";
import React from "react";
import classes from "./RestaurantList.module.css"

function RestaurantList(props){

    return <ul className={classes.list}>
        {props.restaurants.map( restaurant  => (
            <RestaurantCard
                key = {restaurant.id}
                id = {restaurant.id}
                name = {restaurant.name}
                images = {restaurant.images}
                cuisine = {restaurant.cuisine}
                rate = {restaurant.rate}
                status = {restaurant.status}
            />
        ))}

    </ul>
}

export default RestaurantList;