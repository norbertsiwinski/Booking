import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";


const Header = () => {


    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [destination, setDestination] = useState("");
    const [openOptions, setOpenOptions] = useState(false);
    const [openAccomodation, setOpenAccomodation] = useState(false);
    const [accomodation, setAccomodation] = useState(
        {
        hotel: false
        });
    const [options, setOptions] = useState(
        {
            adult: 1
        });
    const navigate = useNavigate();
    const handleSearch = () => {

        navigate("/accomodations", { state: { destination, date, options, accomodation } });
    };


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
    

            <div className="containerSearch">
                <div className="containerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="cointainerIcon" />
                    <input
                        id="destinaton"
                        type="text"
                        placeholder="Where are you going?"
                        className="containerSearchInput"
                        onChange={(e) => setDestination(e.target.value)}
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
                    <span onClick={() => setOpenAccomodation(!openAccomodation)} className="containerSearchText">Accomodation Type</span>
                    {openAccomodation && <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" checked ="false" id="Hotel" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                        <input class="form-check-input" type="checkbox" checked="false" id="Hotel" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox cxxcinput</label>

                    </div>
                    }
                </div>
                <div className="containerSearchItem">

                    <button onClick={() => { handleSearch() }} type="button" class="btn btn-primary">Search</button>


                </div>
            </div>
        </div>

    );
}
export default Header;

