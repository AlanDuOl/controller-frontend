import React, { Component } from 'react'
import { baseApiUrl } from '../../global'
import axios from 'axios'
import '../../css/Table.css'

class Table extends Component {
	
	constructor(props){
		super(props)
		
		this.state = { readyToLoad: false, transactions: [] }
	}

	fields = ['type', 'transaction', 'description', 'transactionDate', 'amount']

    createHead = () => {
        const heads = []
        const { head } = this.props.table
        for(let index in head){
            heads.push(<th key={index} className="table-head-item">{head[index]}</th>)
        }
        return (
            <thead id="table-head">
				<tr className="table-row" >{heads}</tr>
			</thead>
        )
    }

    createBody() {
        return (
            <tbody id="table-body">
				{this.loadData()}
			</tbody>
        )
    }

    getData = () => {
        axios.get(`${baseApiUrl}/transactions/${this.props.user.id}`)
            .then(res => {
				this.setState({ transactions: res.data, readyToLoad: true })
			})
            .catch(err => console.log('didnt load data from server: ', err))
    }
	
	reducer = (totalValue, initialValue) => Number(totalValue) + Number(initialValue)
	
	filterByAmount = val => {
		let vals = []
		for(let i = 0; i < val.length; i++){
			if(val[i]['amount']) vals.push(val[i]['amount'])
		}
		return vals
	}
	
	filterByDate = data => {
		if(!this.props.filter.name){
			return this.state.transactions
		}
		let result = []
		let filter = this.props.filter.value
		switch(this.props.filter.name){
			case 'anos':
				for(let index in data){
					if(filter.includes(data[index]['transactionDate'].slice(0,4))){
						result.push(data[index])
					}
				}
				return result
			case 'meses':
				for(let index in data){
					if(filter.includes(`${data[index]['transactionDate'].slice(5,7)}-${data[index]['transactionDate'].slice(0,4)}`)){
						result.push(data[index])
					}
				}
			return result
			case 'dias':
				for(let index in data){
					if(filter.includes(`${data[index]['transactionDate'].slice(8,10)}-${data[index]['transactionDate'].slice(5,7)}-${data[index]['transactionDate'].slice(0,4)}`)){
						result.push(data[index])
					}
				}
				return result
			default:
				return this.state.transactions
		}
	}
	
	loadData = () => {
		/*Put regular table data*/
		const tableData = this.filterByDate(this.state.transactions)
		let rows = []
		
		if(!this.props.user) return
		
		for(let i = 0; i < tableData.length; i++){
			let data = []
			for(let a = 0; a < this.fields.length; a++){
				//check the date field and change its format
				if(a === 3){
					let date = `${tableData[i][this.fields[a]].slice(8,10)}-${tableData[i][this.fields[a]].slice(5,7)}-${tableData[i][this.fields[a]].slice(0,4)}`
					let el = (<td className="table-data" key={a}>{date}</td>)	
					data.push(el)
				} else {
					let el = (<td className="table-data" key={a}>{tableData[i][this.fields[a]]}</td>)	
					data.push(el)
				}
			}		
			rows.push((<tr className="table-row" key={i}>{data}</tr>))
		}
		/*Check if table needs to show total on last line*/
		let vals = this.filterByAmount(tableData)
		if(this.props.table.hasTotal) {
			let newLine = []
			for(let a = 0; a < this.fields.length; a++){
				let el = []
				if(a === 0){
					el = (<td className="table-data total" key={a}>Total</td>)
				} else if(a === this.fields.length-1){
					el = (<td className="table-data total" key={a}>{vals.reduce(this.reducer)}</td>)
				} else {
					el = (<td className="table-data total" key={a}></td>)
				}
				newLine.push(el)
			}
			rows.push(<tr className="table-row" key={tableData.length}>{newLine}</tr>)
		}
		return rows
	}
	
	componentDidMount() {
		this.getData()
	}

    render(){
        return (
			<div id="table-container">
				{this.props.table.header ? <label id="table-header">{this.props.table.header}</label> : null }
				<table id="table">
					{this.createHead()}
					{this.state.readyToLoad ? this.createBody() : null }
				</table>
			</div>
        )
    }
}

export default Table