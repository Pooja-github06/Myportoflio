// SplashScreen.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./SplashScreen.css";

export default function SplashScreen() {
    return (
        <div className="splash-container">
            <FontAwesomeIcon icon={faCode} className="splash-icon" />
        </div>
    );
}
