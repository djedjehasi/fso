import CountryCard from "./countryCard"

const Display = (props) => {
    return (
        <div>
            {props.content}
            {props.countryCard !== null && props.searchValue === props.countryCard.name.common && <CountryCard country={props.countryCard} />}
        </div>
    )
}

export default Display