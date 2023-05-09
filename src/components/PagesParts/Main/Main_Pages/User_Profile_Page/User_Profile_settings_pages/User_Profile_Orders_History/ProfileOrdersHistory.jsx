import React, { useEffect, useState } from 'react'
import classes from './ProfileOrdersHistory.module.css'
import OrdersHistoryItem from './Orders_history_item/OrdersHistoryItem'
import { CookieManager, GET_ORDERSLIST_BY_USER } from '../../../../../../../MAIN'
import SortSelector from '../../../../../../UI/selector/Sort_selector/SortSelector'

const ProfileOrdersHistory = ({ user }) => {

    const [ordersHistoryItems, setOrdersHistoryItems] = useState([
        {
            id: 15,
            appointmentFullDate: '2023-05-08T05:00:00',
            roomId: 0,
            pcId: 12,
        },

        {
            id: 12,
            appointmentFullDate: '2023-05-09T22:00:00',
            roomId: 0,
            pcId: 17,
        },

        {
            id: 21,
            appointmentFullDate: '2023-05-09T12:00:00',
            roomId: 0,
            pcId: 3,
        },
    ])

    useEffect(() => {

        fetch(GET_ORDERSLIST_BY_USER + CookieManager.getCookie('userid'))
            .then(response => response.json())
            .then(
                (result) => {
                    setOrdersHistoryItems(result);
                    console.log(result)
                },
                (error) => {
                    console.log('error: ' + error)
                }
            )
    }, [])

    return (
        <div className={classes.profile_nav_pages}>
            <div className={classes.order_history_sort_menu}>
                <div className={classes.order_history_sort_selector_box}>
                    <SortSelector
                        options={[
                            { name: 'по id' },
                            { name: 'по дате' },
                            { name: 'по времени' }
                        ]}
                    />
                </div>
            </div>

            <div className={classes.order_history_items_box}>
                {
                    ordersHistoryItems.map(item =>
                        <OrdersHistoryItem id={item.id} date={item.appointmentFullDate} roomid={item.roomId} pcid={item.pcId} />
                    )
                }
            </div>

        </div>
    )
}

export default ProfileOrdersHistory