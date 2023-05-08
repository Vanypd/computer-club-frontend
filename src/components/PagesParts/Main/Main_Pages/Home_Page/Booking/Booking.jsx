import React, { useState } from "react";
import { useEffect } from "react";
import classes from './Booking.module.css'
import BookingDateModal from "./Booking_date_modal/BookingDateModal";
import BookingPlaceModal from "./Booking_place_modal/BookingPlaceModal";

const Booking = ({ scrollPos }) => {
    const [selectedRoom, setSelectedRoom] = useState('none'); // EXAMPLE: 1
    const [selectedCell, setSelectedCell] = useState(''); // EXAMPLE: '13:00'
    const [selectedDate, setSelectedDate] = useState(''); // EXAMPLE: '2023-04-12'
    const [selectedPlace, setSelectedPlace] = useState('') // EXAMPLE: 3

    const [dateChosen, setDateChosen] = useState(false);

    const [bookIsFinished, setBookIsFinished] = useState(false);

    return (
        <section className={classes.section}>
            <div className={classes.tape_top} ></div>

            <div className={classes.booking_modals}>
                <BookingPlaceModal
                    selectedRoom={selectedRoom}
                    setSelectedRoom={setSelectedRoom}
                    selectedCell={selectedCell}
                    selectedDate={selectedDate}
                    selectedPlace={selectedPlace}
                    setSelectedPlace={setSelectedPlace}
                    dateChosen={dateChosen}
                    setDateChosen={setDateChosen}
                    bookIsFinished={bookIsFinished}
                    setBookIsFinished={setBookIsFinished} />

                <BookingDateModal
                    selectedRoom={selectedRoom}
                    setSelectedRoom={setSelectedRoom}
                    selectedCell={selectedCell}
                    setSelectedCell={setSelectedCell}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    dateChosen={dateChosen}
                    setDateChosen={setDateChosen}
                    scrollPos={scrollPos} />

            </div>


            <div className={classes.tape_bot} ></div>
        </section>

    )
}

export default Booking;