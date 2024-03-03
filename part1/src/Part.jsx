const Part = (props) => {
    console.log('Parts props: ' + props)
    return (
        <p>{props.name} {props.exercises}</p>
    )
}

export default Part