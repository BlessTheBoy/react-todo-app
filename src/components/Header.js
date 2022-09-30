import React from 'react'
import BlessTheBoy2 from '../assets/BlessTheBoy2';
import './scss/header.scss'

function Header() {
    const weekDays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]
    let today = new Date();
    let day = today.getDate();
    let month = today.toLocaleString("default", { month: "short" })
    let year = today.getFullYear()
    let weekDay = weekDays[today.getDay()]

    

    return (
        <div className="header">
            <div className="heading">
                <h1>TODO</h1>
                <p><span>by </span><BlessTheBoy2 /></p>
            </div>
            <div className="date-cont">
                <div className="date">
                    <p>{day}</p>
                    <div>
                        <p>{month.toUpperCase()}</p>
                        <p>{year}</p>
                    </div>
                </div>
                <div className="day">
                    {weekDay.toUpperCase()}
                </div>
            </div>
        </div>
    )
}

export default Header
