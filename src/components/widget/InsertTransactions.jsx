import React, { Component } from 'react'

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
			const btns = <div className="row-btns"><button id="edit-btn" onClick={this.props.enableEdit}></button><button id="delete-btn" onClick={this.props.remove}></button></div>
			rows.push(<div className="row-container" key={index}><div className="row-fields">{data}</div>{btns}</div>)
        }
		return rows
    }
	
	render(){
		return (
			<div>{this.loadComponents()}</div>
		)
	}
	
}

export default InsertTransactions