import React from 'react';
import "./Footer.css"
import Instagram from "../../assets/instagram.png";
import gym from "../../assets/gym.png";
import facebook from "../../assets/facebook.png";
import maps from "../../assets/maps.png"



const Footer = () => {
return (
<div className='Footer-container'>
    <hr />
    <div className="footer">
        <div className="social">
            <a href="https://www.instagram.com/olymp_usgym/?hl=de" target="_blank">
                <img className='insta' src={Instagram} alt="" /></a>
            <a href="https://www.facebook.com/Olympusgym62?mibextid=ZbWKwL" target="_blank">
                <img className='fb' src={facebook} alt="" /></a>

            <a href="https://www.google.com/maps/place/Olympus_Gym/@-31.5945441,-64.3473084,15z/data=!4m6!3m5!1s0x942d59b487105277:0xbfaa7f4a474d29fe!8m2!3d-31.5945441!4d-64.3473084!16s%2Fg%2F11v9y553x7?entry=ttu" target="_blank">
                <img className='maps' src={maps} alt="" /></a>




        </div>
        <div className="logo-l">
            <img src={gym} alt="" />

        </div>


    </div>
</div>
)
}

export default Footer