import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
    const arrow = document.querySelector("#arrow");
    const optionsButton = document.getElementsByClassName("optionsButton");
    const checkboxList = document.querySelector(".continent-checkbox-list");
    
    const moveTop = () => {
        window.scrollTo(0, 0);
    }
    
    const appear = () => {
        checkboxList.classList.toggle("appear");
    }

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [tapeInput, setTapeInput] = useState("");
    const [sortByPopulation, setSortByPopulation] = useState(false);
    const [sortByAfrica, setSortByAfrica] = useState(false);
    const [sortByAmerica, setSortByAmerica] = useState(false);
    const [sortByAsia, setSortByAsia] = useState(false);
    const [sortByEurope, setSortByEurope] = useState(false);
    const [sortByOceania, setSortByOceania] = useState(false);

    
    useEffect(() => {
        
        axios.get(
                    "https://restcountries.com/v3.1/all"
                    //"https://restcountries.com/v3.1/name/pe"
                ).then((res) => {
                    const data = res.data.sort((a, b) => a.name.common.localeCompare(b.name.common)); 
                    setData(data);
                    setFilteredData(data);
                })
    }, []);

    useEffect(() => {
        if(data === []) return;

        let sortCountries = data.filter(country => country.name.common.toLowerCase().includes(tapeInput.toLowerCase()));

        const selectedRegions = [];
        if(sortByAfrica) selectedRegions.push("Africa");
        if(sortByAmerica) selectedRegions.push("Americas");
        if(sortByAsia) selectedRegions.push("Asia")
        if(sortByEurope) selectedRegions.push("Europe");
        if(sortByOceania) selectedRegions.push("Oceania");

        if(selectedRegions.length) {
            sortCountries = sortCountries.filter(country => selectedRegions.includes(country.region));
        }
        
        if(sortByPopulation) {
            setFilteredData(sortCountries.sort((a, b) => b.population - a.population));
        }else {
            setFilteredData(sortCountries.sort((a, b) => a.name.common.localeCompare(b.name.common)));
        }
        
    }, [tapeInput, sortByPopulation, sortByAfrica, sortByAmerica, sortByAsia, sortByEurope, sortByOceania]);

    
    return (
        <div className="countries-list-page">
            <p id="arrow" onClick={moveTop}>&#8593;</p>
            <p className="optionsButton" onClick={appear}>Options</p>
            <form id="search-form">
                <br />
                <label forhtml="search-input">Rechercher un pays</label>
                <br />
                <input
                    id="search-input"
                    type="text"
                    placeholder="Entrer un pays"
                    value={tapeInput}
                    onChange={(event) => setTapeInput(event.target.value)}
                />
            </form>
            <div className="continent-checkbox-list">
                <label id="checkbox-container">
                    Africa
                    <input type="checkbox" checked={sortByAfrica} onChange={() => setSortByAfrica(!sortByAfrica)}/>
                    <span id="checkmark"></span>
                </label>
                <label id="checkbox-container">
                    America
                    <input type="checkbox" checked={sortByAmerica} onChange={() => setSortByAmerica(!sortByAmerica)}/>
                    <span id="checkmark"></span>
                </label>
                <label id="checkbox-container">
                    Asia
                    <input type="checkbox" checked={sortByAsia} onChange={() => setSortByAsia(!sortByAsia)}/>
                    <span id="checkmark"></span>
                </label>
                <label id="checkbox-container">
                    Europe
                    <input type="checkbox" checked={sortByEurope} onChange={() => setSortByEurope(!sortByEurope)}/>
                    <span id="checkmark"></span>
                </label>
                <label id="checkbox-container">
                    Oceania
                    <input type="checkbox" checked={sortByOceania} onChange={() => setSortByOceania(!sortByOceania)}/>
                    <span id="checkmark"></span>
                </label>
                <label id="checkbox-container">
                    Pop. décroissante
                    <input type="checkbox" checked={sortByPopulation} onChange={() => setSortByPopulation(!sortByPopulation)}/>
                    <span id="checkmark"></span>
                </label>
            </div>
            
            <ul className="countries-list">
                {filteredData.map((country, id) => (
                        //<li>{JSON.stringify(element.currencies[0])}</li>
                        <Card country={country} key={id}/>
                    )
                )}
            </ul>
           
        </div>
    );
};

export default Countries;