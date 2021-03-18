import React from 'react';
import bugTrackerLogo from '../../Assets/bug_tracker_logo.png';
import classes from './logo.module.css';

const logo = (
    <div className={classes.Logo}>
        <img src={bugTrackerLogo} alt="Bug Logo"/>
    </div>
);

export default logo;