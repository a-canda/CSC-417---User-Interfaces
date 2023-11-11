import './App.css';
import FilterTable from './FilterTable';
import { COURSES } from './FilterTable';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';

export class App extends Component {
  
  render() {
    return (
      <div>
        <Container>
          <FilterTable courses={COURSES}/>
        </Container>
      </div>
    
    );
  }
}

export default App;
