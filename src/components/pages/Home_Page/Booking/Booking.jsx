import { useState } from "react";
import classes from './Booking.module.css';
import BookingDateModal from "./Booking_date_modal/BookingDateModal";
import BookingPlaceModal from "./Booking_place_modal/BookingPlaceModal";

const Booking = ({ scrollPos }) => {
    const [selectedRoom, setSelectedRoom] = useState('none'); // EXAMPLE: 1
    const [selectedCell, setSelectedCell] = useState(''); // EXAMPLE: '13:00'
    const [selectedDate, setSelectedDate] = useState(''); // EXAMPLE: '2023-04-12'
    const [selectedPlace, setSelectedPlace] = useState('') // EXAMPLE: 3

    const [isDateChosen, setDateChosen] = useState(false);
    const [isBookFinished, setBookIsFinished] = useState(false);

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
                    isDateChosen={isDateChosen}
                    setDateChosen={setDateChosen}
                    isBookFinished={isBookFinished}
                    setBookIsFinished={setBookIsFinished} />

                <BookingDateModal
                    selectedRoom={selectedRoom}
                    setSelectedRoom={setSelectedRoom}
                    selectedCell={selectedCell}
                    setSelectedCell={setSelectedCell}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    isDateChosen={isDateChosen}
                    setDateChosen={setDateChosen}
                    scrollPos={scrollPos} />
            </div>

            <div className={classes.tape_bot} ></div>
        </section>

    )
}

export default Booking;