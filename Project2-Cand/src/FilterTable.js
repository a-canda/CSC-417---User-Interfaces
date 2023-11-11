import React, {Component} from 'react';
import Search from './Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseTable from './CourseTable';
import './App.css';


export default class FilterTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            name: "",
            credits: 0,
        };

        this.enterName = this.enterName.bind(this);
        this.enterCredits = this.enterCredits.bind(this);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    enterName(n) {
        console.log("name: " + n.target.value);
        this.setState(
            {
                name: n.target.value
            }
        )
    }
    enterCredits(c) {
        console.log("credits" + c.target.value)
        this.setState (
            {
                credits: c.target.value
            }
        )
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }
    
    render () {
        const { filterText } = this.state;
        
        return (
            <div> 
                <Search className="bg-primary text-white text-center p-4 m-4"
                    onSearchChange={this.handleFilterTextChange}
                    hasAllOption={true}
                />
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h5 style={{ marginRight: 'auto' }}>Please enter your name and your credits below:</h5>
                        <div style={{ display: 'flex' }}>
                            <h5 style={{ marginRight: '1rem' }}>Total Transfer Credits:</h5>
                            <h5>{this.state.credits}</h5>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex' }}>
                        <label>Name: </label>
                        <input 
                            className="form-control"
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.enterName}
                            style={{ width: '20%', height: '75%' }} />
                        <label style={{ marginLeft: '1rem' }}>Credits: </label>
                        <input 
                            className="form-control"
                            name="credits"
                            type="number"
                            value={this.state.credits}
                            onChange={this.enterCredits}
                            style={{ width: '20%', height: '75%', marginLeft: '0.5rem' }} />
                        </div>
                        <div className="text-right">
                            <h6>You need an additional {120-this.state.credits} credit(s) to graduate.</h6>
                        </div>
                    </div>
                </div>
                <h3 className="bg-primary text-white text-center">{this.state.name}'s Advising Sheet</h3>
                {filterText && (
                 <CourseTable courses={this.props.courses} filterText={filterText} />
                )}
            </div>  
        );
    }
}

export const COURSES = [
    {id: 1, title: 'CSC141', grade: 'A', took: true},
    {id: 2, title: 'CSC240', grade: 'A', took: true},
    {id: 3, title: 'CSC142', grade: 'B', took: true},
    {id: 4, title: 'CSC241', grade: 'A', took: false},
    {id: 5, title: 'ESS101', grade: '', took: false},
    {id: 6, title: 'ENG368', grade: 'C', took: true},
    {id: 7, title: 'BIO110', grade: '', took: true}
];