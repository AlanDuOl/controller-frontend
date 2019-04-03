import React, { Component } from 'react'
import { baseApiUrl } from '../../global'
import axios from 'axios'

class Table extends Component {

    transactions = []
	fields = ['type', 'transaction', 'description', 'amount', 'date']

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
            .then(res => this.transactions = res.data)
            .catch(err => console.log('error with get transactions on table: ', err))
    }
	
	loadData = () => {
		let data = []
		for(let i = 0; i < this.transactions.length; i++){
			let row = []
			for(let a = 0; a < this.fields.length; a++){
				row.push(<td>{this.transactions[i][this.fields[a]]}</td>)
			}
			data.push(row)
		}
		return data
	}
	
	componentDidUpdate() {
		this.createBody()
	}

    render(){
        return (
            <table id="table">
                {this.createHead()}
                {this.getData()}        
            </table>
        )
    }
}

export default Table