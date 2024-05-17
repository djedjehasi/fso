
const Notification = ({message, status}) => {

    const successStyle = {
        color: 'green',
        background: 'lightgray',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    } 

    const failStyle = {
        color: 'red',
        background: 'lightgray',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    const toggleStatus = () => {
        return status ? successStyle : failStyle
    }

    return (
        <div>
            <div style ={toggleStatus ()}>{message}</div>
        </div>
    )
}

export default Notification