import React, { useState } from 'react'
import classes from './BookingPlaceSelector.module.css'
import VipRoomPlaces from './Vip_room_places/VipRoomPlaces'

const BookingPlaceSelector = ({ dayPlacesList, selectedPlace, setSelectedPlace }) => {


    return (
        <VipRoomPlaces dayPlacesList={dayPlacesList} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />
    )
}

export default BookingPlaceSelector;