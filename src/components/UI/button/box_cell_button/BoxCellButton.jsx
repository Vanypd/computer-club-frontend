import React, { useState } from "react";
import classes from './BoxCellButton.module.css'

const BoxCellButton = ({ booked, selectedCell, setSelectedCell, children, ...props }) => {

    const classSelector = () => {
        if (booked) {
            return [classes.box_cell, classes.booked].join(' ')
        } else if (selectedCell == children) {
            return [classes.box_cell, classes.box_cell_active].join(' ')
        } else {
            return classes.box_cell
        }
    }

    const chooseCell = () => {
        setSelectedCell(children)
    }

    return (
        <div className={classSelector()}>
            <button
                className={classes.box_cell_button}
                onClick={chooseCell}
            >
                {children}
            </button>
        </div>
    )
}

export default BoxCellButton;