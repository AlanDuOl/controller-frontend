import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Dropdown extends Component {

    renderLink(){
        let result = []
        for(let index = 0; index < this.props.links.lenth; index++){
            let link = this.props.links[index]
            result.push(<Link className="dropdown-link" to={link.path}>{link.name}</Link>)
        }
        return result
    }

    render(){
        return(
            <div className="dropdown">
                <a href className="dropdown-title">{this.props.title}</a>
                <div className="dropdown-links">
                    {this.renderLink()}
                </div>
            </div>
        )
    }
}

export default Dropdown