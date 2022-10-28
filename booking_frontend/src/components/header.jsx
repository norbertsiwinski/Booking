import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import useFetch from '../hooks/useFetch';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
const picture = new URL("./wwe.jpg", import.meta.url);

const Header = () => {

    const {data, loading, error } = useFetch("api/accomodation");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [openOAccomodation, setOpenAccomodation] = useState(false);
    const [options, setOptions] = useState(
        {
            adult: 1
        });
        const navigate = useNavigate();
        const createPost = () => {
            navigate('/accomodations',
                {
                    state: {
                        data
                    }
                });
        }


    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };
    return (
        <div>
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
                    <FontAwesomeIcon icon={faHotel} className="cointainerIcon" />
                    <span onClick={() => setOpenAccomodation(!openOAccomodation)} className="containerSearchText">Accomodation Type</span>
                    {openOAccomodation && <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    </div>
                    }
                </div>
                <div className="containerSearchItem">
                  
                    <button onClick={() => { createPost() }}type="button" class="btn btn-primary">Search</button>
                   
                    
                </div>
            </div>
        </div>

    );
}
export default Header;

