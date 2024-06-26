import MainStyleBtn from "@UI/button/main_style_button/MainStyleBtn";
import BookingCalendar from "@UI/calendar/booking_calendar/BookingCalendar";
import BookingSelector from "@UI/selector/Booking_selector/BookingSelector";
import RoomSelector from "@UI/selector/Room_selector/RoomSelector";
import { useEffect, useRef, useState } from "react";
import classes from './BookingDateModal.module.css';
import APIService from "@src/API/APIService";

const BookingDateModal = ({ selectedRoom, setSelectedRoom, selectedCell, setSelectedCell, selectedDate, setSelectedDate, isDateChosen, setDateChosen, scrollPos }) => {

    const [dayList, setDayList] = useState([])
    const bookingDateRef = useRef(null);

    const [isDateModalActive, setDateModalActive] = useState(false);
    const [isDateDisabled, setDateDisabled] = useState(true);
    const [isTimeCellsDisabled, setTimeCellsDisabled] = useState(true);
    const [isButtonDisabled, setButtonDisabled] = useState(true);
    const [bookingMessage, setBookingMessage] = useState('');

    useEffect(() => {

        const getDayList = () => {
            APIService.booking.getOrder(selectedDate)
                .then((result) => {
                    const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    
                    for (let i = 0; i < result.length; i++) {
                        let elementOf = result[i];
                        console.log(result)
    
                        let fullDate = elementOf.appointmentFullDate
                        let date = new Date(fullDate)
                        let cell = date.getHours()
                        array[cell] = 1;
                    }
    
                    setDayList(array)
                })
                .catch((error) => {
                    console.log(error)
                    setBookingMessage(error.message)
                })
        }

        if (selectedRoom !== 'none') {
            setDateDisabled(false)
        }

        if (selectedDate !== '') {
            getDayList()
            setTimeCellsDisabled(false)
        }

        if (selectedCell !== '' && selectedDate !== '') {
            setButtonDisabled(false)
        }

    }, [selectedCell, selectedDate, selectedRoom]);


    useEffect(() => {

        if (isDateChosen) {
            bookingDateRef.current.classList.remove(classes.container_active)
        }

        if (isDateModalActive && !isDateChosen) {
            bookingDateRef.current.classList.add(classes.container_active)
        }

    }, [isDateChosen, isDateModalActive])


    const activeBookingChecker = () => {
        let bookingScrollPosition = 1650;

        if (isDateModalActive) {
            return;
        }

        if (scrollPos < bookingScrollPosition) {
            return;
        }

        if (bookingDateRef.current.classList.contains(classes.container_active)) {
            return;
        }

        bookingDateRef.current.classList.add(classes.container_active)
        setDateModalActive(true)
    }


    return (
        <div id="Booking_date" ref={bookingDateRef} onScroll={activeBookingChecker()} className={classes.container}>
            <div className={classes.booking_form}>
                <div className={classes.container_top}>
                    <RoomSelector selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />
                    <BookingCalendar isDisabled={isDateDisabled} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                </div>
                <div className={classes.container_mid}>
                    <BookingSelector dayList={dayList} isDisabled={isTimeCellsDisabled} selectedCell={selectedCell} setSelectedCell={setSelectedCell} />
                </div>
                <div className={classes.container_bot}>
                    <span className={classes.booking_message}>{bookingMessage}</span>
                    <MainStyleBtn isDisabled={isButtonDisabled} onClick={() => setDateChosen(true)}>Подтвердить</MainStyleBtn>
                </div>
            </div>
        </div>
    )
}

export default BookingDateModal;