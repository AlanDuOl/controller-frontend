import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import NotFound from '../components/NotFount'
import Auth from '../components/auth/Auth'
import Insert from '../components/transaction/Insert'
import Home from '../components/home/Home'
import { MenuDropdown as Links } from '../components/single/MenuDropdown.jsx'

const Routing = (
    <div>
        <BrowserRouter>
            {Links.Links}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/auth" component={Auth} />
                <Route path="/transactions/insert" component={Insert} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    </div>
)

export default Routing
