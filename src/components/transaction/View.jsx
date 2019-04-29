import React, { Component } from 'react'
import axios from 'axios'
import { baseApiUrl, fields } from '../../global'
import { connect } from 'react-redux'
import '../../css/View.css'

class View extends Component {

    constructor(props){
        super(props)

        this.state = {
            transactions: []
        }
    }

    renderTransactions = () => {

    }

    getData = () => {
        axios.get(`${baseApiUrl}/transactions/${this.props.user.id}`)
            .then(res => {
				this.setState({ transactions: res.data })
			})
            .catch(err => console.log('didnt load data from server: ', err))
    }
	
	loadComponents = () => {
		let rows = []
		const val = this.state.transactions
		for(let index in val){
			let data = []
			for(let field in fields){
				data.push(<span className="row-data" type={typeof val[index][fields[field]]} key={field+"-"+index}>{val[index][fields[field]]}</span>)
			}
			const btns = <div className="row-btns"><button id="edit-btn"></button><button id="delete-btn"></button></div>
			rows.push(<div className="row-container"><div key={index} className="row-fields">{data}</div>{btns}</div>)
		}
		return rows
	}

	componentDidMount() {
		this.getData()
    }
    
    log = () => {
        console.log()
    }

    render(){
        return (
            <div id="view-container">{this.loadComponents()}</div>
        )
    }
}

const mapStateToProps = state => ({
	...state
});

export default connect(mapStateToProps)(View)