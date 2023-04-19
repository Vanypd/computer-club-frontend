import React, { useState } from "react";
import { useEffect } from "react";
import BoxCellButton from "../../button/box_cell_button/BoxCellButton";
import classes from './BookingSelector.module.css'

const BookingSelector = ({dayList, isDisabled, selectedCell, setSelectedCell, ...props}) => {

    return (

        <div className={isDisabled ? [classes.box, classes.box_disabled].join(' ') : classes.box}>
            <BoxCellButton booked={dayList[0]} selectedCell={selectedCell} setSelectedCell={setSelectedCell}>00:00</BoxCellButton>
            <BoxCellButton booked={dayList[1]} selectedCell={selectedCell} setSelectedCell={setSelectedCell}>01:00</BoxCellButton>
            <BoxCellButton booked={dayList[2]} selectedCell={selectedCell} setSelectedCell={setSelectedCell}>02:00</BoxCellButton>
            <BoxCellButton booked={dayList[3]} selectedCell={selectedCell} setSelectedCell={setSelectedCell}>03:00</BoxCellButton>
            <BoxCellButton booked={dayList[4]} selectedCell={selectedCell} setSelectedCell={setSelectedCell}>04:00</BoxCellButton>
            <BoxCellButton booked={dayList[5]} selectedCell={selectedCell} setSelectedCell={setSelectedCell}>05:00</BoxCellButton>
            
            <BoxCellButton booked={dayList[6]} selectedCell={selectedCell} setSelectedCell={setSelectedCell}>06:00</BoxCellButton>
            <BoxCellButton booked={dayList[7]} selectedCell={selectedCell} setSelectedCell={setSelectedCell}>07:00</BoxCellButton>
            <BoxCellButton booked={dayList[8]} selectedCell={selectedCell} setSelectedCell={setSelectedCell}>08:00</BoxCellButton>
            <BoxCellButton booked={dayList[9]} selectedCell={selectedCell} setSelectedCell={setSelectedCell}>09:00</BoxCellButton>
            <BoxCellButton booked={dayList[10]} selectedCell={selectedCell} setSelectedCell={setSelectedCell}>10:00</BoxCellButton>
            <BoxCellButton booked={dayList[11]} selectedCell={selectedCell} setSelectedCell={setSelectedCell}>11:00</BoxCellButton>
            
            <BoxCellButton booked={dayList[12]} selectedCell={selectedCell} setSelectedCell={setSelectedCell}>12:00</BoxCellButton>
            <BoxCellButton booked={dayList[13]} selectedCell={selectedCell} setSelectedCell={setSelectedCell}>13:00</BoxCellButton>
            <BoxCellButton booked={dayList[14]} selectedCell={selectedCell} setSelectedCell={setSelectedCell}>14:00</BoxCellButton>
            <BoxCellButton booked={dayList[15]} selectedCell={selectedCell} setSelectedCell={setSelectedCell}>15:00</BoxCellButton>
            <BoxCellButton booked={dayList[16]} selectedCell={selectedCell} setSelectedCell={setSelectedCell}>16:00</BoxCellButton>
            <BoxCellButton booked={dayList[17]} selectedCell={selectedCell} setSelectedCell={setSelectedCell}>17:00</BoxCellButton>
            
            <BoxCellButton booked={dayList[18]} selectedCell={selectedCell} setSelectedCell={setSelectedCell}>18:00</BoxCellButton>
            <BoxCellButton booked={dayList[19]} selectedCell={selectedCell} setSelectedCell={setSelectedCell}>19:00</BoxCellButton>
            <BoxCellButton booked={dayList[20]} selectedCell={selectedCell} setSelectedCell={setSelectedCell}>20:00</BoxCellButton>
            <BoxCellButton booked={dayList[21]} selectedCell={selectedCell} setSelectedCell={setSelectedCell}>21:00</BoxCellButton>
            <BoxCellButton booked={dayList[22]} selectedCell={selectedCell} setSelectedCell={setSelectedCell}>22:00</BoxCellButton>
            <BoxCellButton booked={dayList[23]} selectedCell={selectedCell} setSelectedCell={setSelectedCell}>23:00</BoxCellButton>
            


            
        </div>

    )
}

export default BookingSelector;