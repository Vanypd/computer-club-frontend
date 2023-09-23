import React, { useEffect, useState } from 'react'
import classes from './BookingPlaceModal.module.css'
import BookingPlaceSelector from './Booking_place_selector/BookingPlaceSelector'
import MainStyleBtn from '../../../../../../UI/button/main_style_button/MainStyleBtn'
import { CookieManager, GET_BOOKING_PLACES_URL, POST_BOOKING_ORDER_URL } from '../../../../../../../MAIN'

const BookingPlaceModal = ({ selectedRoom, selectedDate, selectedCell, selectedPlace, setSelectedPlace, dateChosen, setDateChosen, bookIsFinished, setBookIsFinished }) => {

    const [dayPlacesList, setDayPlacesList] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])

    const [buttonDisabler, setButtonDisabler] = useState(true);
    const [bookingMessage, setBookingMessage] = useState('');

    useEffect(() => {

        const getPlacesList = () => {
            const date = selectedDate + 'T' + selectedCell + ':00'

            fetch(GET_BOOKING_PLACES_URL + selectedDate + '/' + selectedRoom + '/' + date)
                .then(response => response.json())
                .then(
                    (result) => {
                        console.log(result)
                        const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

                        for (let i = 0; i < result.length; i++) {
                            let elementOf = result[i];
                            const pcId = elementOf.pcId

                            array[pcId - 1] = 1
                        }

                        setDayPlacesList(array)
                    },
                    (error) => {
                        console.log(error)
                    }
                )
        }


        if (selectedRoom != 'none' &&
            selectedCell != '' &&
            selectedDate != '') {
            getPlacesList()
        }

    }, [selectedCell])

    const book = () => {
        setButtonDisabler(true)
        let selectedPC = selectedPlace
        if (selectedPlace = '1PS') {selectedPC = 17}
        if (selectedPlace = '2PS') {selectedPC = 18}

        const appointmentFullDate = selectedDate + 'T' + selectedCell + ':00'

        const userArray = {
            id: 0,
            appointmentFullDate: appointmentFullDate,
            appointmentDay: selectedDate,
            roomId: selectedRoom,
            pcId: selectedPC,
            user: {
                id: parseInt(CookieManager.getCookie('userid'), 10),
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

                if (response.ok) {
                    setBookIsFinished(true)
                }

                return response.json();
            })
            .then(function (data) {

                let responseCode = data.error;
                let responseStatus = data.status

                if (responseStatus == 500) {
                    setBookingMessage('Что-то пошло не так STATUS:500')
                    console.log(data)
                } else {
                    if (responseCode == 'Unauthorized') {
                        setBookingMessage('Авторизуйтесь чтобы продолжить')
                    }
                    setBookingMessage('Что-то пошло не так...')
                }
            })
            .catch(function (error) {
                console.log('error ', error);

            })
    }

    useEffect(() => {
        if (selectedPlace != '') {
            setButtonDisabler(false)
        }
    }, [selectedPlace])

    useEffect(() => {
        let form = document.getElementById('Booking_place')

        setTimeout(() => {
            if (dateChosen) {
                form.classList.add(classes.container_active)
            }
        }, 700)

        if (!dateChosen) {
            form.classList.remove(classes.container_active)
        }
    }, [dateChosen])

    return (
        <div id="Booking_place" className={classes.container}>

            {(bookIsFinished == true)

                ? <div className={classes.booking_finished}>
                    <div className={classes.booking_finished_info}>Успешное бронирование {selectedRoom} комнаты</div>
                    <div className={classes.booking_finished_info}>На {selectedDate} в {selectedCell}</div>
                    <div className={classes.booking_finished_info}>Ваше место {selectedPlace}</div>
                </div>

                : <div className={classes.booking_form}>
                    <a className={classes.back_button} onClick={() => setDateChosen(false)}>
                        <svg width="30px" height="30px" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z" />
                        </svg>
                        <span className={classes.back_button_text}>Назад</span>
                    </a>
                    <BookingPlaceSelector selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} dayPlacesList={dayPlacesList} />
                    <div className={classes.container_bot}>
                        <div className={classes.booking_message_div}>
                            <span className={classes.booking_message}>{bookingMessage}</span>
                        </div>
                        <MainStyleBtn styles={{ marginBottom: '0' }} isDisabled={buttonDisabler} onClick={book}>Забронировать</MainStyleBtn>
                    </div>
                </div>
            }
        </div>
    )
}

export default BookingPlaceModal