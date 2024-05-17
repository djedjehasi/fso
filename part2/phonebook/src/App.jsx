import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import axios from 'axios'
import personsService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [notificationStatus, setNotificationStatus] = useState(true)

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  },[])

  const addContact = (event) => {
    event.preventDefault()
      const contactObject = {
        name: newName, 
        number: newNumber,
        id: (persons.length + 1).toString()
      }

      const oldObject = persons.find(contact => contact.name === newName )

      oldObject
      ? confirm('update number?')
        ? personsService
          .update(oldObject.id, contactObject)
          .then(returnedPerson => {
            setPersons(prevPersons => prevPersons.map(person => person.id === oldObject.id ? contactObject : person))
            setNotificationStatus(true)
            setNotificationMessage(
              `${oldObject.name} number as been changed`
            )
            setTimeout(() => {
              setNotificationMessage(null)
            }, 5000)
          })
        : console.log('not updated')
      : personsService
          .create(contactObject)
          .then(newContact => {
            setPersons(persons.concat(newContact))
            setNotificationStatus(true)
            setNotificationMessage(
              `Added ${contactObject.name} `
            )
            setTimeout(() => {
              setNotificationMessage(null)
            },5000)
          })
      
      }

    const delelteHandler = id =>{
      const url = 'http://localhost:3001/persons'
      const person = persons.find(p => p.id === id)
      personsService
        .remove(id)
        .then(response => {
          setPersons(prevPersons => prevPersons.filter(person => person.id !== id))
          alert(`${person.name} has been deleted`)
        })
        .catch(error => {
          setNotificationStatus(false)
          setNotificationMessage(`Information of ${person.name} has already been removed from server`)
          setTimeout(() => {
            setNotificationMessage(null)
            setNotificationStatus(true)
          },5000)
          setPersons(prevPersons => prevPersons.filter(person => person.id !== id))
        })
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
      <Notification message={notificationMessage} status={notificationStatus} />
      <div>
      <Filter filter={filter} handleChange={handleFilterChange} />
      </div>
      <h2>add a new</h2>
      <PersonForm
        addContact={addContact}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons} removePerson={delelteHandler} />
    </div>
    
  )
}



export default App