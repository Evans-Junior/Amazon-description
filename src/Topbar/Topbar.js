import React from 'react';
import Ama from '../Assets/ama.png';
import classes from "./Topbar.module.css";

function Topbar() {
    return (
        <header className="App-header">
            <nav className={classes.Topbar}>
            <img src={Ama} alt="Amazon Logo" />
            </nav>
        </header>
    )
}

export default Topbar
