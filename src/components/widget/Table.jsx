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
        axios.get(`${baseApiUrl}/transactions/insert`)
            .then(res => {
				this.setState({ transactions: res.data, readyToLoad: true })
			})
            .catch(err => console.log('didnt load data from server: ', err))
    }
	
	reducer = (totalValue, initialValue) => Number(totalValue) + Number(initialValue)
	
	filter = (val) => {
		let vals = []
		for(let i = 0; i < val.length; i++){
			console.log()
			if(val[i]['amount']) vals.push(val[i]['amount'])
		}
		return vals
	}
	
	loadData = () => {
		let options = { day: 'numeric', month: 'numeric', year: 'numeric' }
		let rows = []
		for(let i = 0; i < this.state.transactions.length; i++){
			let data = []
			for(let a = 0; a < this.fields.length; a++){
				//check the date field and change its format
				if(a === 3){
					let date = Date.parse(this.state.transactions[i][this.fields[a]])
					let el = (<td className="table-data" key={a}>{new Date(date).toLocaleDateString("pt-BR", options)}</td>)	
					data.push(el)
				} else {
					let el = (<td className="table-data" key={a}>{this.state.transactions[i][this.fields[a]]}</td>)	
					data.push(el)
				}
			}		
			rows.push((<tr className="table-row" key={i}>{data}</tr>))
		}
		let vals = this.filter(this.state.transactions)
		if(this.props.table.total) {
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
			rows.push(<tr className="table-row" key={this.state.transactions.length}>{newLine}</tr>)
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