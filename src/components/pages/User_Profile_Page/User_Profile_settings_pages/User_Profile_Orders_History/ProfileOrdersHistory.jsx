import { useCallback, useEffect, useState } from 'react'
import { CookieManager, GET_ORDERSLIST_BY_USER } from 'src/MAIN'
import SortSelector from 'UI/selector/Sort_selector/SortSelector'
import OrdersHistoryItem from './Orders_history_item/OrdersHistoryItem'
import classes from './ProfileOrdersHistory.module.css'

const ProfileOrdersHistory = ({ user }) => {

    const [sortValue, setSortValue] = useState('по дате')
    const [ordersHistoryItems, setOrdersHistoryItems] = useState([])
    const [sortedItems, setSortedItems] = useState([])

    const testItems = [
        {
            id: 228,
            appointmentFullDate: '2023-05-08T05:00:00',
            roomId: 0,
            pcId: 12,
        },
        {
            id: 1337,
            appointmentFullDate: '2023-05-09T22:00:00',
            roomId: 0,
            pcId: 17,
        },
        {
            id: 1488,
            appointmentFullDate: '2023-05-09T12:00:00',
            roomId: 0,
            pcId: 3,
        },
    ]


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
        fetch(GET_ORDERSLIST_BY_USER + CookieManager.getCookie('userid'))
            .then(response => response.json())
            .then(
                (result) => {
                    setOrdersHistoryItems(result);
                },
                (error) => {
                    console.log('error: ' + error)
                }
            )
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