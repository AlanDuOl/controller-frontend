import React, { Component } from 'react'
import '../../css/Transactions.css'

class Transactions extends Component {
	
	loadComponents = () => {
        const val = this.props.transactions
		let rows = []
		const limit = (this.props.index + this.props.offset) >= val.length ? val.length : this.props.index + this.props.offset
		for(let index = this.props.index; index < limit; index++){
			let data = []
			for(let field in this.props.fields){
                if(Number(field) === this.props.fields.length-1){
                    data.push(<span className="row-data" type={typeof val[index][this.props.fields[field]]} key={field+"-"+index}>{`${val[index][this.props.fields[field]].slice(8,10)}-${val[index][this.props.fields[field]].slice(5,7)}-${val[index][this.props.fields[field]].slice(0,4)}`}</span>)
                } else {
                    data.push(<span className="row-data" type={typeof val[index][this.props.fields[field]]} key={field+"-"+index}>{val[index][this.props.fields[field]]}</span>)
                }
			}
			const btns = <div className="row-btns"><button id="edit-btn" onClick={this.props.enableEdit} title="Editar"></button><button id="delete-btn" onClick={this.props.remove} title="Excluir"></button></div>
			rows.push(<div className="row-container" key={index}><div className="row-fields">{data}</div>{btns}</div>)
        }
		return rows
	}
	
	render(){
		return (
			this.loadComponents()
		)
	}
	
}

export default Transactions