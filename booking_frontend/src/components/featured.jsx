import React from 'react';
import './featured.css';
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const picture1 = new URL("./featured/karpacz.jpg", import.meta.url);
const picture2 = new URL("./featured/zakopane.jpg", import.meta.url);
const picture3 = new URL("./featured/wisla.jpg", import.meta.url);



const Featured = (status) => {
    const { data, loading, error } = useFetch("api/accomodation");
    const { state } = useLocation();

    const navigate = useNavigate();


    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [options, setOptions] = useState(
        {
            adult: 1
        });



    const [accomodation, setChecked] = useState(
        {
            hotel: false,
            apartament: false,
            guesthouse: false

        }
    )




    const handleSearch = (dest) => {

        navigate("/accomodations", { state: { destination: dest, date, options, accomodation } });
    };

    return (
        <div className="featured">
            {loading ? ("Loading please wait"
            ) : (
                <>

                    <div className="featuredItem"

                    >
                        <img src={picture1}
                            alt=""
                            className="featuredImg"
                            onClick={() => { handleSearch("Karpacz") }} />

                        <div className="featuredTitles"
                        >
                            <h1>Karpacz</h1>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img src={picture2}
                            alt=""
                            className="featuredImg"
                            onClick={() => { handleSearch("Zakopane") }} />

                        <div className="featuredTitles">
                            <h1>Zakopane</h1>

                        </div>
                    </div>
                    <div className="featuredItem">
                        <img src={picture3}
                            alt=""
                            className="featuredImg"
                            onClick={() => { handleSearch("Wisła") }} />
                        <div className="featuredTitles">
                            <h1>Wisła</h1>

                        </div>
                    </div>
                </>
            )}
        </div>
    );


}

export default Featured;