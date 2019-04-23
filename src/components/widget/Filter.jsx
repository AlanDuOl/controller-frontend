import React, { Component } from 'react'
import '../../css/Filter.css'

class Filter extends Component {
	
	constructor(props){
		super(props)
		
		this.state = {
			openFilter: false
		}
	}

    data = {}

    showFilterDropdown = () => {
		let currentStatus = this.state.openFilter
		this.setState({ openFilter: !currentStatus })
    }

    handleChange = event => {
        this.data[event.target.name] = event.target.value
    }

    clearData = () => {
		const selection = document.getElementsByClassName("filter-input")
		selection[0].value = "--"
        this.data = {}
    }

    renderFilters = () => {
        let renderFilters = []
		let options = []
        const filters = this.props.filters
        for(let index in filters){
			options.push(<option key={index} className="filter-input-option">{filters[index].name}</option>)
        }
		options.push(<option key={100} className="filter-input-option">--</option>)
		renderFilters.push(<select defaultValue="--" name="select" key={1000} className="filter-input" onChange={this.handleChange}>{options}</select>)
        return renderFilters
    }

    render() {
        return (
            <div id="home-filter-container">
				<button id="filter" onClick={this.showFilterDropdown}></button>
				<button id="filter-clear" onClick={this.clearData}></button>
				<div className={this.state.openFilter ? "filter-dropdown active":"filter-dropdown"}>
					{this.renderFilters()}
				</div>
            </div>
        )
    }
}

export default Filter