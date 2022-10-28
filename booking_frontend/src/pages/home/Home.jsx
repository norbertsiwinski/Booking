import React from 'react';
import MainNavbar from '../../components/MainNavbar'
import './Home.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Header from '../../components/header';
import Featured from '../../components/featured';
import PropertyList from '../../components/propertyList/propertyList';
const Home = () => {


    return (
        <div>
            <MainNavbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Search by property type</h1>
                <PropertyList/>
            </div>
        </div >
    )
}

export default Home