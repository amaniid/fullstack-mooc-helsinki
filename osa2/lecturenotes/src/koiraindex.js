import React from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {

  function triple(x) {
    return (
      console.log(x * 3)
    )
  }

  //var tropl = triple

  const isDog = (animal) => (
    animal.species === 'dog'
  )

  const notDog = (animal) => (
    animal.species !== 'dog'
  )



  console.log(props.hello)

  // const dogs = []
  // for (var i = 0; i < props.animals.length; i++) {
  //   if (props.animals[i].species === 'dog') {
  //     dogs.push(props.animals[i])
  //   }
  // }

  // const doget = props.animals.filter(function (animal) {
  //   return animal.species === 'dog'
  // })

  //const dogetFromFunction = props.animals.filter(animal => animal.species === 'dog')

  const dogetFromFunction = props.animals.filter(isDog)

  const otherAnimals = props.animals.filter(notDog)

  //console.log(dogs[0])
  //console.log(dogs[1])

  return (
    <div>
      pusuja eerolle <br />
      {triple(2)}
      <button onClick={() => triple(2)}>
        hi
      </button>
      <br />
      {/* a {dogs[0].species} names {dogs[0].name}
      <br />
      a {doget[0].species} names {doget[0].name}
      <br /> */}
      a {dogetFromFunction[0].species} named {dogetFromFunction[0].name}
      <br/>
      a {otherAnimals[3].species} named {otherAnimals[3].name}
    </div>
  )
}

const animals = [
  { name: 'Fluffykin', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' }
]


ReactDOM.render(
  <App hello="moi" animals={animals} />,
  document.getElementById('root')
)