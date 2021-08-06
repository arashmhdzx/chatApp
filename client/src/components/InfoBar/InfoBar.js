/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './InfoBar.css'
import closeIcon from "../../icons/closeIcon.png"
import onlineIcon from "../../icons/onlineIcon.png"



const InfoBar = ({ room }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} />
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/">
                <img src={closeIcon} alt="close image" />
            </a>
        </div>
    </div>
)

export default InfoBar