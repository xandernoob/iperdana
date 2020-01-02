import React from 'react';
import classes from './Spinner.module.scss';

const spinner = () => (
    <div className={classes.Preloader}>
        <div className={classes.Loader}></div>
    </div>
);

export default spinner;