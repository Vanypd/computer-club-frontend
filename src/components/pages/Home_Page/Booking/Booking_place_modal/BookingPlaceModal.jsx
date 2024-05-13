import MainStyleBtn from '@UI/button/main_style_button/MainStyleBtn'
import APIService from '@src/API/APIService'
import CookieManager from '@src/cookie/CookieManager'
import { useEffect, useState } from 'react'
import classes from './BookingPlaceModal.module.css'
import BookingPlaceSelector from './Booking_place_selector/BookingPlaceSelector'

const BookingPlaceModal = ({ selectedRoom, selectedDate, selectedCell, selectedPlace, setSelectedPlace, isDateChosen, setDateChosen, isBookFinished, setBookIsFinished }) => {

    const [dayPlacesList, setDayPlacesList] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])

    const [buttonDisabler, setButtonDisabler] = useState(true);
    const [bookingMessage, setBookingMessage] = useState('');


    useEffect(() => {

        const getPlacesList = () => {
            // const date = selectedDate + 'T' + selectedCell + ':00'

            // ТУТ ПЕРЕДЕЛАТЬ ЛОГИКУ!!!
            // БЫЛО: fetch(GET_BOOKING_PLACES_URL + selectedDate + '/' + selectedRoom + '/' + date)

            APIService.booking.getPlaces(selectedDate, selectedRoom)
                .then((result) => {
                    console.log(result)
                    const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

                    for (let i = 0; i < result.length; i++) {
                        let elementOf = result[i];
                        const pcId = elementOf.pcId

                        array[pcId - 1] = 1
                    }

                    setDayPlacesList(array)
                })
                .catch((error) => {
                    console.log(error)
                })
        }

        if (selectedRoom !== 'none' &&
            selectedCell !== '' &&
            selectedDate !== '') {
            getPlacesList()
        }

    }, [selectedCell, selectedDate, selectedRoom])


    const book = () => {
        setButtonDisabler(true)
        let selectedPC = selectedPlace
        if (selectedPlace === '1PS') { selectedPC = 17 }
        if (selectedPlace === '2PS') { selectedPC = 18 }

        const appointmentFullDate = selectedDate + 'T' + selectedCell + ':00'

        const newOrderData = {
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

        APIService.booking.postOrder(newOrderData)
            .then((result) => {

                if (result.status === 500) {
                    setBookingMessage('Что-то пошло не так STATUS:500')
                    return;
                }

                if (result.data.error && result.data.error === 'Unauthorized') {
                    setBookingMessage('Авторизуйтесь чтобы продолжить')
                    return;
                }

                if (result.status !== 200) {
                    setBookingMessage('Что-то пошло не так...')
                    return;
                }

                setBookIsFinished(true)
                return result.data;
            })
            .catch(function (error) {
                console.log('error: ', error);
            })
    }


    useEffect(() => {
        if (selectedPlace !== '') {
            setButtonDisabler(false)
        }
    }, [selectedPlace])


    useEffect(() => {
        let form = document.getElementById('Booking_place')

        setTimeout(() => {
            if (isDateChosen) {
                form.classList.add(classes.container_active)
            }
        }, 700)

        if (!isDateChosen) {
            form.classList.remove(classes.container_active)
        }
    }, [isDateChosen])


    return (
        <div id="Booking_place" className={classes.container}>

            {(isBookFinished === true)

                ? <div className={classes.booking_finished}>
                    <div className={classes.booking_finished_info}>Успешное бронирование {selectedRoom} комнаты</div>
                    <div className={classes.booking_finished_info}>На {selectedDate} в {selectedCell}</div>
                    <div className={classes.booking_finished_info}>Ваше место {selectedPlace}</div>
                </div>

                : <div className={classes.booking_form}>
                    <a href='/#' className={classes.back_button} onClick={() => setDateChosen(false)}>
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