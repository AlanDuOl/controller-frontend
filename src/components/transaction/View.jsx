import React, { Component } from 'react'
import axios from 'axios'
import { baseApiUrl } from '../../global'
import { connect } from 'react-redux'
import '../../css/View.css'
import ViewForm from '../widget/ViewForm'
import Transactions from '../widget/Transactions'

class View extends Component {

    constructor(props){
        super(props)

        this.state = {
            transactions: [],
            edit: false
        }

        this.fields = ['id', 'type', 'transaction', 'description', 'amount', 'transactionDate']
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
        const inputs = document.querySelectorAll('#insert-form .form-control')
        for(let i = 0; i < inputs.length; i++){
            if(i === inputs.length -1){
                const date = `${editValues[i].slice(3,5)}/${editValues[i].slice(0,2)}/${editValues[i].slice(6,10)}`
                inputs[i].valueAsDate = new Date(date)
            } 
            else inputs[i].value = editValues[i]
        }
        this.setState({ edit: true })
    }

    disableEdit = () => {
        this.setState({ edit: false })
    }
	
	remove = event => {
        let el = event.target.parentElement.parentElement.firstChild.children
        let editValues = []
        for(let i = 0; i < el.length; i++){
            editValues.push(el[i].innerHTML)
        }
        
        axios.delete(`${baseApiUrl}/transactions/${editValues[0]}`)
            .catch(err => console.log(err))
			
		this.getData()
    }

	componentDidMount() {
		this.getData()
    }

    render(){
        return (
            <div id="view-container">
				<ViewForm user={this.props.user} edit={this.state.edit} fields={this.fields} disableEdit={this.disableEdit} />
				<Transactions transactions={this.state.transactions} enableEdit={this.enableEdit} fields={this.fields} remove={this.remove} />
			</div>
        )
    }
}

const mapStateToProps = state => ({
	...state
});

export default connect(mapStateToProps)(View)