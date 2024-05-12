import classes from './OrdersHistoryItem.module.css'

const OrdersHistoryItem = ({ id, date, roomid, pcid }) => {

    const activeChecker = () => {
        const orderFullDate = new Date(date)
        const nowFullDate = Date.now()

        if (orderFullDate > nowFullDate) { return true }
        else { return false }

    }

    const getFormattedDate = () => {
        const dateObject = new Date(date)
        const yyyy = dateObject.getFullYear()
        const mm = (dateObject.getMonth() >= 10) ? dateObject.getMonth() : '0' + dateObject.getMonth()
        const dd = (dateObject.getDate() >= 10) ? dateObject.getDate() : '0' + dateObject.getDate()

        return dd + '.' + mm + '.' + yyyy
    }

    const getFormattedTime = () => {
        const dateObject = new Date(date)
        const hours = (dateObject.getHours() >= 10) ? dateObject.getHours() : '0' + dateObject.getHours()
        const minutes = (dateObject.getMinutes() >= 10) ? dateObject.getMinutes() : '0' + dateObject.getMinutes()

        return hours + ':' + minutes
    }

    const getRoomName = () => {
        switch (roomid) {
            case 0: return 'Стандарт';
            case 1: return 'VIP';
            case 2: return 'Old Style';
            default: return;
        }
    }


    return (
        <div className={activeChecker() ? classes.orders_history_item : [classes.orders_history_item, classes.orders_history_item_disabled].join(' ')}>
            <span className={classes.orders_history_id}>id: <span>{id}</span></span>
            <div className={classes.orders_history_info_box}>
                <div className={classes.orders_history_info_box_top}>
                    <span className={classes.orders_history_date}>Дата:</span>
                    <span className={classes.orders_history_time}>Время:</span>
                    <span className={classes.orders_history_room}>Зал:</span>
                    <span className={classes.orders_history_pc}>Номер PC:</span>
                </div>
                <div className={classes.orders_history_info_box_bottom}>
                    <span className={classes.orders_history_date_text}>{getFormattedDate()}</span>
                    <span className={classes.orders_history_time_text}>{getFormattedTime()}</span>
                    <span className={classes.orders_history_room_text}>{getRoomName()}</span>
                    <span className={classes.orders_history_pc_text}>{pcid}</span>
                </div>


            </div>
        </div>
    )
}

export default OrdersHistoryItem