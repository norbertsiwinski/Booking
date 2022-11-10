import React from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import MainNavbar from '../../components/MainNavbar';
import "./List.css";
import { format } from "date-fns";
import Header from '../../components/header';
import { text } from '@fortawesome/fontawesome-svg-core';
import SearchItem from '../../components/searchItem/SearchItem';
import { useEffect, useState } from "react"
import axios from "axios";
const image = [
    new URL("../../components/featured/wisla.jpg", import.meta.url),
    new URL("../../components/featured/karpacz.jpg", import.meta.url),
]


const List = () => {

    const { state } = useLocation();
    const [destination, setDestination] = useState(state.destination)
    const [date, setDate] = useState(state.date);
    // const [options, setOptions] = useState(state.options)
    // const [accomodation, setAccomodation] = useState(state.accomodation)


    const useFetched = url => {
        const [dates, setData] = useState([]);
        const [error, setError] = useState(false);
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const res = await axios.get(url);
                    setData(res.data);
                } catch (err) {

                    setError(err);
                }
            };
            fetchData();
        }, [url]);
        return { dates, error }
    };

    const { data, loading, error } = useFetch("http://localhost:5027/api/accomodation");



    const Search = (data) => {
        let filtred = data.filter((item) =>
            item.city.includes(state.destination) &&
            item.place >= state.options.adult &&
            item.reservations.filter((res) =>
                !(((new Date(res.startDate).getTime()) < state.date[0].startDate.getTime()
                    || (new Date(res.startDate).getTime()) > state.date[0].endDate.getTime())
                    &&
                    ((new Date(res.endDate).getTime()) < state.date[0].startDate.getTime()
                        || (new Date(res.endDate).getTime()) > state.date[0].endDate.getTime()))
            ) == 0
        )

        return filtred;
    }




    return (
        <div>
            {console.log(data)}
            <MainNavbar />
            <p className="space"></p>
            <div className="back"> </div>
            <Header state={state} />
            <div className="listSearch">
                <div className="lsItem">
                    <input className="priceBox"
                        placeholder=" Min price           zł"
                        type="text"></input>
                </div>
                <div className="lsItem">
                    <input className="priceBox"
                        placeholder=" Max price          zł"
                        type="text"></input>
                </div>
            </div>
            <div className="listContainer">
                <div className="listResult">
                    {<>
                        {Search(data).map((item, index) => (
                            < SearchItem state={state} item={item} index={index} />
                        ))
                        }
                    </>}
                </div>
            </div>
        </div >
    )
}

export default List