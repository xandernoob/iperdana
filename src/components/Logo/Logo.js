import React from 'react';

import siteLogo from '../../assets/images/logo.png';
import classes from './Logo.module.scss';

const logo = (props) => (
    <div className={classes.Logo}>
        <a href="/"><img src={siteLogo} alt={"IPerdana"} /></a>
    </div>
);

export default logo;