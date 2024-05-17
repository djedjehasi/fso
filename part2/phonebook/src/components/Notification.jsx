
const Notification = ({message}) => {

    const successStyle = {
        color: 'green',
        background: 'lightgray',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    } 

    return (
        <div>
            <div style ={successStyle}>{message}</div>
        </div>
    )
}

export default Notification