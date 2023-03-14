import React from 'react';
import ButtonBlue from "./ButtonBlue";

const PresentationModule = () => {
    return (
        <div className="presentation-content">
            <div className="presentation">
                <h1>More than just shorter links</h1>
                <p>
                    Build your brand's recognition and get
                    detailed insights on how your links are
                    performing.
                </p>
                <ButtonBlue text={"Get Started"} height={55} width={205} borderRadius={40} fontSize={20}/>
            </div>
            <div className="illustration">
                <img src="/img/illustration-working.svg" alt="illustration de travail"/>
            </div>
        </div>
    );
};

export default PresentationModule;
