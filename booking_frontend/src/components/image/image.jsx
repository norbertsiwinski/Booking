import React from "react"
import "./image.css";

const picture = new URL("./wwe.jpg", import.meta.url);
const Image = () => {
    return (

        <div class="picture-container">
            <div class="centered">
                <div class="bigtext"> HOTELS, APARTMENTS, ROOMS AND MORE... </div>
                <div class="smalltext"> Look for rooms from all over the world</div>
            </div>
            <img src={picture} />
        </div>
    )
}
export default Image;