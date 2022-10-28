import React from 'react';
import './propertyList.css';
const picture1 = new URL("./zakopane22.jpg", import.meta.url);

const PropertyList = () => {
    return (
        <div className="pList">
            <div className="pListItem">
                <img src={picture1}
                    alt=""
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>Hotels </h1>
                    <h2>232 numbers </h2>
                </div>
            </div>

            <div className="pListItem">
                <img src={picture1}
                    alt=""
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>Apartments </h1>
                    <h2>232 numbers </h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={picture1}
                    alt=""
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>Apartments </h1>
                    <h2>232 numbers </h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={picture1}
                    alt=""
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>Apartments </h1>
                    <h2>232 numbers </h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={picture1}
                    alt=""
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>Rooms</h1>
                    <h2>232 numbers </h2>
                </div>
            </div>
        </div>
    )
}

export default PropertyList;