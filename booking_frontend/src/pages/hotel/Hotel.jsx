import "./Hotel.css";
import MainNavbar from "../../components/MainNavbar";
import Header from "../../components/header";
import React from "react";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { faCircleXmark, faCircleArrowLeft, faCircleArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import { addISOWeekYears } from "date-fns/esm";



const picture1 = new URL("./images/11.jpg", import.meta.url);
const picture2 = new URL("./images/22.jpg", import.meta.url);
const picture3 = new URL("./images/88.jpg", import.meta.url);
const picture4 = new URL("./images/44.jpg", import.meta.url);
const picture5 = new URL("./images/33.jpg", import.meta.url);
const picture6 = new URL("./images/99.jpg", import.meta.url);

const Hotel = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const { state } = useLocation();

    const photos = [
        {
            src: picture1
        },
        {
            src: picture2
        },
        {
            src: picture3
        },
        {
            src: picture4
        },
        {
            src: picture5
        },
        {
            src: picture6
        }
    ];

    const calucateDays = () => {
        var diffTime = state.state.date[0].endDate.getTime() - state.state.date[0].startDate.getTime()
        var diffDays = diffTime / (1000 * 3600 * 24);
        return diffDays;
    }

    const handleReserve = () => {
        { console.log("state") }
        { console.log(state.item.id) }
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
    const handleOpen = (i) => {

        setSlideNumber(i);
        setOpen(true);

    }

    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
        }
        else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
        }
        setSlideNumber(newSlideNumber);
    }


    return (
        <div>
            {console.log("hotel state:")}
            {console.log(state.item.id)}
            {console.log(state.state.date[0].startDate)}
            {console.log(state.state.date[0].endDate)}
            <MainNavbar />
            <p className="space"></p>
            <div className="back"> </div>
            <Header state={state.state} />
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />

                    <div className="slideWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("l")} />
                </div>}
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
                        {photos.map((photo, i) =>
                        (
                            <div className="hotelImgWrapper">
                                <img
                                    onClick={() => handleOpen(i)}
                                    src={photo.src} className="hotelImg" />
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