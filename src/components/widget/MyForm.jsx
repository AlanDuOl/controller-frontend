import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { baseApiUrl } from '../../global'

class MyForm extends Component {

    constructor(props) {
        super(props)

        this.data = { userId: this.props.user.id }
    }

    save = () => {
        console.log(this.data)
        axios.post(`${baseApiUrl}/transactions/insert`, this.data)
            .then(res => console.log('user saved: ', res.data))
            .catch(err => console.log(err))
    }

    handleSubmit = event => {
        event.preventDefault()
        this.save()
    }

    handleChange = event => {
        this.data[event.target.name] = event.target.value
    }

    render(){
        return (
            <div id="form">
                <label id="form-header">Inserir transação</label>
                <Form id="insert-form" onSubmit={this.handleSubmit}>
                    <Form.Row className="form-row">
                        <Form.Group className="col-width">
                            <Form.Label>Natureza</Form.Label>
                            <Form.Control as="select" name="type" onChange={this.handleChange}>
                                <option>Selecione...</option>
                                <option>Receita</option>
                                <option>Despesa</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="col-width">
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control as="select" name="transaction" onChange={this.handleChange}>
                                <option>Selecione...</option>
                                <option>Compra</option>
                                <option>Venda</option>
                                <option>Salário</option>
                                <option>Outro</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="col-width">
                            <Form.Label>Descrição da transação</Form.Label>
                            <Form.Control type="text" placeholder="Ex: compra produto xpto..." name="description" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group className="col-width">
                            <Form.Label>Data</Form.Label>
                            <Form.Control type="date" name="transactionDate" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group className="col-width">
                            <Form.Label>Valor</Form.Label>
                            <Form.Control type="number" placeholder="R$..." name="amount" onChange={this.handleChange} />
                        </Form.Group>
                    </Form.Row>
                    <div id="form-btn-container">
                        <Button className="col-width" variant="primary" type="submit" id="form-btn">
                            Salvar
                        </Button>
                    </div>
                </Form>
            </div>
        )
    }

}

export default MyForm