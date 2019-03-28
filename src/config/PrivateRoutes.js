import React, { Component } from 'react'
import Insert from '../components/transaction/Insert'
import Home from '../components/home/Home'
import Header from '../components/template/Header'
import Footer from '../components/template/Footer'
import NotFound from '../components/NotFount'
import { Route, Switch, Redirect } from 'react-router-dom'

class PrivateRoutes extends Component {
    render(){
        return(
            <div>
				<Header />
				<Switch>
                    <Redirect from="/auth" to="/" />
					<Route exact path="/" component={Home} />
					<Route path="/transactions/insert" component={Insert} />
					<Route path="*" component={NotFound} />
				</Switch>
				<Footer className="footer" />
			</div>
        )
    }
}

export default PrivateRoutes