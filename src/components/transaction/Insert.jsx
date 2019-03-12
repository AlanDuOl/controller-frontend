import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import '../../css/Insert.css'

class Insert extends Component {
    render() {
        return (
            <Form className="insert-form">
                <Form.Row className="form-row">
                    <Form.Group>
                        <Form.Label>Natureza</Form.Label>
                        <Form.Control as="select">
                            <option>Receita</option>
                            <option>Despesa</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Tipo</Form.Label>
                        <Form.Control as="select">
                            <option>Compra</option>
                            <option>Venda</option>
                            <option>Salário</option>
                            <option>Outro</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Valor</Form.Label>
                        <Form.Control type="number" placeholder="R$..." />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Detalhes da transação</Form.Label>
                        <Form.Control type="text" placeholder="Ex: compra produto xpto..." />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Data</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                    <Button variant="primary" type="submit" id="form-btn">
                        Salvar
                    </Button>
                </Form.Row>
            </Form>
        )
    }
}

export default Insert