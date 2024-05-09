
const Persons = (props) => {

    return (   
        <div>
        {
        props.filter === ''
      ? props.persons.map(contact => 
        <p key={contact.id}>{contact.name} {contact.number}</p>
      )
      : props.persons.filter(contact => contact.name.toLowerCase().includes(props.filter.toLowerCase()))
      .map(contact => 
        <p key={contact.id}>{contact.name} {contact.number}</p>
      )
    }
        </div>
    )
} 

export default Persons