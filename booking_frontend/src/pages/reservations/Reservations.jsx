import "./Reservations.css";
import React from 'react';
import useFetch from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import ReservationItem from '../../components/reservationItem/ReservationItem';
import { getItemFromLocalStorage } from "../../helpers/localstorage";
import LoggedNavbar from "../../components/LoggedNavbar/loggedNavbar";

const Reservations = () => {

    const { state } = useLocation();
    const Search = (data) => {
        let filtred = data.filter((item) =>
            item.reservations.filter((res) =>
                res.createdById == getItemFromLocalStorage("id")

            ) != 0
        )
        return filtred;
    }


    const { data, loading, error } = useFetch("http://localhost:5027/api/reservation/userId/" + getItemFromLocalStorage("id"));


    return (
        <div>
            <LoggedNavbar />
            <div className="listContainer">
                <div className="listResult2">
                    {
                        <>
                            {data.map((item, index) => (
                                < ReservationItem item={item} index={index} />
                            ))
                            }
                        </>}
                </div>
            </div>
        </div>
    )
}
export default Reservations;