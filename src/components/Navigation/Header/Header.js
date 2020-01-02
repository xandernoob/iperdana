import React from 'react';

import classes from './Header.module.scss';
import NavigationItems from '../NavigationItems';
import Logo from '../../../components/Logo/Logo';

const header = () => (
    <div className={classes.Header}>
        <Logo />
        <NavigationItems />
    </div>
)

export default header;