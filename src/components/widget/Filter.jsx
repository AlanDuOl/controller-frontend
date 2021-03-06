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

    toggleFilterDropdown = () => {
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
			val.push(<option key={key++} className="filter-input-option">{item}</option>)
		}
		return(
			<select multiple id="filter-value" className="filter-input-select">
				{val}
			</select>
		)
	}
	
	storeFilterData = () => {
		const selected = document.querySelectorAll("#filter-value option:checked")
		let value = []

		if(selected.length > 1) {
			const arr = Array.from(selected)
			value = arr.map(el => el.value)	
		} else value[0] = selected[0].value

		const name = this.state.selectVal
		if(value && name){
			this.props.storeFilter({name, value})
		}
		this.setState({ openFilter: false })
	}
	
	getData = () => {
        axios.get(`${baseApiUrl}/transactions/${this.props.user.id}`)
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
				let newDate = val[i]['transactionDate'].slice(0,10).split('-')
				dates.dias.add(`${newDate[2]}-${newDate[1]}-${newDate[0]}`)
				dates.meses.add(`${newDate[1]}-${newDate[0]}`)
				dates.anos.add(newDate[0])
			}
		}
		this.setState({ dates })
	}

    clearFilter = () => {
		const selection = document.getElementById("input-clear")
		selection.value = "--"
		this.setState({ selectVal: undefined })
		this.props.storeFilter({})
    }

    renderFilters = () => {
        let renderFilters = []
		let options = []
        const filters = this.props.filters
        for(let index in filters){
			options.push(<option key={index} className="filter-input-option">{filters[index].name}</option>)
        }
		options.push(<option key={100} className="filter-input-option">--</option>)
		renderFilters.push(<select id="input-clear" defaultValue="--" name="select" key={1000} className="filter-input-select" onChange={this.handleChange}>{options}</select>)
        return renderFilters
    }
	
	componentDidMount(){
		this.getData()
	}

    render() {
        return (
            <div id="home-filter-container">
				<button id="filter" onClick={this.toggleFilterDropdown}></button>
				<button id="filter-clear" onClick={this.clearFilter}></button>
				<div className={this.state.openFilter ? "filter-dropdown active":"filter-dropdown"}>
					{this.renderFilters()}
					{this.state.selectVal ? this.loadOptions(): <select id="filter-value" className="filter-input-select"><option>--</option></select>}
					<button id="filter-send" onClick={this.storeFilterData}>Aplicar</button>
				</div>
            </div>
        )
    }
}

export default Filter