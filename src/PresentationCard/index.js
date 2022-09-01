import React from "react";
import lautaroBarrera from './lautarobarrera.png';
import './PresentationCard.css';

function PresentationCard() {
    return(
        <div className="PresentationCard">
            <div className="img-sombra">
                <div className="img-container">
                    <img src={lautaroBarrera} alt="Lautaro Barrera"/>
                </div>
            </div>
        <div className="info-container">
            <h1>Lautaro Barrera</h1>
            <h3>Desarrollador Web</h3>
            <div className="social-media">
                <i className="bi bi-github"></i>
                <i className="bi bi-linkedin"></i>
            </div>
        </div>
        </div>
    );
}

export { PresentationCard }