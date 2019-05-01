import React, { Component } from 'react'
import axios from 'axios'
import { baseApiUrl } from '../../global'
import { connect } from 'react-redux'
import '../../css/View.css'
import ViewForm from '../widget/ViewForm'

class View extends Component {

    constructor(props){
        super(props)

        this.state = {
            transactions: [],
            editData: [],
            edit: false
        }

        this.fields = ['id', 'type', 'transaction', 'description', 'amount', 'transactionDate']
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

    enableEdit = event => {
        let el = event.target.parentElement.parentElement.firstChild.children
        let editValues = []
        for(let i = 0; i < el.length; i++){
            editValues.push(el[i].innerHTML)
        }
        this.setState({ edit: true, editData: editValues })
    }
	
	loadComponents = () => {
		let rows = []
        const val = this.state.transactions
		for(let index in val){
			let data = []
			for(let field in this.fields){
                if(Number(field) === this.fields.length-1){
                    data.push(<span className="row-data" type={typeof val[index][this.fields[field]]} key={field+"-"+index}>{`${val[index][this.fields[field]].slice(8,10)}-${val[index][this.fields[field]].slice(5,7)}-${val[index][this.fields[field]].slice(0,4)}`}</span>)
                } else {
                    data.push(<span className="row-data" type={typeof val[index][this.fields[field]]} key={field+"-"+index}>{val[index][this.fields[field]]}</span>)
                }
			}
			const btns = <div className="row-btns"><button id="edit-btn" onClick={this.enableEdit}></button><button id="delete-btn"></button></div>
			rows.push(<div className="row-container" key={index}><div className="row-fields">{data}</div>{btns}</div>)
		}
		return rows
	}

	componentDidMount() {
		this.getData()
    }
    
    log = () => {
        console.log(this.state.transactions)
    }

    render(){
        return (
            <div id="view-container">
				<ViewForm user={this.props.user} edit={this.state.edit} editData={this.state.editData} />
				{this.loadComponents()}
			</div>
        )
    }
}

const mapStateToProps = state => ({
	...state
});

export default connect(mapStateToProps)(View)