
const CountryCard = ({country})=> {
    const languages = Object.values(country.languages)
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h3>languages:</h3>
            <ul>
                {languages.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} />
        </div>
    )
}

export default CountryCard 