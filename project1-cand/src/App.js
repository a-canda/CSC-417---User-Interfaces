import React from 'react';
import TableComponent from './TableComponent';
import "./App.css";
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function App() {
  return (
    <div>
      <Container>
            <Table responsive="sm" size="sm text-center">
              <thead>
                <th>NAME</th><th><u>Aaron Canda</u></th><th>WCU ID</th><th><u>0783598</u></th><th>Date Enrolled in Major</th><th><u>09/2021</u></th>
              </thead>
            </Table>

            <h1 className="bg-danger text-white text-center">Academic Foundations</h1>
            <TableComponent />
      </Container>    
    
    </div>
    
  );
}

export default App;
