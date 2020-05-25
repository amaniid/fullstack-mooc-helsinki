import React from 'react'
//import Courses from './components/Courses'
import Courses from './modules/Courses/Courses'


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },

        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },

        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },

        {
          name: 'For the lulz',
          exercises: 666,
          id: 5
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  console.log('In App')



  return (
    <div>
      <h1>Web development curriculum hei</h1>
      <Courses courses={courses} />
    </div>
  )
}

export default App