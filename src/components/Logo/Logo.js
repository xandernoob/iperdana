import React from 'react';

import siteLogo from '../../assets/images/logo.png';
import classes from './Logo.module.scss';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={siteLogo} alt={"IPerdana"} />
    </div>
);

export default logo;