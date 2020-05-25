import React from 'react'


const Header = (props) => {
    console.log("In Header !")
    // console.log(props)
  
    return (
      <h2>{props.courseName}</h2>
    )
  }

export default Header
  