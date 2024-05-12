import { GET_BOOKING_ORDER_URL } from "src/MAIN";
import MainStyleBtn from "UI/button/main_style_button/MainStyleBtn";
import BookingCalendar from "UI/calendar/booking_calendar/BookingCalendar";
import BookingSelector from "UI/selector/Booking_selector/BookingSelector";
import RoomSelector from "UI/selector/Room_selector/RoomSelector";
import { useEffect, useRef, useState } from "react";
import classes from './BookingDateModal.module.css';

const BookingDateModal = ({selectedRoom, setSelectedRoom, selectedCell, setSelectedCell, selectedDate, setSelectedDate, dateChosen: isDateChosen, setDateChosen, scrollPos }) => {

    const [dayList, setDayList] = useState([])
    const bookingDateRef = useRef(null);

    const [isDateModalActive, setDateModalActive] = useState(false);
    const [isDateDisabled, setDateDisabled] = useState(true);
    const [isTimeCellsDisabled, setTimeCellsDisabled] = useState(true);
    const [isButtonDisabled, setButtonDisabled] = useState(true);
    const [bookingMessage, setBookingMessage] = useState('');


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
    
                        setDayList(array)
                    },
                    (error) => {
                        console.log(error)
                        setBookingMessage(error)
                    }
                )
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
            bookingDateRef.classList.remove(classes.container_active)
        }

        setTimeout(() => {
            if (isDateModalActive && !isDateChosen) {
                bookingDateRef.classList.add(classes.container_active)
            }
        }, 700)

    }, [isDateChosen, isDateModalActive])


    const activeBookingChecker = () => {
        let bookingScrollPosition = 1650;

        if (isDateModalActive === false) {
            if (scrollPos > bookingScrollPosition) {
                if (bookingDateRef.classList.contains(classes.container_active)) {
                    return
                } else {
                    bookingDateRef.classList.add(classes.container_active)
                    setDateModalActive(true)
                }
            }
        }
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