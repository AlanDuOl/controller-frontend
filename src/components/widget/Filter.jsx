import React, { Component } from 'react'
import '../../css/Filter.css'

class Filter extends Component {

    data = {}

    showFilterContent = () => {

    }

    handleChange = event => {
        this.data[event.target.name] = event.target.value
    }

    clearData = () => {
        this.data = {}
    }

    renderFilters = () => {
        let renderFilters = []
        const filters = this.props.filters
        for(let index in filters){
            renderFilters.push(<button key={index} className="filter" onClick={this.showFilterContent} onChange={this.handleChange}>{filters[index].name}</button>)
        }
        renderFilters.push(<button key={1000} className="clear-filter" onClick={this.clearData}></button>)
        return renderFilters
    }

    render() {
        return (
            <div id="home-filters-container">
                {this.renderFilters()}
            </div>
        )
    }
}

export default Filter