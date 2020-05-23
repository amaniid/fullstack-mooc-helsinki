// import React from 'react'
// import ReactDOM from 'react-dom'

// const Hello = (props) => {
//   const { name, age } = props
//   // const name = props.name
//   // const age = props.age

//   const bornYear = () => new Date().getFullYear() - age

//   // const bornYear = () => {
//   //   const yearNow = new Date().getFullYear()
//   //   return yearNow - props.age
//   // }

//   console.log("we in Hello function")
//   return (
//     <div>
//       <p>
//         MOI, {name}, olet {age} vuotta vanha
//       </p>
//       <p>
//         So you were probably born {bornYear()}
//       </p>
//     </div>
//   )
// }

// const App = () => {
//   console.log("we in App function")
//   const nimi = 'iida'
//   const ika = 10
//   return (
//     <div>
//       <h1>HELLooooo</h1>
//       <Hello name={nimi} age={ika}></Hello>
//       <Hello name="em" age={28} />
//       <Hello name="EEEERO" age={5 + 30}></Hello>
//     </div>
//   )
// }

// Sivun uudelleenrenderöinti

// const App = (props) => {
//   const { counter } = props
//   return (
//     <div>{counter}</div>
//   )
// }

// let counter = 1

// const refresh = () => {
//   ReactDOM.render(<App counter={counter} />,
//     document.getElementById('root'))
// }

// setInterval(() => {
//   refresh()
//   counter += 1
// }, 1000
// )

// Tilallinen komponentti

// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// const App = (props) => {
//   const [ counter, setCounter ] = useState(2*333)

//   setTimeout(
//     () => setCounter(counter + 1),
//     1000

//   )

//   console.log('rendering...', counter)


//   return (
//     <div>
//       {counter} 
//     </div>
//   )

// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

// const [ counter, setCounter ] = useState(0)
// counteriin laitetaan tilan arvo
// setCounteriin viite funktioon, jonka avulla tilaa voidaan muuttaa

// Tapahtumankäsittely
// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// const App = (props) => {
//   const [ counter, setCounter ] = useState(666)

//   const handleClick = () => {
//     console.log('clicked')
//     setCounter(counter + 1)
//   }


//   return (
//     <div>
//       <div>
//         {counter}
//         <button onClick={handleClick}>
//           plus
//         </button>
//         {/* OR */}
//         {/* <button onClick={() => console.log('clicked')}>
//           plussaa
//         </button> */}
//         {/* <button onClick={() => setCounter(counter + 1)}>
//           plussaa
//         </button> */}

//         <button onClick={() => setCounter(0)}>
//           nollaus
//         </button>
//       </div>
//     </div>
//   )
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

// Tapahtumankäsittelijä on funktio
// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// const App = (props) => {
//   const [ counter, setCounter ] = useState(666)

//   const increaseByOne = () => {
//     console.log('counter increased from: ', counter, ' to ', counter + 1)
//     setCounter(counter + 1)
//   }

//   const setToZero = () => {
//     console.log('setToZero func/const')
//     setCounter(0)
//   }


//   return (
//     <div>
//       <div>
//         {counter}
//         <button onClick={increaseByOne}>
//           plus
//         </button>
//         <button onClick={setToZero}>
//           nollaus
//         </button>
//       </div>
//     </div>
//   )
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

// Tilan vieminen alikomponenttiin
// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// const Display = ({ counter }) => <div>{counter}</div>


// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// )


// const App = (props) => {
//   const [counter, setCounter] = useState(660)

//   const increaseByOne = () => {
//     console.log('counter value: ', counter + 1)
//     setCounter(counter + 1)
//   }

//   const setToZero = () => {
//     console.log('COUNTER SET TO ZZEERROO!')
//     setCounter(0)
//   }

//   const decreaseByOne = () => {
//     console.log('counter value: ', counter - 1)
//     setCounter(counter - 1)
//   }

//   return (
//     <div>
//       <Display counter={counter} />
//       {/* <button onClick={increaseByOne}>
//         P L U S
//       </button>
//       <button onClick={setToZero}>
//         Z E R O
//       </button> */}
//       <Button
//         handleClick={increaseByOne}
//         text='P L U S'
//       />
//       <Button
//         handleClick={setToZero}
//         text='Z E R O'
//       />
//       <Button
//         handleClick={decreaseByOne}
//         text='M I N U S'
//       />

//     </div>
//   )

// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

// D: Monimutkaisempi tila, Reactin debuggaus

// Monimutkaisempi tila

// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// const App = (props) => {
//   const [ left, setLeft ] = useState(0)
//   const [ right, setRight ] = useState(0)

//   return (
//     <div>
//       <div>
//         {left}
//         <button onClick={() => setLeft(left + 1)}>
//           left
//         </button>
//         <button onClick={() => setRight(right + 1)}>
//           right
//         </button>
//         {right}
//       </div>
//     </div>
//   )
// }

// MUUUUTOS

// const App = (props) => {
//   const [clicks, setClicks] = useState({
//     left: 666,
//     right: 69
//   })

//   const handleLeftClick = () => {
//     console.log('LEFT CLICK')
//     setClicks({ ...clicks, left: clicks.left + 1, })
//   }

//   const handleRightClick = () => {
//     console.log('RIGHT CLICK')
//     setClicks({ ...clicks, right: clicks.right + 1, })
//   }

//   return (
//     <div>
//       <div>
//         {clicks.left}
//         <button onClick={handleLeftClick}>
//           left
//         </button>
//         <button onClick={handleRightClick}>
//           right
//         </button>
//         {clicks.right}
//         {console.log('hi from App: return')}
//         {console.log('clicks right: ',
//           clicks.right)}
//         {console.log('clicks left: ',
//           clicks.left)}
//       </div>
//     </div>
//   )
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

// Taulukon käsittelyä

// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// // Ehdollinen renderöinti
// const History = (props) => { 
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }

//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// )

// const App = (props) => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     console.log('LEFT CLICK')
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     console.log('RIGHT CLICK')
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       <div>
//         {left}
//         {/* <button onClick={handleLeftClick}>
//           left
//         </button>
//         <button onClick={handleRightClick}>
//           right
//         </button> */}
//         <Button handleClick={handleLeftClick} text='left' />
//         <Button handleClick={handleRightClick} text='right' />
//         {right}

//         <History allClicks={allClicks} />
//         {/* <p>{allClicks}</p>
//         <p>{allClicks.join(' ')}</p> */}
//         {/* {console.log('hi from App: return')} */}
//         {console.log('clicks right: ',
//           right)}
//         {console.log('clicks left: ',
//           left)}
//       </div>
//     </div>
//   )
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

// React-sovellusten debuggaus

// juuuh !


// Tapahtumankäsittely revisited

// import React, {useState} from 'react'
// import ReactDOM from 'react-dom'

// const App = (props) => { 
//   const [value, setValue] = useState(0)

//   const handleClick = () => { 
//     console.log('clicked the button')
//     setValue(666)
//   }

//   return (
//     <div>
//       {value}
//       <button onClick={handleClick}>
//         B U T T O N
//       </button>
//     </div>
//   )
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

// Funktio joka palauttaa funktion

// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// const App = (props) => {
//   const [value, setValue] = useState(10)

//   const hello = (who) => () => {
//     console.log('hello', who)
//   }

//   const setToValue = (newValue) => () => {
//     setValue(newValue)
//   }

//   return (
//     <div>
//       <button onClick={hello('world')}>
//         mualima
//       </button>
//       <button onClick={hello('react')}>
//         rrreact'k
//       </button>
//       <button onClick={hello('function')}>
//         funkshöööön
//       </button>
//       <br />
//       {value}
//       <br />
//       <button onClick={setToValue(1000)}>
//         thöösand
//       </button>
//       <button onClick={setToValue(666)}>
//         best luku
//       </button>
//       <button onClick={setToValue(value + 1)}>
//         incröment
//       </button>
//     </div>
//   )
// }


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

// Tapahtumankäsittelijän vieminen alikomponenttiin

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = (props) => {
  return(
    <div>
      {props.value}
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => () => {
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <br />
      <Button handleClick={setToValue(1000)} text='thöösand' />
      <Button handleClick={setToValue(666)} text='best luku' />
      <Button handleClick={setToValue(value + 1)} text='incröment' />
    </div>
  )

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
