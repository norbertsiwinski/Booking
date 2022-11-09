import React from 'react';
import MainNavbar from '../../components/MainNavbar'
import './Home.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Header from '../../components/header';
import Image from '../../components/image/image'
import { useLocation } from 'react-router-dom';
import Featured from '../../components/featured';
import PropertyList from '../../components/propertyList/propertyList';
const Home = () => {

    const { state } = useLocation();

    return (
        <div>
            <MainNavbar />
            <Image />
            <Header state = {state}/>

            <div className="homeContainer">
                <Featured state = {state}/>
                <h1 className="homeTitle">Search by property type</h1>
                <PropertyList />
            </div>
        </div >
    )
}

export default Home