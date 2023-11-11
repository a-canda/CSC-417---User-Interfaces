import React, { Component } from 'react';

export default class TableRow extends Component {
    render(){
        const tableData = this.props.tableData;
    
        return (
            <tr>
                <td className="text-center">{tableData.description}</td>
                <td className="text-center">{tableData.semester}</td>
                <td className="text-center">{tableData.prefix}</td>
                <td className="text-center">{tableData.number}</td>
                <td className="text-center">{tableData.grade}</td>
            </tr> 
        );
    }
}

