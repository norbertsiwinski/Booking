import React from 'react';
import MainNavbar from '../../components/MainNavbar'
import './AddHotel.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import LoggedNavbar from '../../components/LoggedNavbar/loggedNavbar';
import { getItemFromLocalStorage } from '../../helpers/localstorage';
import axios from "axios";
const picture1 = new URL("../../components/propertyList/image/wide.jpg", import.meta.url);

const AddHotel = () => {


    const postHotel = () => {
        let name;
        let type;
        var ele = document.getElementsByName('rad');
        for (let i = 0; i < ele.length; i++) {

            if (ele[i].checked) {
                name = ele[i].value;

            }
        }

        if (name === "hotel") {
            type = "2";
        }
        else if (name === "apartament") {
            type = "1";
        }

        else if (name === "guesthouse") {
            type = "3";
        }
        else if (name === "homestay") {
            type = "4";
        }
        else if (name === "chalet") {
            type = "5";
        }

        axios.post('http://localhost:5027/api/accomodation/',
            {
                name: document.getElementById("name").value,
                description: document.getElementById("description").value,
                accomodationType: parseInt(type),
                place: document.getElementById("place").value,
                distanceToCenter: document.getElementById("distanceToCenter").value,
                price: document.getElementById("price").value,
                contantEmail: document.getElementById("contantEmail").value,
                contantNumber: document.getElementById("contantNumber").value,
                city: document.getElementById("city").value,
                street: document.getElementById("street").value,
                postalCode: document.getElementById("postalCode").value,
            },
            {
                headers: {
                    'Authorization': `Bearer ${getItemFromLocalStorage("authenticationToken")}`
                }
            })
            .then(response => {
                alert(response.statusText)
            })
            .catch(error => {
                alert("Bad reservation request!");
            })
    }

    return (

        <div>
            <LoggedNavbar />
            <div class="testbox">
                <form>
                    <div class="banner">
                        <img
                            src={picture1}
                            alt=""
                            className="Img"
                        />
        
                    </div>
                    <br />
                    <fieldset>
                        <div class="banner2">
                            <h1> Accomodation Address </h1>
                        </div>

                        <div class="colums">
                            <div class="item">
                                <label for="name">Property Name<span>*</span></label>
                                <input id="name" type="text" name="fname" />
                            </div>
                            <div class="item">
                                <label for="contantEmail">Email Address<span>*</span></label>
                                <input id="contantEmail" type="text" name="address" />
                            </div>
                            <div class="item">
                                <label for="contantNumber">Phone Number</label>
                                <input id="contantNumber" type="text" name="phone" />
                            </div>
                            <div class="item">
                                <label for="street">Street</label>
                                <input id="street" type="text" name="city" />
                            </div>
                            <div class="item">
                                <label for="city">City</label>
                                <input id="city" type="text" name="city" />
                            </div>
                            <div class="item">
                                <label for="postalCode">Zip/Postal Code</label>
                                <input id="postalCode" type="text" name="zip" />
                            </div>
                        </div>
                    </fieldset>
                    <br />
                    <fieldset>
                        <div class="banner2">
                            <h1> Accomodation Details </h1>
                        </div>
                        <div class="colums">

                            <div class="item">
                                <p>Accomodation type</p>
                                <label><input type="radio" name="rad" id="apartament" value="apartament" /> <span>Apartament</span></label>
                                <label><input type="radio" name="rad" id="hotel" value="hotel" /> <span>Hotel</span></label>
                                <label><input type="radio" name="rad" id="guesthouse" value="guesthouse" /> <span>Guesthouse</span></label>
                                <label><input type="radio" name="rad" id="homestay" value="homestay" /> <span>Homestay</span></label>
                                <label><input type="radio" name="rad" id="chalet" value="chalet" /> <span>Chalet</span></label>
                            </div>
                            <div class="item">
                                <label for="place">Place<span>*</span></label>
                                <input id="place" type="number" name="amount" />
                            </div>

                            <div class="item">
                                <label for="price">Price per person<span>*</span></label>
                                <input id="price" type="number" name="amount" />
                            </div>
                            <div class="item">
                                <label for="distanceToCenter">Distance to center</label>
                                <input id="distanceToCenter" type="number" name="city" />
                            </div>
                        </div>

                        <div class="item">
                            <label for="description">Description</label>
                            <textarea id="description" rows="3"></textarea>
                        </div>

                    </fieldset>
                    <div class="btn-block">
                        <button
                            onClick={() => postHotel()}
                            type="button"
                            class="btn btn-primary add">Add accomodation</button>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default AddHotel