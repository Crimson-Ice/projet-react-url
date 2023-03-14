import React from 'react';
import StatCard from "./StatCard";

const Stat = () => {
    const dataCard = {
        brand: {
            title: "Brand Recognition",
            text: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content",
            iconWay: "/img/icon-brand-recognition.svg",
        },
        record: {
            title: "Detailed Records",
            text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
            iconWay: "/img/icon-detailed-records.svg",
        },
        customizable: {
            title: "Fully Customizable",
            text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
            iconWay: "/img/icon-fully-customizable.svg",
        }
    }

    return (
        <div className="stat-content">
            <div className="blue-line-container">
                <div className="blue-line"></div>
            </div>
            <div className="card">
                <div id="statCard-1">
                    <StatCard dataCard={dataCard.brand}/>
                </div>
                <div id="statCard-2">
                    <StatCard dataCard={dataCard.record}/>
                </div>
                <div id="statCard-3">
                    <StatCard dataCard={dataCard.customizable}/>
                </div>
            </div>
        </div>
    );
};

export default Stat;
