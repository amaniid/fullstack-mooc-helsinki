// import React from 'react'
// import ReactDOM from 'react-dom'

// const Hello = (props) => {
//   console.log("we in Hello function")
//   return (
//     <div>
//       <p>MOI, {props.name}, olet {props.age} vuotta vanha</p>
//     </div>
//   )
// }

// const App = () => {
//   console.log('yhteenlaskua!')
//   const now = new Date()
//   const a = 10
//   const b = 20 

//   return (
//     <div>
//       <p>Hello world, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//       <Hello name = "iids" age = "27"></Hello>
//       <Hello name = "em" age = {28}/>
//       <Hello name = "&#128514;" age = {a*b}></Hello>
//       <Hello name = "EEEERO" age = {5}></Hello>

//     </div>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('root'))

import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  console.log("Header, props: ")
  console.log(props)

  return (
    <h1>{props.courseName}</h1>
  )
}

const Content = (props) => {
  console.log("Content, props: ")
  console.log(props)

  return (
    <div>
        <Part coursePart = {props.parts[0].name} exerciseCnt = {props.parts[0].exercises}/>
        <Part coursePart = {props.parts[1].name} exerciseCnt = {props.parts[1].exercises}/>
        <Part coursePart = {props.parts[2].name} exerciseCnt = {props.parts[2].exercises}/>
    </div>
  )
}

const Part = (props) => {
  console.log("Part, props: ")
  console.log(props)
  return (
    <p>
      {props.coursePart} {props.exerciseCnt}
    </p>
  )
}

const Total = (props) => {
  console.log("Total, props: ")
  console.log(props)
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      }, 
    
      {
        name: 'Using props to pass data',
        exercises: 7
      },
    
      {
        name: 'State of a component',
        exercises: 14
      }
    ] 
  }


  return (
    <div>
      <Header courseName = {course.name} />
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
