import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')



  const addContact = (event) => {
    event.preventDefault()
      const contactObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      persons.find(contact => contact.name === newName)
      ? window.alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(contactObject))
      setNewName('')
      setNewNumber('')
    }


    const handleNameChange = (event) => {
      setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
      setFilter(event.target.value)
    }


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        fliter shown by<input value={filter} onChange={handleFilterChange} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
      {
        filter === ''
      ? persons.map(contact => 
        <p key={contact.id}>{contact.name} {contact.number}</p>
      )
      : persons.filter(contact => contact.name.toLowerCase().includes(filter))
      .map(contact => 
        <p key={contact.id}>{contact.name} {contact.number}</p>
      )
    }
    </div>
    
  )
}



export default App