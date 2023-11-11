import React, {Component} from 'react';

export default class CourseRow extends Component {
    render() {
        const course = this.props.course;
        const titleStyle = {
            color: (course.grade !== "" && !course.took) || (course.grade === "" && course.took) ? "red" : "black",
          };
            const flag = course.took ? "Yes" : "No"
            

        return (
            <tr>
                <td className="text-center">{course.id}</td>
                <td className="text-center" style={titleStyle}>{course.title}</td>
                <td className="text-center">{course.grade}</td>
                <td className="text-center" style={titleStyle}>{flag}</td>
            </tr>
        )
    }
}