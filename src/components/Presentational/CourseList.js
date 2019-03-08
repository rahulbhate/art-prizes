import React from "react";
import { Table, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
const createRow = (course, index) => {
  return (
    <tr>
      <td><a href={course.watchHref} target="_blank">Watch</a></td>
      <td><Nav.Link><NavLink to={'/courses/'+ course.id}>{course.title}</NavLink></Nav.Link></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
    </tr>
  );
};
const CourseList = ({ courses }) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Length</th>
          </tr>
        </thead>
        <tbody>{courses.map(createRow)}</tbody>
      </Table>
    </div>
  );
};
export default CourseList;
