import React, { Component } from 'react'

class Table extends Component {
    render(){
        return (
            <div>
                <h4 className="header">Transações recentes</h4>
                <Table id="table">
                    <thead id="table-head">
                        <th>Natureza</th>
                        <th>Tipo</th>
                        <th>Descrição</th>
                        <th>Data</th>
                        <th>Valor</th>
                    </thead>
                    <tbody id="table-body">
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Table