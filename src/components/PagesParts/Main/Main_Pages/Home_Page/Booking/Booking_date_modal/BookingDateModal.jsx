import React, { useState } from "react";
import { useEffect } from "react";
import { CookieManager, GET_BOOKING_ORDER_URL, POST_BOOKING_ORDER_URL } from "../../../../../../../MAIN";
import classes from './BookingDateModal.module.css'
import MainStyleBtn from "../../../../../../UI/button/main_style_button/MainStyleBtn";
import BookingSelector from "../../../../../../UI/selector/Booking_selector/BookingSelector";
import BookingCalendar from "../../../../../../UI/calendar/booking_calendar/BookingCalendar";
import RoomSelector from "../../../../../../UI/selector/Room_selector/RoomSelector";

const BookingDateModal = ({selectedRoom, setSelectedRoom, selectedCell, setSelectedCell, selectedDate, setSelectedDate, dateChosen, setDateChosen, scrollPos }) => {

    const [dayList, setDayList] = useState([])

    const [dateIsBeActive, setDateIsBeActive] = useState(false);

    const [dateDisabler, setDateDisabler] = useState(true);
    const [timeCellsDisabler, setTimeCellsDisabler] = useState(true);
    const [buttonDisabler, setButtonDisabler] = useState(true);
    const [bookingMessage, setBookingMessage] = useState('');

    useEffect(() => {
        if (selectedRoom != 'none') {
            setDateDisabler(false)
        }
    }, [selectedRoom])

    useEffect(() => {
        const getDayList = () => {

            fetch(GET_BOOKING_ORDER_URL + selectedDate)
                .then(response => response.json())
                .then(
                    (result) => {

                        const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

                        for (let i = 0; i < result.length; i++) {
                            let elementOf = result[i];
                            console.log(result)

                            let fullDate = elementOf.appointmentFullDate
                            let date = new Date(fullDate)
                            let cell = date.getHours()
                            array[cell] = 1;
                        }

                        // setDayList(array)
                    },
                    (error) => {
                        console.log(error)
                    }
                )
        }

        if (selectedDate != '') {
            setSelectedCell('')
            getDayList([])
            setTimeCellsDisabler(false)
        }
    }, [selectedDate])

    useEffect(() => {
        if (
            selectedCell != '' &&
            selectedDate != ''
        ) {
            setButtonDisabler(false)
        }
    }, [selectedCell, selectedDate])


    const activeBookingChecker = () => {
        let form = document.getElementById('Booking_date')

        if (dateIsBeActive == false) {

            if (scrollPos > 1650) {

                if (form.classList.contains(classes.container_active)) {
                    return
                } else {
                    form.classList.add(classes.container_active)
                    setDateIsBeActive(true)
                }
            }
        }
    }
    
    useEffect(() => {
        let form = document.getElementById('Booking_date')

        if (dateChosen) {
            form.classList.remove(classes.container_active)
        }

        setTimeout(() => {
            if (dateIsBeActive && !dateChosen) {
                form.classList.add(classes.container_active)
            }
        }, 700)


    }, [dateChosen])



    return (
        <div id="Booking_date" onScroll={activeBookingChecker()} className={classes.container}>
            <div className={classes.booking_form}>
                <div className={classes.container_top}>
                    <RoomSelector selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />
                    <BookingCalendar isDisabled={dateDisabler} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                </div>
                <div className={classes.container_mid}>
                    <BookingSelector dayList={dayList} isDisabled={timeCellsDisabler} selectedCell={selectedCell} setSelectedCell={setSelectedCell} />
                </div>
                <div className={classes.container_bot}>
                    <span className={classes.booking_message}>{bookingMessage}</span>
                    <MainStyleBtn isDisabled={buttonDisabler} onClick={() => setDateChosen(true)}>Подтвердить</MainStyleBtn>
                </div>
            </div>
        </div>
    )
}

export default BookingDateModal;