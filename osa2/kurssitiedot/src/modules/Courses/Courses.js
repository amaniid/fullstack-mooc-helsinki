import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const CourseLoop = ({ courses }) => {
    return (
        <div>
            {courses.map(course =>
                <Course key={course.id} course={course} />
            )}
        </div>
    )
}


const Course = ({ course }) => {
    console.log('in COUrse')

    return (

        <div>
            <Header courseName={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const Courses = ({ courses }) => {
    return (
        <CourseLoop courses={courses} />
    )
}

export default Courses