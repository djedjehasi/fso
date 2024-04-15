import { useState } from 'react'


const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = (props) => {
  return (
    <div>
      <h1>staristics</h1>
      <table>
      <tbody>
        <tr>
          <td>good</td>
          <td>{props.good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{props.neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{props.bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{props.all}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{props.average}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{props.positive} %</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral +bad
  const average = (good + (-bad))/(good + neutral + bad)
  const positive = good / (good + neutral + bad) * 100

  if(all === 0) {
    return (
      <div>
    <h1>give feedback</h1>
    <Button handleClick={() => setGood(good + 1)} text='good' />
    <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
    <Button handleClick={() => setBad(bad + 1)} text='bad' />
    <p>No feedback given</p>
  </div>
    )
    
  } else {
    return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text='good' />
        <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button handleClick={() => setBad(bad + 1)} text='bad' />
        <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
      </div>
    )
  }
  
}

export default App