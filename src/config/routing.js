import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from '../App';

const routing = (
    <Router>
            <Route exact path="/" component={App} />
    </Router>
)

export default routing