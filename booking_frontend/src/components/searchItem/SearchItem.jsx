import React from "react";
import "./SearchItem.css";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const picture1 = new URL("../featured/karpacz.jpg", import.meta.url);
const SearchItem = (item, state) => {
    console.log(item)
    return (
        <div className="searchItem">
            <img
                src={picture1}
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle"> {item.item.name}</h1>
                <span className="siDistance">
                    <FontAwesomeIcon icon={faLocationDot} className="location" />
                    {item.item.city}, { item.item.distanceToCenter}m form center</span>
                <span className="siSubtitle">
                    {item.item.description}
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button type="button" class="btn btn-light rate">8.6</button>
                </div>
                <div className="siDetailText">
                    <span className="siPrice"> ${item.item.price * item.state.options.adult}</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button type="button" class="btn btn-primary avaible">See availbility</button>

                </div>
            </div>
        </div>

    )

}

export default SearchItem