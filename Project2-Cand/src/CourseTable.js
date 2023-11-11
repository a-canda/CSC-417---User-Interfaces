import React, { Component } from "react";
import CourseRow from "./CourseRow";

export default class CourseTable extends Component {
  render() {
    const { filterText } = this.props;

    const rows = this.props.courses
      .filter(
        (course) =>
          course.grade.toLowerCase().includes(filterText.toLowerCase()) ||
          filterText.toLowerCase() === "all"
      )
      .map((course) => (
        <CourseRow course={course} key={course.id} />
      ));

    return (
      <div>
        <table className="table table-striped table-bordered table-sm p-2 m-2">
          
          <thead className="bg-info text-white text-center">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Grade</th>
              <th>Took</th>
            </tr>
          </thead>
          
          
          <tbody>{rows}</tbody>
          
        </table>
      </div>
    );
  }
}
