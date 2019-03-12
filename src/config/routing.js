import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from '../App';
import NotFound from '../components/NotFount'
import Auth from '../components/auth/Auth'
import Insert from '../components/transaction/Insert'

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/auth" component={Auth} />
            <Route path="/transactions/insert" component={Insert} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)

export default routing
