import React from "react";
import "./SearchItem.css";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const picture1 = [
    new URL("../propertyList/image/hotel.jpg", import.meta.url),
    new URL("../propertyList/image/chalets.jpg", import.meta.url),
    new URL("../propertyList/image/homestay.jpg", import.meta.url),
    new URL("../propertyList/image/apartament.jpg", import.meta.url),
    new URL("../propertyList/image/hotel.jpg", import.meta.url)
];
const SearchItem = ({ state, item, index }) => {

    const navigate = useNavigate();
    const handleSearch = () => {

        navigate("/accomodation", { state: dane });
    };

    const [dane, setDane] = useState(
        {
            state,
            item
        });

    return (
        <div className="searchItem">
            <img
                src={picture1[index]}
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle"> {item.name}</h1>
                <span className="siDistance">
                    <FontAwesomeIcon icon={faLocationDot} className="location" />
                    {item.city}, {item.distanceToCenter}m form center</span>
                <span className="siSubtitle">
                    {item.description}
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button type="button" class="btn btn-light rate">8.6</button>
                </div>
                <div className="siDetailText">
                    <span className="siPrice"> ${item.price * state.options.adult}</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button type="button"
                        class="btn btn-primary avaible"
                        onClick={() => { handleSearch() }}
                    >See availbility</button>

                </div>
            </div>
        </div>

    )

}

export default SearchItem