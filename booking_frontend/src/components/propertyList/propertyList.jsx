import React from 'react';
import './propertyList.css';
import useFetch from '../../hooks/useFetch';
const hotel = new URL("./image/hotel.jpg", import.meta.url);
const apartament = new URL("./image/apartament.jpg", import.meta.url);
const guest = new URL("./image/guest.jpg", import.meta.url);
const chalet = new URL("./image/chalets.jpg", import.meta.url);
const homestay = new URL("./image/homestay.jpg", import.meta.url);

const PropertyList = () => {

    const { data, loading, error } = useFetch("http://localhost:5027/api/accomodation");

    const CountHotels = (data) => {
        let filtred = data.filter((item) =>
            item.accomodationType == 1
        )
        return filtred.length;
    }

    const CountApartaments = (data) => {
        let filtred = data.filter((item) =>
            item.accomodationType == 2
        )
        return filtred.length;
    }
    const CountGuesthouse = (data) => {
        let filtred = data.filter((item) =>
            item.accomodationType == 3
        )
        return filtred.length;
    }
    const CountHomestay = (data) => {
        let filtred = data.filter((item) =>
            item.accomodationType == 4
        )
        return filtred.length;
    }
    const CountChalets = (data) => {
        let filtred = data.filter((item) =>
            item.accomodationType == 5
        )
        return filtred.length;
    }

    return (

        <div className="pList">
            <div className="pListItem">
                <img src={hotel}
                    alt=""
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>Hotels </h1>
                    <h2>{CountHotels(data)} properties</h2>
                </div>
            </div>

            <div className="pListItem">
                <img src={apartament}
                    alt=""
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>Apartments </h1>
                    <h2>{CountApartaments(data)} properties</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={guest}
                    alt=""
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>Guesthouses </h1>
                    <h2>{CountGuesthouse(data)} properties</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={homestay}
                    alt=""
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>Homestay </h1>
                    <h2>{CountHomestay(data)} properties</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={chalet}
                    alt=""
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>Chalets </h1>
                    <h2>{CountChalets(data)} properties</h2>
                </div>
            </div>
        </div>
    )
}

export default PropertyList;