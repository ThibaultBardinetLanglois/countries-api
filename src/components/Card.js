import { Link } from "react-router-dom";


const Card = (props) => {
const { country } = props;
    
    return (
        <div>
            {country &&
            <Link to={`/country/${country.name.common}`}>
            <li className="card">
                <div className="card-img">
                    <img src={country.flags["svg"]} alt="flag"/>
                </div>
                <div className="card-content">
                    <ul>
                        <li>{country.name.common}</li>
                        <li>Région: {country.region}</li>
                        <li>Capital: {country.capital}</li>
                        <li>population: {country.population}</li>
                    </ul>
                </div>
            </li>
            </Link>
            }
        </div>
        
    )
}

export default Card;