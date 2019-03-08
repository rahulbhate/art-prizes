import React, { Component } from "react";
import propsTypes from 'prop-types'; 
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux'
import * as courseActions from '../actions/courseActions';
import CourseList from '../components/Presentational/CourseList'

class Courses extends Component {
    courseRow(course, index) {
        return <div key={index}>{course.title}</div>
    }
  render() {
    const { courses } = this.props;
    return (
      <div className="container">
        <h1>Courses Page...</h1>
        <CourseList courses={courses}/>
      </div>
    );
  }
}
Courses.propsTypes = {
      courses: propsTypes.array.isRequired,
     actions: propsTypes.object.isRequired
 }
function mapStateToProps (state, ownProps){
    return{
        courses: state.courses
    }
}
function mapDispatchToProps (dispatch){
   return { 
    actions: bindActionCreators (courseActions,dispatch)
   } 
}
export default connect (mapStateToProps, mapDispatchToProps)(Courses);
