import React from 'react';
import './featured.css';
import useFetch from '../hooks/useFetch';
const picture1 = new URL("./featured/karpacz.jpg", import.meta.url);
const picture2 = new URL("./featured/zakopane.jpg", import.meta.url);
const picture3 = new URL("./featured/karpacz.jpg", import.meta.url);

const Featured = () => {
const {data, loading, error } = useFetch("api/accomodation");

    return (
        <div className="featured">
            {loading ? ("Loading please wait"
            ) : (
            <>

                <div className="featuredItem">
                    <img src={picture1}
                        alt=""
                        className="featuredImg"
                    />
                    <div className="featuredTitles">
                        {data.map(data => <h1>{data.city}</h1>)}
                        {data.map(data => <h2>{data.name}</h2>)}
                    </div>
                </div>
                <div className="featuredItem">
                    <img src={picture2}
                        alt=""
                        className="featuredImg"
                    />
                    <div className="featuredTitles">
                        <h1>Karpacz</h1>
                     
                    </div>
                </div>
                <div className="featuredItem">
                    <img src={picture3}
                        alt=""
                        className="featuredImg"
                    />
                    <div className="featuredTitles">
                        <h1>Karpacz</h1>
                    
                    </div>
                </div>
                </>
                )}
        </div>
    );


}

export default Featured;