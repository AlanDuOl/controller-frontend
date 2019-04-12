import React, { Component } from 'react'
import { baseApiUrl } from '../../global'
import axios from 'axios'
import '../../css/Table.css'

class Table extends Component {
	
	constructor(props){
		super(props)
		
		this.state = { readyToLoad: false, transactions: [] }
	}

	fields = ['type', 'transaction', 'description', 'amount', 'transactionDate']

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
	
	loadData = () => {
		let options = { day: 'numeric', month: 'numeric', year: 'numeric' }
		let rows = []
		for(let i = 0; i < this.state.transactions.length; i++){
			let data = []
			for(let a = 0; a < this.fields.length; a++){
				if(a === 4){
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
		return rows
	}
	
	componentDidMount() {
		this.getData()
	}

    render(){
        return (
			<div id="table-container">
				<label id="table-header">Transações recentes</label>
				<table id="table">
					{this.createHead()}
					{this.state.readyToLoad ? this.createBody() : null }
				</table>
			</div>
        )
    }
}

export default Table