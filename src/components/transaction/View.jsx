import React, { Component } from 'react'
import axios from 'axios'
import { baseApiUrl } from '../../global'
import { connect } from 'react-redux'

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

	componentDidMount() {
		this.getData()
    }
    
    log = () => {
        console.log()
    }

    render(){
        return (
            <div id="view-container">{console.log(this.state.transactions)}</div>
        )
    }
}

const mapStateToProps = state => ({
	...state
});

export default connect(mapStateToProps)(View)