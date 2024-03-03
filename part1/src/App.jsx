import Header from './Header.jsx'
import Content from './Content.jsx'
import Total from './Total'


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content content={part1} amount={exercises1} />
      <Content content={part2} amount={exercises2} />
      <Content content={part3} amount={exercises3} />
      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App