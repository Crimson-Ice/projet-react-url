import React from 'react';
import "./Stat";
import {StatCardProps} from "../Interface";

const StatCard = ({ dataCard: { title, text, iconWay } }: StatCardProps) => {
    return (
        <div className="statCard-content">
            <div className="container-icon">
                <img src={iconWay} alt="iconStat"/>
            </div>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
};

export default StatCard;
