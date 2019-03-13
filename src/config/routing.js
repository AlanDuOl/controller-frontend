import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import NotFound from '../components/NotFount'
import Auth from '../components/auth/Auth'
import Insert from '../components/transaction/Insert'
import Home from '../components/home/Home'
import Header from '../components/template/Header'

const Routing = () => (
        <BrowserRouter>
			<div>
				<Header />
				<Switch>
					<div className="content">
						<Route exact path="/" component={Home} />
						<Route path="/auth" component={Auth} />
						<Route path="/transactions/insert" component={Insert} />
						<Route path="*" component={NotFound} />
					</div>
				</Switch>
			</div>
        </BrowserRouter>
)

export default Routing
