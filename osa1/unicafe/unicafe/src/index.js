import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ buttonHandler, text }) => {
  return (
    <button onClick={buttonHandler}>{text}</button>
  )
}

const Statistics = ({ goodReviews, neutralReviews, badReviews }) => {
  if (goodReviews + neutralReviews + badReviews === 0) {
    return (<div>No feedback given</div>)
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text='good' value={goodReviews} />
          <StatisticLine text='neutral' value={neutralReviews} />
          <StatisticLine text='bad' value={badReviews} />
          <StatisticLine text='all' value={goodReviews + neutralReviews + badReviews} />
          <StatisticLine text='average' value={(goodReviews - badReviews) /
            (goodReviews + neutralReviews + badReviews)} />
          <StatisticLine text='positive (%)' value={goodReviews /
            (goodReviews + neutralReviews + badReviews) * 100} />
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  // button states:
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <h2>give feedback</h2>
        <Button buttonHandler={() => setGood(good + 1)} text='good' />
        <Button buttonHandler={() => setNeutral(neutral + 1)} text='neutral' />
        <Button buttonHandler={() => setBad(bad + 1)} text='bad' />

        <h2>give feedback</h2>
        <Statistics goodReviews={good} neutralReviews={neutral} badReviews={bad} />
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
