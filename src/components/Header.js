import React, { useEffect } from 'react'

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
        <div>
            <div>
                <p>{day}</p>
                <div>
                    <p>{month.toUpperCase()}</p>
                    <p>{year}</p>
                </div>
            </div>
            <div>
                {weekDay.toUpperCase()}
            </div>
        </div>
    )
}

export default Header
