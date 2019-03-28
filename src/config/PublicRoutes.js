import React, { Component } from 'react'
import Auth from '../components/auth/Auth'
import { Route } from 'react-router-dom'

class PublicRoutes extends Component {
    render(){
        return (
            <div>
                <Route path="/auth" component={Auth} />
            </div>
        )
    }
}

export default PublicRoutes