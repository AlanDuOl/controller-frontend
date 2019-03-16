import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../css/Dropdown.css'

class Dropdown extends Component {

    constructor(props){
        super(props)

        this.state = {
            activeMenu: this.props.activeMenu,
            activeDropdown: false
        }
    }

    toggleDropdown = () => {
        let currentState = this.state.activeDropdown
        this.setState({ activeDropdown: !currentState })
	}

    renderLink(){
        let result = []
        for(let index = 0; index < this.props.links.length; index++){
            let link = this.props.links[index]
            result.push(<Link key={index} className="dropdown-link" to={link.path}>{link.name}</Link>)
        }
        return result
    }

    handleClick = event => {
        const node = document.getElementsByClassName('dropdown-group')
        if(event.target !== node[0]){
            if(this.state.activeDropdown){
                this.setState({ activeDropdown: false })
            }
        }
    }

    componentDidMount(){
        document.addEventListener('click', this.handleClick, true)
    }

    componentWillUnmount(){
        document.removeEventListener('click', this.handleClick, true)
    }

    render(){
        return(
            <div className="dropdown">
                <span onClick={this.toggleDropdown} className="dropdown-group">{this.props.title}</span>
                <div className={this.state.activeDropdown ? "dropdown-links active" : "dropdown-links"}>
                    {this.renderLink()}
                </div>
            </div>
        )
    }
}

export default Dropdown