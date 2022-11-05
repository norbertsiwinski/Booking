import React from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import MainNavbar from '../../components/MainNavbar';
import "./List.css";
import { useState } from 'react';
import { format } from "date-fns";
import Header from '../../components/header';
import { text } from '@fortawesome/fontawesome-svg-core';
import SearchItem from '../../components/searchItem/SearchItem';
const List = () => {

    const { state } = useLocation();

    const [destination, setDestination] = useState(state.destination)
    const [date, setDate] = useState(state.date);
    // const [options, setOptions] = useState(state.options)
    // const [accomodation, setAccomodation] = useState(state.accomodation)




    const { data, loading, error } = useFetch("http://localhost:5027/api/accomodation");

    const search = (data) => {

        let filtred = data.filter((item) =>
            item.city.includes(state.destination) &&
            //!item.date.includes(state.date) &&
            item.place >= state.options.adult)

        return filtred;

    }
    return (
        <div>



            <MainNavbar />
            <p className="space"></p>
            <div className="back"> </div>
            <Header />
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
                    {loading ? "loading" : <>
                        {search(data).map(item => (
                            < SearchItem item={item} state={state} key={item.id} />
                        ))
                        }
                    </>}
                </div>
            </div>
        </div >
    )
}

export default List