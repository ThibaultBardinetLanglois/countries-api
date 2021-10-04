import axios from "axios";
import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";


const CountryDetails = (props) => {
    let countryName = props.match.params.country;
    let countryCurrencies;
    const [wikipediaDescription, setWikipediaDescription] = useState();
    const [data, setData] = useState();

    useEffect(() => {
        axios.get(
            `https://fr.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro=&explaintext=&titles=${countryName}`
            )
            .then((res) => {
                setWikipediaDescription(res.data.query.pages[Object.keys(res.data.query.pages)]);
            });

    }, []);

    useEffect(() => {
        axios.get(
            `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
            ).then((res) => {
                setData(res.data);
            });

    }, []);
    
    return (
        <div className="country-details-page">
            <Navigation />
            {data && 
                <div className="country-details">
                    <div className="country-details-flag">
                        <img src={data[0].flags.svg} alt="country-flag"/>
                    </div>
                    <div class="county-characteristics">
                        {data[0].name.common? <h2>{data[0].name.common}</h2> : <h2>Nom : None</h2>}
                        {data[0].name.official? <h2>Nom officiel : {data[0].name.official}</h2> : <h2>Nom officiel : None</h2>}
                        {data[0].capital? <h3>Capitale : {data[0].capital}</h3> : <h3>Capitale : None</h3>}
                        {data[0].region? <h3>Continent : {data[0].region}</h3> : <h3>Region : None</h3>}
                        {data[0].subregion? <h3>Sous-Région : {data[0].subregion}</h3> : <h3>Sous-Région : None</h3>}
                        {data[0].languages? <h3>Langage : {data[0].languages[Object.keys(data[0].languages)[0]]}</h3> : <h3>Langage : None</h3>}
                        {data[0].currencies? <h3>Monnaie : {data[0].currencies[Object.keys(data[0].currencies)[0]].name} ({data[0].currencies[Object.keys(data[0].currencies)[0]].symbol })</h3> : <h3>Monnaie : None</h3>}
                        {data[0].population? <h3>Population : {data[0].population}</h3> : <h3>Population : None</h3>}
                    </div>
                    {wikipediaDescription &&
                        <div className="country-description-text">
                            <p>{wikipediaDescription.extract}</p>
                        </div>
                    }
                </div>
            }
                
            <iframe id="gmap_canvas" src={`https://maps.google.com/maps?q=${countryName}&t=&z=5&ie=UTF8&iwloc=&output=embed`} frameBorder="0" scrolling="no">
            </iframe>
                
        </div>
    );
}

export default CountryDetails;