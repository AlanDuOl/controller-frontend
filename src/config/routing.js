import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
// import NotFound from '../components/NotFount'
import Auth from '../components/auth/Auth'
import Insert from '../components/transaction/Insert'
import Home from '../components/home/Home'
import Header from '../components/template/Header'
import Store from './Store'

const Routing = () => (
        <BrowserRouter>
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/transactions/insert" component={Insert} />
					<Route path="" component={Auth} />
				</Switch>
			</div>
        </BrowserRouter>
)

export default Routing
