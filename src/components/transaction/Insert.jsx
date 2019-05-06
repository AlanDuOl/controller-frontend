import React, { Component } from 'react'
import '../../css/Insert.css'
import MyForm from '../widget/MyForm'
import { connect } from 'react-redux'
import InsertTransactions from '../widget/InsertTransactions'
import axios from 'axios'
import { baseApiUrl } from '../../global'

class Insert extends Component {

    constructor(props){
        super(props)

        this.state = { transactions: [] }
        this.fields = ['type', 'transaction', 'description', 'amount', 'transactionDate']
        this.limit = 5
    }

    getData = () => {
        axios.get(`${baseApiUrl}/transactions/${this.props.user.id}/${this.limit}`)
            .then(res => {
				this.setState({ transactions: res.data })
			})
            .catch(err => console.log('didnt load data from server: ', err))
    }

    reloadData = () => {
        this.getData()
    }

    componentDidMount() {
		this.getData()
    }

    render() {
        return (
            <div id="insert-container">   
                <MyForm user={this.props.user} reloadData={this.reloadData} />
                <InsertTransactions transactions={this.state.transactions} fields={this.fields} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
	...state
});

export default connect(mapStateToProps)(Insert)