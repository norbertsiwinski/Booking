import "./ReservationItem.css";
import React from 'react';
import useFetch from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import "./ReservationItem.css";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import axios from "axios";
import { setItemToLocalStorage } from "../../helpers/localstorage";
import jwt_decode from "jwt-decode";

const picture1 = [
    new URL("../propertyList/image/hotel.jpg", import.meta.url),
    new URL("../propertyList/image/chalets.jpg", import.meta.url),
    new URL("../propertyList/image/homestay.jpg", import.meta.url),
    new URL("../propertyList/image/apartament.jpg", import.meta.url),
    new URL("../propertyList/image/hotel.jpg", import.meta.url)
];

const ReservationItem = ({ item, index }) => {

    const { state } = useLocation();

    function removeTime(date = new Date()) {
        return new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
        );
    }
    const handleRemove = () => {

        axios.delete('http://localhost:5027/api/reservation/' + item.id)
            .then((res) => {
                alert("deleted");
                window.location.reload();
            })
            .catch((err) => alert(err.response.data))
    }

    const { data, loading, error } = useFetch("http://localhost:5027/api/accomodation/id/" + item.accomodationId);
    return (


        <div className="searchItem">
            {console.log(item)}
            <img
                src={picture1[index]}
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle"> {data.name}</h1>
                <div className="res">

                    <FontAwesomeIcon icon={faLocationDot} className="locatlion" />

                     {    } {data.street}, {data.postalCode} {data.city}

                </div>



                <span className="siSubtitle">
                    <h1>Reservation data:</h1>
                    <h2>   <FontAwesomeIcon icon={faCalendarDays} className="cointainerIcon2" /> check-in: {item.startDate.split("T")[0]} </h2>
                    <h2>   <FontAwesomeIcon icon={faCalendarDays} className="cointainerIcon2" /> check-out: {item.endDate.split("T")[0]}</h2>
                </span>
            </div>
            <div className="siDetails">

                <div className="siDetailText">
                    <span className="siPrice"> </span>

                    <button type="button"
                        class="btn btn-danger"
                        onClick={() => { handleRemove() }}
                    >Cancel reservation</button>

                </div>
            </div>
        </div>
    )
}
export default ReservationItem;