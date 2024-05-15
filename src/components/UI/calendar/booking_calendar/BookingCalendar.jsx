import { useState } from "react";
import Calendar from "react-calendar";
import './BookingCalendar.css';
import classes from './BookingCalendar.module.css';

const BookingCalendar = ({ isDisabled, selectedDate, setSelectedDate }) => {
    const [isActive, setActive] = useState(false)

    const activeChanger = () => {
        if (isActive) { setActive(false) }
        else { setActive(true) }
    }

    return (
        <div className={isDisabled ? [classes.calendar_box, classes.calendar_box_disabled].join(' ') : classes.calendar_box}>
            <div onClick={activeChanger} className={(isActive === true) ? [classes.calendar_field, classes.calendar_field_active].join(' ') : classes.calendar_field}>
                <span>{(selectedDate === '') ? 'Выберите дату' : selectedDate}</span>
            </div>

            <div className={(isActive === true) ? [classes.calendar_panel, classes.calendar_panel_active].join(' ') : classes.calendar_panel}>
                <Calendar value={selectedDate} onChange={(e) => {
                    const yyyy = e.getFullYear();
                    let mm = e.getMonth() + 1;
                    let dd = e.getDate();
                    if (dd < 10) dd = '0' + dd;
                    if (mm < 10) mm = '0' + mm;
                    const formattedDate = yyyy + '-' + mm + '-' + dd;
                    setSelectedDate(formattedDate);
                    setActive(false)
                }} />
            </div>
        </div>

    )
}

export default BookingCalendar;