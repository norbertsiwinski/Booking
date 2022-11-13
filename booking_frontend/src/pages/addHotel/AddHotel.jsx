import React from 'react';
import MainNavbar from '../../components/MainNavbar'
import './AddHotel.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Header from '../../components/header';
import Image from '../../components/image/image'
import { useLocation } from 'react-router-dom';
import Featured from '../../components/featured';
import LoggedNavbar from '../../components/LoggedNavbar/loggedNavbar';
import { getItemFromLocalStorage } from '../../helpers/localstorage';
import PropertyList from '../../components/propertyList/propertyList';


const AddHotel = () => {

    return (
        <div>addhotel</div>
    )
}

export default AddHotel