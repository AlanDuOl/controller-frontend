import React, { Component } from 'react'
import loading from '../../assets/loading.gif'
import '../../css/loading.css'

class Loading extends Component {
    render() {
        return(
            <div id="loading">
                <img src={loading} alt="loading"/>
            </div>
        )
    }
}

export default Loading