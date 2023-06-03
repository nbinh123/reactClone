import React from 'react';
import styles from "./body.module.scss"
import { Routes, Route } from 'react-router-dom';

import MainBody from './MainBody';
function Body({onWatchingChangeLogin}) {
    return (<div className={[styles.dFlex, styles.body].join(" ")}>
        <MainBody onWatchingChangeLogin={(boolean, setState) => onWatchingChangeLogin(boolean, setState)}/>
    </div >);
}

export default Body;