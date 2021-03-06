import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { baseApiUrl } from '../../global'
import '../../css/Form.css'
import Alert from 'react-bootstrap/Alert'

class MyForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showAlert: false
        }

        this.data = { userId: this.props.user.id }
        this.alert = {
            msg: undefined,
            variant: undefined
        }
    }

    save = async () => {
        await axios.post(`${baseApiUrl}/transactions`, this.data)
            .then(res => {
                this.alert = { msg: res.data, variant: 'success' }
                this.setState({ showAlert: true })
                this.hideAlert()
            })
            .catch(err => {
                this.alert = { msg: err.response.data, variant: 'warning' }
                this.setState({ showAlert: true })
                this.hideAlert()
            })

        this.props.reloadData()
    }

    hideAlert = () => {
        setTimeout(() => {
            this.setState({ showAlert: false })
        }, 2000)
    }

    handleSubmit = event => {
        event.preventDefault()
        this.save()
		event.target.reset()
    }

    handleChange = event => {
        this.data[event.target.name] = event.target.value
    }

    render(){
        return (
            <div id="form">
                { this.state.showAlert ? <Alert variant={this.alert.variant} > { this.alert.msg } </Alert> : null }
                <h5 id="form-header">Inserir transação</h5>
                <Form id="insert-form" onSubmit={this.handleSubmit}>
                    <Form.Row className="form-row">
                        <Form.Group>
                            <Form.Label>Natureza</Form.Label>
                            <Form.Control as="select" name="type" onChange={this.handleChange}>
                                <option>Selecione...</option>
                                <option>Receita</option>
                                <option>Despesa</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control as="select" name="transaction" onChange={this.handleChange}>
                                <option>Selecione...</option>
                                <option>Compra</option>
                                <option>Venda</option>
                                <option>Salário</option>
                                <option>Outro</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control type="text" placeholder="Ex: compra produto xpto..." name="description" maxLength={20} onChange={this.handleChange} />
                        </Form.Group>
						<Form.Group>
                            <Form.Label>Valor</Form.Label>
                            <Form.Control type="number" placeholder="R$..." name="amount" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Data</Form.Label>
                            <Form.Control type="date" name="transactionDate" onChange={this.handleChange} />
                        </Form.Group>
                    </Form.Row>
                    <div id="form-btn-container">
                        <Button className="form-btn" variant="primary" type="submit">
                            Salvar
                        </Button>
                        <Button className="form-btn" variant="primary" type="reset">
                            Limpar
                        </Button>
                    </div>
                </Form>
            </div>
        )
    }

}

export default MyForm