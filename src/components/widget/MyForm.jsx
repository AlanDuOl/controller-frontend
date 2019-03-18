import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class MyForm extends Component {

    render(){
        return (
            <div id="form">
                <h4 className="header">Inserir transação</h4>
                <Form className="insert-form">
                    <Form.Row className="form-row">
                        <Form.Group className="col-width">
                            <Form.Label>Natureza</Form.Label>
                            <Form.Control as="select">
                                <option>Receita</option>
                                <option>Despesa</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="col-width">
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control as="select">
                                <option>Compra</option>
                                <option>Venda</option>
                                <option>Salário</option>
                                <option>Outro</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="col-width">
                            <Form.Label>Descrição da transação</Form.Label>
                            <Form.Control type="text" placeholder="Ex: compra produto xpto..." />
                        </Form.Group>
                        <Form.Group className="col-width">
                            <Form.Label>Data</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                        <Form.Group className="col-width">
                            <Form.Label>Valor</Form.Label>
                            <Form.Control type="number" placeholder="R$..." />
                        </Form.Group>
                    </Form.Row>
                    <div id="form-btn-container">
                        <Button onSubmit={this.props.save} className="col-width" variant="primary" type="submit" id="form-btn">
                            Salvar
                        </Button>
                    </div>
                </Form>
            </div>
        )
    }

}

export default MyForm