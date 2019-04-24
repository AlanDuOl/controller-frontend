import React, { Component } from 'react'
import '../../css/Filter.css'
import axios from 'axios'
import { baseApiUrl } from '../../global.js'

class Filter extends Component {
	
	constructor(props){
		super(props)
		
		this.state = {
			openFilter: false,
			transactions: [],
			dates: {},
			selectVal: ''
		}
	}

    showFilterDropdown = () => {
		if(!this.state.openFilter) this.filterDates()
		let currentStatus = this.state.openFilter
		this.setState({ openFilter: !currentStatus })
    }

    handleChange = event => {
		this.setState({ selectVal: event.target.value })
    }
	
	loadOptions = () => {
		if(this.state.selectVal === '--') return
		const selectVal = this.state.dates[this.state.selectVal]
		let val = []
		let key = 0
		for(let item of selectVal){
			val.push(<li key={key++} className="list-items">{item}</li>)
		}
		return(
			<div className="list-container">
				<ul className="list-options">
					{val}
				</ul>
			</div>
		)
	}
	
	sendFilterData = () => {
		
	}
	
	getData = () => {
        axios.get(`${baseApiUrl}/transactions/insert`)
            .then(res => {
				this.setState({ transactions: res.data })
			})
            .catch(err => console.log('didnt load data from server: ', err))
    }
	
	filterDates = () => {
		const val = this.state.transactions
		let dates = {dias: new Set(), meses: new Set(), anos: new Set()}
		for(let i = 0; i < val.length; i++){
			if(val[i]['transactionDate']) {
				dates.dias.add((val[i]['transactionDate']).slice(0,10))
				let newDate = val[i]['transactionDate'].slice(0,10).split('-')
				dates.meses.add(newDate[1])
				dates.anos.add(newDate[0])
			}
		}
		this.setState({ dates })
	}

    clearFilter = () => {
		const selection = document.getElementsByClassName("filter-input")
		selection[0].value = "--"
		this.setState({ selectVal: undefined })
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
	
	componentDidMount(){
		this.getData()
	}

    render() {
        return (
            <div id="home-filter-container">
				<button id="filter" onClick={this.showFilterDropdown}></button>
				<button id="filter-clear" onClick={this.clearFilter}></button>
				<div className={this.state.openFilter ? "filter-dropdown active":"filter-dropdown"}>
					{this.renderFilters()}
					{this.state.selectVal ? this.loadOptions(): null}
					<button onClick={this.sendFilterData}>Aplicar</button>
				</div>
            </div>
        )
    }
}

export default Filter