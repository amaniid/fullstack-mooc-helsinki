import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array.from(Array(props.anecdotes.length), () => 0))
  const [canVote, setVoteState] = useState(true)

  //const arrayLength = props.anecdotes.length

  const voteStateChange = () => {
    const listCopy = [...votes]
    if (canVote) {
      listCopy[selected] += 1
      setVoteState(false)
    }
    setVote(listCopy)
  }

  const newAnecdote = () => {
    setVoteState(true)
    setSelected(chooseRandomIndex(votes.length))
  }

  const ButtonAnecdote = ({ text }) => {

    return (
      // <button onClick={() => setSelected(chooseRandomIndex(arrayLength))}>
      //   {text}
      // </button>
      <button onClick={newAnecdote}>
        {text}
      </button>
    )
  }


  const ButtonVote = ({ text }) => {
    // const listCopy = [...votes]
    //listCopy[selected] += 1

    // return (
    //   <button onClick={() => setVote(listCopy)}>
    //     {text}
    //   </button>
    // )
    return (
      <button onClick={voteStateChange}>
        {text}
      </button>
    )

  }

  function chooseRandomIndex(maxValue) {
    let rndNumber = Math.floor(Math.random() * maxValue)

    while (true) {
      if (rndNumber !== selected) {
        break
      }
      rndNumber = Math.floor(Math.random() * maxValue)
    }

    return (
      rndNumber
    )
  }

  const chooseLargestNumberIndex = () => (
    votes.indexOf(Math.max(...votes))
  )


  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <h3>{props.anecdotes[selected]}</h3>
        <p>has {votes[selected]} votes</p>

        <ButtonVote
          text='vote'
        />

        <ButtonAnecdote
          text='next anecdote'
          />
        {console.log(selected)}
      </div>

      <div>
        <h1>Anecdote of the day</h1>
        <h3>{props.anecdotes[chooseLargestNumberIndex()]}</h3>
        <p>has {votes[chooseLargestNumberIndex()]} votes</p>
      </div>

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)


