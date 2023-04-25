import React, { useState } from "react";
import { useEffect } from "react";
import { CookieManager, GET_BOOKING_ORDER_URL, POST_BOOKING_ORDER_URL } from "../../../../../../MAIN";
import MainStyleBtn from "../../../../../UI/button/main_style_button/MainStyleBtn";
import BookingCalendar from "../../../../../UI/calendar/booking_calendar/BookingCalendar";
import BookingSelector from "../../../../../UI/selector/Booking_selector/BookingSelector";
import classes from './BookingDateModal.module.css'

const BookingDateModal = ({ scrollPos }) => {

    const [selectedCell, setSelectedCell] = useState(''); // EXAMPLE: '13:00'
    const [selectedDate, setSelectedDate] = useState(''); // EXAMPLE: '2023-04-12'

    const [bookingMessage, setBookingMessage] = useState('');
    const [buttonDisabler, setButtonDisabler] = useState(true);
    const [timeCellsDisabler, setTimeCellsDisabler] = useState(true);
    const [dayList, setDayList] = useState([])

    const [bookIsFinished, setBookIsFinished] = useState(false);




    useEffect(() => {

        const getDayList = () => {

            fetch(GET_BOOKING_ORDER_URL + selectedDate)
                .then(response => response.json())
                .then(
                    (result) => {

                        const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

                        for (let i = 0; i < result.length; i++) {
                            let elementOf = result[i];
                            // console.log(result)

                            let fullDate = elementOf.appointmentFullDate

                            let date = new Date(fullDate)

                            // let cell = date.getHours() - (date.getTimezoneOffset() / 60)
                            let cell = date.getHours()

                            array[cell] = 1;

                        }

                        setDayList(array)
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

    const book = () => {

        setButtonDisabler(true)

        const date = new Date(selectedDate + ' ' + selectedCell)
        const ISOdate = date.toISOString();

        const userArray = {
            id: 0,
            appointmentFullDate: ISOdate,
            appointmentDay: selectedDate,
            appointmentPeriod: 0,
            user: {
                id: CookieManager.getCookie('userid'),
                name: "string",
                email: "string",
                login: "string",
                phone: "string",
                password: "string",
                roleId: 0

            }
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + CookieManager.getCookie('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userArray)
        }

        fetch(POST_BOOKING_ORDER_URL, requestOptions)
            .then(function (response) {
                console.log(response)

                if (response.ok) {
                    setBookIsFinished(true)
                    setTimeCellsDisabler(true)
                }

                return response.json();
            })
            .then(function (data) {
                console.log(data)

                let responseCode = data.error;
                let responseStatus = data.status

                // if (responseCode == 'Unauthorized') {
                //     setBookingMessage('Авторизуйтесь чтобы продолжить')
                // }
                if (responseStatus == 500) {
                    setBookingMessage('Авторизуйтесь чтобы продолжить')
                }
            })
            .catch(function (error) {
                console.log('error ', error);

            })



    }

    const activeBookingChecker = () => {
        let form = document.getElementById('Booking')

        let checker = async () => {
            if (form.classList.contains(classes.container_active)) {
                return
            } else {
                form.classList.add(classes.container_active)
            }
        }

        if (scrollPos > 1650) {
            checker()
        }
    }

    const [qweqwe, setqweqwe] = useState('')

    return (
        <section className={classes.section}>
            <div className={classes.tape_top} ></div>

            <div id="Booking" onScroll={activeBookingChecker()} className={classes.container}>

                {(bookIsFinished == true)
                    ? <div className={classes.booking_finished}>
                        <div className={classes.booking_finished_info}>Успешное бронирование</div>
                        <div className={classes.booking_finished_info}>На {selectedDate} в {selectedCell}</div>
                    </div>

                    : <div className={classes.booking_form}>
                        <div className={classes.container_top}>
                            <BookingCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                        </div>
                        <div className={classes.container_mid}>
                            <BookingSelector dayList={dayList} isDisabled={timeCellsDisabler} selectedCell={selectedCell} setSelectedCell={setSelectedCell} />
                        </div>
                        <div className={classes.container_bot}>
                            <span className={classes.booking_message}>{bookingMessage}</span>
                            <MainStyleBtn isDisabled={buttonDisabler} onClick={book}>Забронировать</MainStyleBtn>
                        </div>
                    </div>
                }





            </div>

            <div className={classes.tape_bot} ></div>
        </section>

    )
}

export default BookingDateModal;