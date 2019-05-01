import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { baseApiUrl } from '../../global'
import '../../css/MyForm.css'

class ViewForm extends Component {

    constructor(props) {
        super(props)

        this.data = { userId: this.props.user.id }
    }

    save = () => {
        const inputs = document.querySelectorAll('#insert-form .form-control')
        let editValues = {}
        for(let i = 0; i < inputs.length; i++){
            if(i === inputs.length-1) editValues[this.props.fields[i]] = inputs[i].valueAsDate
            else editValues[this.props.fields[i]] = inputs[i].value
        }
        axios.post(`${baseApiUrl}/transactions/insert`, editValues)
            .catch(err => console.log(err))
    }

    handleSubmit = event => {
        event.preventDefault()
        this.save()
        event.target.reset()
        this.props.disableEdit()
    }

    handleNullSubmit = event => {
        event.preventDefault()
        event.target.reset()
    }

    handleChange = event => {
        this.data[event.target.name] = event.target.value
    }

    render(){
        return (
            <div id="form">
                <Form id="insert-form" onSubmit={this.props.edit ? this.handleSubmit : this.handleNullSubmit }>
                    <Form.Row className="form-row">
                        <Form.Group className="col-width">
                            <Form.Label>Id</Form.Label>
                            <Form.Control type="number" placeholder="Id.." name="id" onChange={this.handleChange} />
                        </Form.Group>
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
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control type="text" placeholder="Ex: compra produto xpto..." name="description" onChange={this.handleChange} />
                        </Form.Group>
						<Form.Group className="col-width">
                            <Form.Label>Valor</Form.Label>
                            <Form.Control type="number" placeholder="R$..." name="amount" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group className="col-width">
                            <Form.Label>Data</Form.Label>
                            <Form.Control type="date" name="transactionDate" onChange={this.handleChange} />
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

export default ViewForm