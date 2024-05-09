

const Person = (props) => {
    
    return(
        <div>
            <p>{props.name} {props.number} <button onClick={() => props.removePerson(props.id)}>delete</button></p>
        </div>
    )
}

export default Person 