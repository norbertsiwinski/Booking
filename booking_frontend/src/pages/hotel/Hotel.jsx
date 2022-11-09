import "./Hotel.css";
import MainNavbar from "../../components/MainNavbar";
import Header from "../../components/header";
import React from "react";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import { addISOWeekYears } from "date-fns/esm";
const picture1 = new URL("../../components/featured/karpacz.jpg", import.meta.url);


const Hotel = () => {

    const { state } = useLocation();

    const photos = [
        {
            src: picture1
        },
        {
            src: picture1
        },
        {
            src: picture1
        },
        {
            src: picture1
        },
        {
            src: picture1
        },
        {
            src: picture1
        }
    ];

    const calucateDays = () => {
        var diffTime = state.state.date[0].endDate.getTime() - state.state.date[0].startDate.getTime()
        var diffDays = diffTime / (1000 * 3600 * 24);
        return diffDays;
    }

    const handleReserve = () => {
        axios.post('http://localhost:5027/api/reservation/',
            {
                accomodationId: state.item.id,
                startDate: state.state.date[0].startDate,
                endDate: state.state.date[0].endDate,
            })
            .then(response => {
                alert(response.statusText)
            })
            .catch(error => {
                alert(error.statusText)
            })
    }


    return (
        <div>
            {console.log("state state hotel")}
            {console.log(state.state)}
            <MainNavbar />
            <p className="space"></p>
            <div className="back"> </div>
            <Header state = {state.state} />
            <div className="hotelContainer">
                <div className="hotelWrapper">
                    <button type="button" class="btn btn-primary reserve">Reserve or book now!</button>
                    <h1 className="hotelTitle"> {state.item.name}</h1>
                    <div className="hotelAdress">
                        <FontAwesomeIcon icon={faLocationDot} className="location" />
                        <span>
                            {state.item.street}, {state.item.postalCode} {state.item.city}
                        </span>
                    </div>
                    <span className="hotelDistance">
                        Location - {state.item.distanceToCenter}m form center
                    </span>
                    <div className="hotelImages">
                        {photos.map(photo =>
                        (
                            <div className="hotelImgWrapper">
                                <img src={photo.src} className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle"> {state.item.name}  <button type="button" class="btn btn-light rate">8.6</button></h1>
                            <p className="hotelDesc">
                                {state.item.description}
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1> Perfect for a {calucateDays()}-night stay!</h1>
                            <span>
                                Book this property right now, just click the button below!
                            </span>
                            <h2>
                                <b>${state.item.price * state.state.options.adult} </b>({calucateDays()} nights)
                            </h2>
                            <button
                                type="button"
                                onClick={() => { handleReserve() }}
                                class="btn btn-primary down">Reserve or book now!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}

export default Hotel;