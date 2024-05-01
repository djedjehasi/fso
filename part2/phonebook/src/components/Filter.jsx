
const Filter = (props) => {
    return(
        <div>
            filter shown by <input value={props.filter} onChange={props.handleChange} />
        </div>
    )
}

export default Filter