import React from 'react'

const Part = (props) => {
    console.log("Part component!")
    return (
      <p>
        {props.coursePart} {props.exerciseCnt}
      </p>
    )
  }

export default Part