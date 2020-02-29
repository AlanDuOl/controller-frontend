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
            edit: false,
            startIndex: 0
        }

        this.offset = 5

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
        const el = event.target.parentElement.parentElement.firstChild.children
        const inputs = document.querySelectorAll('#insert-form .form-control')
        let editValues = []

        if(el && inputs) {
            for(let i = 0; i < el.length; i++){
                editValues.push(el[i].innerHTML)
            }
            for(let i = 0; i < inputs.length; i++){
                if(i === inputs.length -1){
                    const date = `${editValues[i].slice(3,5)}/${editValues[i].slice(0,2)}/${editValues[i].slice(6,10)}`
                    inputs[i].valueAsDate = new Date(date)
                } 
                else inputs[i].value = editValues[i]
            }
            this.setState({ edit: true })
        }
        else {
            console.log("Could not access elements in DOM")
        }
        
    }

    disableEdit = () => {
		this.getData()
        this.setState({ edit: false })
    }
	
	remove = async event => {
		let check = window.confirm("Confirma exclusão?")
		
		if(check){
            let el = event.target.parentElement.parentElement.firstChild.children
            let editValues = []

            if (el) {
                for(let i = 0; i < el.length; i++){
                    editValues.push(el[i].innerHTML)
                }
                
                await axios.delete(`${baseApiUrl}/transactions/${editValues[0]}`)
                    .catch(err => console.log(err))
                    
                this.getData()
            }
            else {
                console.log("Could not find the element in DOM")
            }
		}
    }

    nextPage = () => {
        let currentIndex = this.state.startIndex
        let newIndex = currentIndex + this.offset
        
        if(newIndex > this.state.transactions.length){

        } else {
            this.setState({ startIndex: newIndex })
        }
    }

    previousPage = () => {
        let currentIndex = this.state.startIndex
        let newIndex = currentIndex - this.offset
        if(newIndex < 0){

        } else {
            this.setState({ startIndex: newIndex })
        }
    }

	componentDidMount() {
		this.getData()
    }

    render(){
        return (
            <div id="view-container">
				<ViewForm user={this.props.user} edit={this.state.edit} fields={this.fields} disableEdit={this.disableEdit} />
				<Transactions transactions={this.state.transactions} enableEdit={this.enableEdit} fields={this.fields} remove={this.remove} index={this.state.startIndex} offset={this.offset} />
                <div id="pag-btns-container">
                    <button id="pag-btn-left" onClick={this.previousPage} title="Página anterior"></button>
                    <button id="pag-btn-right" onClick={this.nextPage} title="Próxima página"></button>
                </div>
			</div>
        )
    }
}

const mapStateToProps = state => ({
	...state
});

export default connect(mapStateToProps)(View)