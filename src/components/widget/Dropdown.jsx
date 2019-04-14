import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../css/Dropdown.css'
import { userKey } from '../../global'
import { connect } from 'react-redux'
import signinAction from '../../actions/signinAction'
import { withRouter } from 'react-router'

class Dropdown extends Component {

    constructor(props){
        super(props)

        this.state = {
            activeDropdown: false
        }
    }
	
	getDropdowns = () => {
		let dropdowns = []
		const node = document.getElementsByClassName('dropdown-group')
		for(let index = 0; index < node.length; index++){
			dropdowns.push(node[index].innerHTML)
		}
		return dropdowns
	}

    toggleDropdown = () => {
        let currentState = this.state.activeDropdown
        this.setState({ activeDropdown: !currentState })
    }
    
    signout = () => {
        this.props.signinAction({user: undefined})
        localStorage.setItem(userKey, '')
        this.props.router.replace('/auth')
    }

    renderLink(){
        let result = []
        for(let index = 0; index < this.props.links.length; index++){
            let link = this.props.links[index]
            if(link.path === '/auth') {
                result.push(<Link key={index} className="dropdown-link" to={link.path} onClick={this.signout}>{link.name}</Link>)
            } else {
                result.push(<Link key={index} className="dropdown-link" to={link.path}>{link.name}</Link>)
            }
        }
        return result
    }
	
	handleResize = () => {
		this.props.closeMenu()
	}

    handleClick = event => {
		const dropdowns = this.getDropdowns()
		const btn = document.getElementsByClassName('menu-btn')

		if(this.props.isMenuOpen){
			if(!dropdowns.includes(event.target.innerHTML) && event.target !== btn[0]){
				this.props.closeMenu()
				if(this.state.activeDropdown){
					this.setState({ activeDropdown: false })	
				}
			} else {
				if(dropdowns.includes(event.target.innerHTML) && event.target.innerHTML !== this.props.title){
					this.setState({ activeDropdown: false })
				}
			}
		} else {
			if(event.target.innerHTML !== this.props.title){
				if(this.state.activeDropdown){
					this.setState({ activeDropdown: false })	
				}
			}
		}
    }

    componentDidMount(){
		document.addEventListener('click', this.handleClick, true)
		document.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount(){
        document.removeEventListener('click', this.handleClick, true)
		document.removeEventListener('resize', this.handleResize)
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

const mapStateToProps = state => ({
	...state
})

const mapDispatchToProps = dispatch => ({
	signinAction: (user) => dispatch(signinAction(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dropdown))