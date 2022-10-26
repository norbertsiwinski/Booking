import React from 'react';
import MainNavbar from '../../components/MainNavbar'
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";

const picture = new URL("./wwe.jpg", import.meta.url);

const Home = () => {

    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState(
        {
            adult: 1
        });

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] -1,
            };
        });
    };


    return (
        <div className="App">
            <MainNavbar />
            <div class="picture-container">
                <div class="centered">
                    <div class="bigtext"> HOTELS, APARTMENTS, ROOMS AND MORE... </div>
                    <div class="smalltext"> Look for rooms from all over the world</div>
                </div>
                <img src={picture} />
            </div>

            <div className="containerSearch">
                <div className="containerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="cointainerIcon" />
                    <input
                        type="text"
                        placeholder="Where are you going?"
                        className="containerSearchInput"
                    />
                </div>
                <div className="containerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="cointainerIcon" />
                    <span onClick={() => setOpenDate(!openDate)} className="containerSearchText">{`${format(date[0].startDate, "MMM/dd/yyyy")} 
                    to ${format(date[0].endDate, "MMM/dd/yyyy")}`}</span>
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                    />}
                </div>
                <div className="containerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="cointainerIcon" />
                    <span onClick={() => setOpenOptions(!openOptions)} className="containerSearchText">{`${(options.adult)} person`} </span>
                    {openOptions && <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <class className="optionCounter">
                                <button
                                    disabled={options.adult <= 1}
                                    className="optionCounterButton"
                                    onClick={() => handleOption("adult", "d")}>-</button>
                                <span className="optionNumber">{options.adult}</span>
                                <button
                                    className="optionCounterButton"
                                    onClick={() => handleOption("adult", "i")}>+</button>
                            </class>
                        </div>
                    </div>
                    }
                </div>
                <div className="containerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="cointainerIcon" />
                    <span className="containerSearchText">Accomodation Type</span>
                </div>
                <div className="containerSearchItem">
                    <button type="button" class="btn btn-primary">Search</button>
                </div>
            </div>

        </div >
    )
}

export default Home