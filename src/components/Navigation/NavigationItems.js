import React from 'react';

import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems  = (props) => (
    <div className={classes.NavigationContainer}>
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact>Home</NavigationItem>
            <NavigationItem link="/civil" exact>Civil</NavigationItem>
            <NavigationItem link="/mechanical" exact>Mechanical</NavigationItem>
            <NavigationItem link="/career" exact>Career</NavigationItem>
            <NavigationItem link="/contact" exact>Contact</NavigationItem>
        </ul>
    </div>
    
);

export default navigationItems;