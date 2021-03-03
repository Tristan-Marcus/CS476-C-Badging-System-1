import React, { Component } from "react";

import Homepage from "./components/Homepage.js";
import LogIn from "./components/LogIn"

import './App.css';
import BadgerState from "./context/badger/BadgerState"
import { Fragment } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Fragment>
                <BadgerState>
                    <Homepage />
                    {/* <LogIn />*/}
                </BadgerState>
            </Fragment>
        )
    }
}

export default App;


