import React from 'react';
import Rate from '../Rate';
import imageHolder from '../../assets/images/image-holder.png';
import classes from './RestaurantCard.module.css'
import Card from "../ui/Card";

export default function RestaurantCard(props) {
    return (
        <li className={classes.item} >
            <Card>
                <div className={classes.itemContainer}>
                    <div className={classes.image}>
                        <img className={classes.img} alt={props.name} src={!!props.images[0] ? props.images[0] : imageHolder}
                             />
                    </div>
                    <p className={classes.title}>{props.name}</p>
                    <p className={classes.subTitle}>{props.cuisine}</p>
                    <div className={classes.footer}>
                        <Rate rate = {props.rate} style={styles.rate}/>
                        <p className={classes.status}>{props.status}</p>
                    </div>
                </div>
            </Card>
        </li>
    );
}

const styles = {
    rate: {
    }
};