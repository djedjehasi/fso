import Header from './Header.jsx'
import Content from './Content.jsx'
import Total from './Total'


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
    name:'Fundamentals of React',
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

  return (
    <div>
      <Header course={course}/>
      <Content data={[part1, exercises1, part2, exercises2, part3, exercises3]} />
      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App