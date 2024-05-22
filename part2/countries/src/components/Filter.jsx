
const Filter = (props) => {
    return (
        <div>
            serach countires: <input value={props.value} onChange={props.handleChange}></input>
        </div>
            
    )
}

export default Filter