import React, { useEffect } from 'react'
import BlessTheBoy2 from './BlessTheBoy2';
import './css/header.css'

function Header() {
    const weekDays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]
    let today = new Date();
    let day = today.getDate();
    let month = today.toLocaleString("default", { month: "short" })
    let year = today.getFullYear()
    let weekDay = weekDays[today.getDay()]

    useEffect(() => {
        today = new Date();
        day = today.getDate();
        month = today.toLocaleString("default", { month: "short" })
        year = today.getFullYear()
        weekDay = weekDays[today.getDay()]
    }, [today])

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
