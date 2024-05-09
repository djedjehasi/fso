import Person from "./Person"


const Persons = (props) => {

    return (   
        <div>
        {
        props.filter === ''
      ? props.persons.map(contact => 
        <Person key={contact.id} name={contact.name} number={contact.number} />
      )
      : props.persons.filter(contact => contact.name.toLowerCase().includes(props.filter.toLowerCase()))
      .map(contact => 
        <Person key={contact.id} name={contact.name} number={contact.number} />
      )
    }
        </div>
    )
} 

export default Persons