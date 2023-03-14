import React from 'react';
import Header from "./components/Header";
import PresentationModule from "./components/PresentationModule";
import ShortenLinkModule from "./components/ShortenLinkModule";
import StatTitle from "./components/StatTitle";
import Stat from "./components/Stat";
import BoostModule from "./components/BoostModule";
import Footer from "./components/Footer";
import ShortenLinkShow from "./components/ShortenLinkShow";

const Home = () => {
    return (
        <div className="page-content">
            <Header/>
            <PresentationModule/>
            <div className="stat">
                <ShortenLinkModule/>
                <ShortenLinkShow/>
                <StatTitle/>
                <Stat/>
            </div>
            <BoostModule/>
            <Footer/>
        </div>
    );
};

export default Home;
