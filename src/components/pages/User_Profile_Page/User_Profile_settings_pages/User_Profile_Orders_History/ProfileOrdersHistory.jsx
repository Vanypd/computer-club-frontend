import { useCallback, useEffect, useState } from 'react'
import SortSelector from '@UI/selector/Sort_selector/SortSelector'
import OrdersHistoryItem from './Orders_history_item/OrdersHistoryItem'
import classes from './ProfileOrdersHistory.module.css'
import CookieManager from '@src/cookie/CookieManager'
import APIService from '@src/API/APIService'

const ProfileOrdersHistory = () => {

    const [sortValue, setSortValue] = useState('по дате')
    const [ordersHistoryItems, setOrdersHistoryItems] = useState([])
    const [sortedItems, setSortedItems] = useState([])

    const sortOrdersHistory = useCallback((sort) => {
        setSortValue(sort)
        let sortType = ''

        if (sort === 'по id') { sortType = 'id' }
        if (sort === 'по дате') { sortType = 'appointmentFullDate' }
        if (sort === 'по номеру PC') { sortType = 'pcId' }


        const sorter = (a, b) => {
            if (typeof a[sortType] == "string") {
                return (b[sortType].localeCompare(a[sortType]))
            } else {
                return (a[sortType] - b[sortType])
            }
        }

        console.log('sorted')

        setSortedItems([...ordersHistoryItems].sort((a, b) => sorter(a, b)))
    }, [ordersHistoryItems])


    useEffect(() => {
        APIService.booking.getUserOrderlist(CookieManager.getCookie('userid'))
            .then((result) => {
                setOrdersHistoryItems(result);
            })
            .catch((error) => {
                console.log('error: ' + error)
            })
    }, [])


    useEffect(() => {
        if (ordersHistoryItems.length !== 0) {
            sortOrdersHistory('по дате');
        }
    }, [ordersHistoryItems, sortOrdersHistory])


    return (
        <div className={classes.profile_nav_pages}>
            <div className={classes.order_history_sort_menu}>
                <div className={classes.order_history_sort_selector_box}>
                    <SortSelector
                        value={sortValue}
                        setSort={sortOrdersHistory}
                        options={[
                            { name: 'по дате' },
                            { name: 'по id' },
                            { name: 'по номеру PC' }
                        ]}
                    />
                </div>
            </div>

            <div className={classes.order_history_items_box}>
                {
                    (sortedItems.length !== 0)
                        ? sortedItems.map(item =>
                            <OrdersHistoryItem key={item.id} id={item.id} date={item.appointmentFullDate} roomid={item.roomId} pcid={item.pcId} />
                        )
                        : <div className={classes.order_history_empty}>{'Вы не делали ещё ни одного заказа :('}</div>
                }
            </div>

        </div>
    )
}

export default ProfileOrdersHistory