import React, { useState } from "react";
import classes from './BookingCalendar.module.css'

const BookingCalendar = ({selectedDate, setSelectedDate, ...props}) => {

    return (
        <div className={classes.calendar_div}>
                <input type="date" className={classes.calendar} onChange={e => setSelectedDate(e.target.value)} />
        </div>

    )
}

export default BookingCalendar;