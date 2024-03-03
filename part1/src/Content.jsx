import Part from './Part.jsx'

const Content = (props) => {
    return (
        <div>
            <Part name={props.data[0]} num={props.data[1]} />
            <Part name={props.data[2]} num={props.data[3]}/>
            <Part name={props.data[4]} num={props.data[5]}/>
        </div>       
    )
}

export default Content 