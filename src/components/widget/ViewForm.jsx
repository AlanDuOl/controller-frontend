import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { baseApiUrl } from '../../global'
import '../../css/Form.css'

class ViewForm extends Component {

    constructor(props) {
        super(props)

        this.data = { userId: this.props.user.id }
    }

    save = async () => {
        const inputs = document.querySelectorAll('#insert-form .form-control')
        let editValues = {}
        for(let i = 0; i < inputs.length; i++){
            if(i === inputs.length-1) editValues[this.props.fields[i]] = inputs[i].valueAsDate
            else editValues[this.props.fields[i]] = inputs[i].value
        }
        await axios.post(`${baseApiUrl}/transactions`, editValues)
            .catch(err => console.log(err))

        this.props.disableEdit()
    }

    handleSubmit = event => {
        event.preventDefault()
        this.save()
        event.target.reset()
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
                        <Form.Group>
                            <Form.Label>Id</Form.Label>
                            <Form.Control type="number" placeholder="Id.." name="id" onChange={this.handleChange} />
                        </Form.Group>
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
                            <Form.Control type="text" placeholder="Ex: compra produto xpto..." name="description" onChange={this.handleChange} />
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

export default ViewForm