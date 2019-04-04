import React, { Component } from 'react'
import { baseApiUrl } from '../../global'
import axios from 'axios'

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
				<tr>{heads}</tr>
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
        axios.get(`${baseApiUrl}/transactions`)
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
					let el = (<td key={a}>{new Date(date).toLocaleDateString("pt-BR", options)}</td>)	
					data.push(el)
				} else {
					let el = (<td key={a}>{this.state.transactions[i][this.fields[a]]}</td>)	
					data.push(el)
				}
			}		
			rows.push((<tr key={i}>{data}</tr>))
		}
		return rows
	}
	
	componentDidMount() {
		this.getData()
	}

    render(){
        return (
            <table id="table">
                {this.createHead()}
				{this.state.readyToLoad ? this.createBody() : null }
            </table>
        )
    }
}

export default Table