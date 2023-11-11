import React, { Component } from "react";
import CourseRow from "./CourseRow";

export  class CourseTable extends Component {
  
  render() {
    const credit = this.props.credit;
    const courses = this.props.courses;
    const title = this.props.title;
    
    const rows = [];
    courses.forEach((c) => {
      console.log("Received a course: " + c.id + " "+ c.prefix + " "+ c.number);

      if (c.id === 1) {
        console.log("--course 1 " + c.course);
        rows.push(
          <CourseRow
            course={c}
            key={c.id} 
            editCallback= { this.props.editCallback }
          />
        );
      }
      if (c.id === 2 && credit < 71) {
        console.log("--course 2 " + c.course);
        rows.push(
          <CourseRow
            course={c}
            key={c.id}
            editCallback= { this.props.editCallback }
          />
        );
      }
      if (c.id === 3 && credit < 40) {
        console.log("--course 3 " + c.course);
        rows.push(
          <CourseRow
            course={c}
            key={c.id}
            editCallback= { this.props.editCallback }
          />
        );
      }
        
    });
   
    return (
        <div>
      <table className="table table-sm table-striped table-bordered">
        <thead>
          <tr>
            <th colSpan="7" className="bg-primary text-white text-center h4 p-2">
              {title}
            </th>
          </tr> 
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Semester</th>
            <th>Prefix</th>
            <th>Number</th>
            <th>Grade</th>
            <th>Editing</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>

      </div>


      
    );
  }
}