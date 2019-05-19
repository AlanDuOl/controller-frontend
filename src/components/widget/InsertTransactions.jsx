import React, { Component } from 'react'
import '../../css/Transactions.css'

class InsertTransactions extends Component {
	
	loadComponents = () => {
		let rows = []
        const val = this.props.transactions
		for(let index in val){
			let data = []
			for(let field in this.props.fields){
                if(Number(field) === this.props.fields.length-1){
                    data.push(<span className="row-data" type={typeof val[index][this.props.fields[field]]} key={field+"-"+index}>{`${val[index][this.props.fields[field]].slice(8,10)}-${val[index][this.props.fields[field]].slice(5,7)}-${val[index][this.props.fields[field]].slice(0,4)}`}</span>)
                } else {
                    data.push(<span className="row-data" type={typeof val[index][this.props.fields[field]]} key={field+"-"+index}>{val[index][this.props.fields[field]]}</span>)
                }
			}
			rows.push(<div className="row-container" key={index}><div className="i-row-fields">{data}</div></div>)
        }
		return rows
    }
	
	render(){
		return (
			<div>
				<h5 id="i-it-header">Transações recentes</h5>
				{this.loadComponents()}
			</div>
		)
	}
	
}

export default InsertTransactions