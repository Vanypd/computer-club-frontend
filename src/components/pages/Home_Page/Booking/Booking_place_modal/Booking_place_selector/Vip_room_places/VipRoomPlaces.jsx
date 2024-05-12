import React from 'react'
import classes from './VipRoomPlaces.module.css'
import BookingPlaceButton from 'UI/button/booking_place_button/BookingPlaceButton'

const VipRoomPlaces = ({ dayPlacesList, selectedPlace, setSelectedPlace }) => {
    return (
        <div className={classes.box}>
            <svg className={classes.walls_svg} width="340" height="340" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_115_538" fill="white">
                    <path fillRule="evenodd" clipRule="evenodd" d="M152 0H340V240H320V20H152V155H142V20H20V320H142V185H152V320H320V290H340V340H152H142H0V0H142H152Z" />
                </mask>
                <path fillRule="evenodd" clipRule="evenodd" d="M152 0H340V240H320V20H152V155H142V20H20V320H142V185H152V320H320V290H340V340H152H142H0V0H142H152Z" fill="#1E1E1E" />
                <path className={classes.walls_path} d="M340 0H341V-1H340V0ZM340 240V241H341V240H340ZM320 240H319V241H320V240ZM320 20H321V19H320V20ZM152 20V19H151V20H152ZM152 155V156H153V155H152ZM142 155H141V156H142V155ZM142 20H143V19H142V20ZM20 20V19H19V20H20ZM20 320H19V321H20V320ZM142 320V321H143V320H142ZM142 185V184H141V185H142ZM152 185H153V184H152V185ZM152 320H151V321H152V320ZM320 320V321H321V320H320ZM320 290V289H319V290H320ZM340 290H341V289H340V290ZM340 340V341H341V340H340ZM0 340H-1V341H0V340ZM0 0V-1H-1V0H0ZM340 -1H152V1H340V-1ZM341 240V0H339V240H341ZM320 241H340V239H320V241ZM319 20V240H321V20H319ZM152 21H320V19H152V21ZM153 155V20H151V155H153ZM142 156H152V154H142V156ZM141 20V155H143V20H141ZM20 21H142V19H20V21ZM21 320V20H19V320H21ZM142 319H20V321H142V319ZM141 185V320H143V185H141ZM152 184H142V186H152V184ZM153 320V185H151V320H153ZM320 319H152V321H320V319ZM319 290V320H321V290H319ZM340 289H320V291H340V289ZM341 340V290H339V340H341ZM152 341H340V339H152V341ZM142 341H152V339H142V341ZM0 341H142V339H0V341ZM-1 0V340H1V0H-1ZM142 -1H0V1H142V-1ZM152 -1H142V1H152V-1Z" mask="url(#path-1-inside-1_115_538)" />
            </svg>

            <div className={classes.room}>
                <svg className={classes.room_dynamic_1} width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_115_1082)">
                        <path opacity="0.75" d="M14.5487 12.1268L14.5484 12.1267L14.5464 12.1366C14.4639 12.5616 13.9258 12.7234 13.5736 12.373L5.42529 4.22472C5.0743 3.87374 5.24114 3.33118 5.66121 3.25227L5.6613 3.25273L5.67173 3.24982L10.5479 1.88926L10.5795 1.88045L10.6026 1.85725L11.6124 0.847503C11.8251 0.634849 12.1689 0.566765 12.5773 0.660482C12.9836 0.753739 13.434 1.00458 13.826 1.39661L16.4019 3.97252C16.794 4.36455 17.0448 4.81495 17.1381 5.22128C17.2318 5.62961 17.1637 5.97351 16.9511 6.18616L15.9413 7.19591L15.9181 7.2191L15.9093 7.2507L14.5487 12.1268Z" stroke="#009245" strokeWidth="0.25" />
                        <g opacity="0.75">
                            <path d="M10.8975 15.6857C11.0376 15.6806 11.1723 15.6214 11.2732 15.5205C11.3742 15.4195 11.4334 15.2848 11.4385 15.1447C11.4404 15.0751 11.4284 15.0063 11.4033 14.9423C11.3782 14.8784 11.3403 14.8206 11.292 14.7723C11.2437 14.724 11.1859 14.6861 11.122 14.661C11.058 14.6359 10.9892 14.6239 10.9196 14.6259C9.88161 14.6522 8.85651 14.4721 7.90378 14.0962C6.95105 13.7203 6.08968 13.1559 5.36963 12.4358C4.64959 11.7158 4.08521 10.8544 3.70926 9.90168C3.33332 8.94896 3.15328 7.92386 3.1796 6.88587C3.18154 6.81624 3.1696 6.74744 3.14446 6.68349C3.11932 6.61954 3.0815 6.56172 3.03319 6.51342C2.98489 6.46511 2.92707 6.42729 2.86313 6.40215C2.79918 6.37701 2.73037 6.36507 2.66074 6.36701C2.52064 6.37041 2.38528 6.42808 2.28322 6.52786C2.18116 6.62763 2.12037 6.76172 2.11367 6.90182C2.083 8.08003 2.28677 9.24375 2.71313 10.3253C3.1395 11.4069 3.77995 12.3848 4.59726 13.2021C5.41457 14.0194 6.39243 14.6598 7.47401 15.0862C8.55559 15.5126 9.71931 15.7163 10.8975 15.6857Z" />
                            <path d="M10.9388 13.7055C11.0801 13.7016 11.2163 13.6424 11.318 13.5406C11.4198 13.4388 11.479 13.3027 11.4829 13.1614C11.4849 13.0917 11.4729 13.0229 11.4478 12.959C11.4227 12.895 11.3848 12.8372 11.3365 12.7889C11.2882 12.7406 11.2304 12.7028 11.1665 12.6777C11.1025 12.6525 11.0337 12.6406 10.9641 12.6425C10.1852 12.6624 9.41597 12.5274 8.70104 12.2454C7.98612 11.9634 7.33974 11.5399 6.79944 10.9996C6.25914 10.4593 5.83568 9.81294 5.55365 9.09801C5.27162 8.38308 5.13663 7.61385 5.15653 6.83498C5.15848 6.76534 5.14653 6.69654 5.12139 6.63259C5.09626 6.56864 5.05843 6.51083 5.01013 6.46252C4.96182 6.41422 4.90401 6.37639 4.84006 6.35125C4.77611 6.32612 4.70731 6.31417 4.63767 6.31612C4.49712 6.32255 4.36259 6.38374 4.26295 6.48657C4.16023 6.58576 4.09935 6.72006 4.09356 6.86024C4.07017 7.77826 4.22932 8.68492 4.56176 9.52756C4.89421 10.3702 5.39334 11.1321 6.03017 11.7689C6.667 12.4057 7.42885 12.9048 8.2715 13.2373C9.11414 13.5697 10.0208 13.7289 10.9388 13.7055Z" />
                            <path d="M10.9814 11.7201C11.1229 11.7169 11.2596 11.6579 11.3615 11.556C11.4634 11.454 11.5224 11.3174 11.5256 11.1759C11.5275 11.1063 11.5156 11.0375 11.4904 10.9735C11.4653 10.9096 11.4275 10.8518 11.3792 10.8035C11.3309 10.7552 11.273 10.7173 11.2091 10.6922C11.1451 10.6671 11.0763 10.6551 11.0067 10.6571C10.4869 10.6708 9.97343 10.581 9.49621 10.3929C9.01899 10.2049 8.58753 9.92234 8.22694 9.56174C7.86634 9.20115 7.5838 8.76969 7.39576 8.29247C7.20772 7.81525 7.11793 7.3018 7.13161 6.78197C7.13355 6.71234 7.12161 6.64354 7.09647 6.57959C7.07133 6.51564 7.03351 6.45782 6.9852 6.40952C6.9369 6.36121 6.87908 6.32339 6.81513 6.29825C6.75118 6.27311 6.68238 6.26117 6.61275 6.26311C6.47114 6.26588 6.3343 6.32474 6.23228 6.42676C6.13026 6.52878 6.0714 6.66562 6.06863 6.80723C6.05106 7.46633 6.16474 8.11739 6.40306 8.7225C6.64138 9.32762 6.99956 9.87471 7.45677 10.3319C7.91397 10.7891 8.46106 11.1473 9.06618 11.3856C9.67129 11.6239 10.3224 11.7376 10.9814 11.7201Z" />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_115_1082">
                            <rect width="15" height="13" fill="white" transform="translate(19.7988 7.19238) rotate(135)" />
                        </clipPath>
                    </defs>
                </svg>

                <svg className={classes.room_dynamic_2} width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_115_1082)">
                        <path opacity="0.75" d="M14.5487 12.1268L14.5484 12.1267L14.5464 12.1366C14.4639 12.5616 13.9258 12.7234 13.5736 12.373L5.42529 4.22472C5.0743 3.87374 5.24114 3.33118 5.66121 3.25227L5.6613 3.25273L5.67173 3.24982L10.5479 1.88926L10.5795 1.88045L10.6026 1.85725L11.6124 0.847503C11.8251 0.634849 12.1689 0.566765 12.5773 0.660482C12.9836 0.753739 13.434 1.00458 13.826 1.39661L16.4019 3.97252C16.794 4.36455 17.0448 4.81495 17.1381 5.22128C17.2318 5.62961 17.1637 5.97351 16.9511 6.18616L15.9413 7.19591L15.9181 7.2191L15.9093 7.2507L14.5487 12.1268Z" stroke="#009245" strokeWidth="0.25" />
                        <g opacity="0.75">
                            <path d="M10.8975 15.6857C11.0376 15.6806 11.1723 15.6214 11.2732 15.5205C11.3742 15.4195 11.4334 15.2848 11.4385 15.1447C11.4404 15.0751 11.4284 15.0063 11.4033 14.9423C11.3782 14.8784 11.3403 14.8206 11.292 14.7723C11.2437 14.724 11.1859 14.6861 11.122 14.661C11.058 14.6359 10.9892 14.6239 10.9196 14.6259C9.88161 14.6522 8.85651 14.4721 7.90378 14.0962C6.95105 13.7203 6.08968 13.1559 5.36963 12.4358C4.64959 11.7158 4.08521 10.8544 3.70926 9.90168C3.33332 8.94896 3.15328 7.92386 3.1796 6.88587C3.18154 6.81624 3.1696 6.74744 3.14446 6.68349C3.11932 6.61954 3.0815 6.56172 3.03319 6.51342C2.98489 6.46511 2.92707 6.42729 2.86313 6.40215C2.79918 6.37701 2.73037 6.36507 2.66074 6.36701C2.52064 6.37041 2.38528 6.42808 2.28322 6.52786C2.18116 6.62763 2.12037 6.76172 2.11367 6.90182C2.083 8.08003 2.28677 9.24375 2.71313 10.3253C3.1395 11.4069 3.77995 12.3848 4.59726 13.2021C5.41457 14.0194 6.39243 14.6598 7.47401 15.0862C8.55559 15.5126 9.71931 15.7163 10.8975 15.6857Z" />
                            <path d="M10.9388 13.7055C11.0801 13.7016 11.2163 13.6424 11.318 13.5406C11.4198 13.4388 11.479 13.3027 11.4829 13.1614C11.4849 13.0917 11.4729 13.0229 11.4478 12.959C11.4227 12.895 11.3848 12.8372 11.3365 12.7889C11.2882 12.7406 11.2304 12.7028 11.1665 12.6777C11.1025 12.6525 11.0337 12.6406 10.9641 12.6425C10.1852 12.6624 9.41597 12.5274 8.70104 12.2454C7.98612 11.9634 7.33974 11.5399 6.79944 10.9996C6.25914 10.4593 5.83568 9.81294 5.55365 9.09801C5.27162 8.38308 5.13663 7.61385 5.15653 6.83498C5.15848 6.76534 5.14653 6.69654 5.12139 6.63259C5.09626 6.56864 5.05843 6.51083 5.01013 6.46252C4.96182 6.41422 4.90401 6.37639 4.84006 6.35125C4.77611 6.32612 4.70731 6.31417 4.63767 6.31612C4.49712 6.32255 4.36259 6.38374 4.26295 6.48657C4.16023 6.58576 4.09935 6.72006 4.09356 6.86024C4.07017 7.77826 4.22932 8.68492 4.56176 9.52756C4.89421 10.3702 5.39334 11.1321 6.03017 11.7689C6.667 12.4057 7.42885 12.9048 8.2715 13.2373C9.11414 13.5697 10.0208 13.7289 10.9388 13.7055Z" />
                            <path d="M10.9814 11.7201C11.1229 11.7169 11.2596 11.6579 11.3615 11.556C11.4634 11.454 11.5224 11.3174 11.5256 11.1759C11.5275 11.1063 11.5156 11.0375 11.4904 10.9735C11.4653 10.9096 11.4275 10.8518 11.3792 10.8035C11.3309 10.7552 11.273 10.7173 11.2091 10.6922C11.1451 10.6671 11.0763 10.6551 11.0067 10.6571C10.4869 10.6708 9.97343 10.581 9.49621 10.3929C9.01899 10.2049 8.58753 9.92234 8.22694 9.56174C7.86634 9.20115 7.5838 8.76969 7.39576 8.29247C7.20772 7.81525 7.11793 7.3018 7.13161 6.78197C7.13355 6.71234 7.12161 6.64354 7.09647 6.57959C7.07133 6.51564 7.03351 6.45782 6.9852 6.40952C6.9369 6.36121 6.87908 6.32339 6.81513 6.29825C6.75118 6.27311 6.68238 6.26117 6.61275 6.26311C6.47114 6.26588 6.3343 6.32474 6.23228 6.42676C6.13026 6.52878 6.0714 6.66562 6.06863 6.80723C6.05106 7.46633 6.16474 8.11739 6.40306 8.7225C6.64138 9.32762 6.99956 9.87471 7.45677 10.3319C7.91397 10.7891 8.46106 11.1473 9.06618 11.3856C9.67129 11.6239 10.3224 11.7376 10.9814 11.7201Z" />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_115_1082">
                            <rect width="15" height="13" fill="white" transform="translate(19.7988 7.19238)" />
                        </clipPath>
                    </defs>
                </svg>

                <svg className={classes.room_TV_1} width="100" height="7" viewBox="0 0 100 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_115_982)">
                        <path d="M0.136719 6.95791L5.02339 3.53491L95.0001 3.54541L99.8634 6.95791H0.136719Z" fill="#808080" />
                        <path d="M94.9733 3.5875L99.7233 6.9125H0.276667L5.02667 3.5875H94.9733ZM95 3.5H5L0 7H100L95 3.5Z" fill="black" />
                        <path d="M75.5 3.5H25.5L28 0L73 0L75.5 3.5Z" fill="#1E1E1E" />
                    </g>
                    <defs>
                        <clipPath id="clip0_115_982">
                            <rect width="100" height="7" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                <svg className={classes.room_TV_2} width="100" height="7" viewBox="0 0 100 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_115_982)">
                        <path d="M0.136719 6.95791L5.02339 3.53491L95.0001 3.54541L99.8634 6.95791H0.136719Z" fill="#808080" />
                        <path d="M94.9733 3.5875L99.7233 6.9125H0.276667L5.02667 3.5875H94.9733ZM95 3.5H5L0 7H100L95 3.5Z" fill="black" />
                        <path d="M75.5 3.5H25.5L28 0L73 0L75.5 3.5Z" fill="#1E1E1E" />
                    </g>
                    <defs>
                        <clipPath id="clip0_115_982">
                            <rect width="100" height="7" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                <div className={classes.plant_1}></div>
                <div className={classes.plant_2}></div>

                <div className={classes.places_div_1}>
                    <BookingPlaceButton svgSide={'right'} isPS={false} booked={dayPlacesList[0]} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace}>1</BookingPlaceButton>
                    <BookingPlaceButton svgSide={'right'} isPS={false} booked={dayPlacesList[1]} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace}>2</BookingPlaceButton>
                    <BookingPlaceButton svgSide={'right'} isPS={false} booked={dayPlacesList[2]} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace}>3</BookingPlaceButton>
                    <BookingPlaceButton svgSide={'right'} isPS={false} booked={dayPlacesList[3]} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace}>4</BookingPlaceButton>
                </div>

                <div className={classes.places_div_2}>
                    <BookingPlaceButton svgSide={'left'} isPS={false} booked={dayPlacesList[4]} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace}>5</BookingPlaceButton>
                    <BookingPlaceButton svgSide={'left'} isPS={false} booked={dayPlacesList[5]} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace}>6</BookingPlaceButton>
                    <BookingPlaceButton svgSide={'left'} isPS={false} booked={dayPlacesList[6]} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace}>7</BookingPlaceButton>
                    <BookingPlaceButton svgSide={'left'} isPS={false} booked={dayPlacesList[7]} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace}>8</BookingPlaceButton>
                </div>

                <div className={classes.places_div_3}>
                    <BookingPlaceButton svgSide={'right'} isPS={false} booked={dayPlacesList[8]} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace}>9</BookingPlaceButton>
                    <BookingPlaceButton svgSide={'right'} isPS={false} booked={dayPlacesList[9]} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace}>10</BookingPlaceButton>
                    <BookingPlaceButton svgSide={'right'} isPS={false} booked={dayPlacesList[10]} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace}>11</BookingPlaceButton>
                    <BookingPlaceButton svgSide={'right'} isPS={false} booked={dayPlacesList[11]} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace}>12</BookingPlaceButton>
                </div>

                <div className={classes.places_div_4}>
                    <BookingPlaceButton svgSide={'left'} isPS={false} booked={dayPlacesList[12]} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace}>13</BookingPlaceButton>
                    <BookingPlaceButton svgSide={'left'} isPS={false} booked={dayPlacesList[13]} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace}>14</BookingPlaceButton>
                    <BookingPlaceButton svgSide={'left'} isPS={false} booked={dayPlacesList[14]} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace}>15</BookingPlaceButton>
                    <BookingPlaceButton svgSide={'left'} isPS={false} booked={dayPlacesList[15]} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace}>16</BookingPlaceButton>
                </div>

                <div className={classes.PS_div_1}>
                    <BookingPlaceButton svgSide={'bottom'} isPS={true} booked={dayPlacesList[16]} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace}>1PS</BookingPlaceButton>
                </div>

                <div className={classes.PS_div_2}>
                    <BookingPlaceButton svgSide={'top'} isPS={true} booked={dayPlacesList[17]} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace}>2PS</BookingPlaceButton>
                </div>



            </div>
        </div>
    )
}

export default VipRoomPlaces