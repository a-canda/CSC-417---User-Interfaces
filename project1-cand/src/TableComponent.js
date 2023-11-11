import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Container, Row, Col } from 'react-bootstrap';
import TableRow from "./TableRow";

export default class TableComponent extends Component {
    render() {    
        const data = [
            {description: "First-Year Experience", semester: <input></input>, prefix: "FYE", number: <input></input>, grade: <input></input>},
            {description: "English Composition", semester: <input></input>, prefix: "WRT", number: 120, grade: <input></input>},
            {description: "English Composition 200-level", semester: <input></input>, prefix: "WRT", number: <input></input>, grade: <input></input>},
            {description: "Mathematics (C- or better required) ***", semester: <input></input>, prefix: 'MAT', number: 151, grade: <input></input>},
            {description: "Interdisciplinary (I)", semester: <input></input>, prefix: <input></input>, number: <input></input>, grade: <input></input>},
            {description: "Diverse Communities(J) ***", semester: <input></input>, prefix: <input></input>, number: <input></input>, grade: <input></input>}
        ]
        const rows = [];
        data.forEach((tableData) => {
            rows.push(
                <TableRow 
                tableData = {tableData}
                key={TableRow.description}
                />
            );
        });
        return( 
            <Table striped bordered size="sm border-danger">
                <thead className="bg-danger text-white text-center m-2 p-2">
                    <tr colSpan="3">
                        <th>Description</th><th>Semester</th><th>Prefix</th><th>Number</th><th>Grade</th>
                    </tr>
                </thead>
                <tbody colSpan="3">
                    {rows}
                </tbody>
            </Table>                    
        )
    }
}