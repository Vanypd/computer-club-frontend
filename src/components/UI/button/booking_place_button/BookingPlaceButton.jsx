import React from 'react'
import classes from './BookingPlaceButton.module.css'

const BookingPlaceButton = ({ isPS, textSide, svgSide, booked, selectedPlace, setSelectedPlace, children, ...props }) => {

    const ClassSelector = (variable) => {

        switch (variable) {
            case 'isPS':
                if (booked) {
                    return [classes.box_PS_button, classes.booked].join(' ')
                } else if (selectedPlace === children) {
                    return [classes.box_PS_button, classes.box_PS_button_active].join(' ')
                } else {
                    return classes.box_PS_button
                }

            case 'notPS':
                if (booked) {
                    return [classes.box_place_button, classes.booked].join(' ')
                } else if (selectedPlace === children) {
                    return [classes.box_place_button, classes.box_place_button_active].join(' ')
                } else {
                    return classes.box_place_button
                }

            case 'svgSide': switch (svgSide) {
                case 'top': return classes.place_svg_top
                case 'right': return classes.place_svg_right
                case 'bottom': return classes.place_svg_bottom
                case 'left': return classes.place_svg_left
                default: return classes.place_svg_right
            }

            case 'svgPSSide': switch (svgSide) {
                case 'top': return classes.place_PS_svg_top
                case 'right': return classes.place_PS_svg_right
                case 'bottom': return classes.place_PS_svg_bottom
                case 'left': return classes.place_PS_svg_left
                default: return classes.place_PS_svg_bottom
            }

            case 'textSide': switch (textSide) {
                case 'top': return classes.btn_text_top
                case 'right': return classes.btn_text_right
                case 'bottom': return classes.btn_text_bottom
                case 'left': return classes.btn_text_left
                default: return classes.btn_text_bottom
            }

            default: return;
        }
    }

    const choosePlace = () => {
        setSelectedPlace(children)
    }

    return ((isPS === true)

        ? < div className={classes.place_box} >
            <svg className={ClassSelector('svgPSSide')} width="120" height="50" viewBox="0 0 120 50" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_115_973)">
                    <path d="M3.83475 49.8755L116.108 49.8755C118.198 49.8755 119.893 48.2018 119.893 46.1372V6.88483C119.893 4.82022 118.198 3.14651 116.108 3.14651L3.83475 3.14651C1.74464 3.14651 0.0502625 4.82022 0.0502625 6.88483V46.1372C0.0502625 48.2018 1.74464 49.8755 3.83475 49.8755Z" />
                    <path opacity="0.5" d="M3.83475 49.8755L116.108 49.8755C118.198 49.8755 119.893 48.2018 119.893 46.1372V6.88483C119.893 4.82022 118.198 3.14651 116.108 3.14651L3.83475 3.14651C1.74464 3.14651 0.0502625 4.82022 0.0502625 6.88483V46.1372C0.0502625 48.2018 1.74464 49.8755 3.83475 49.8755Z" fill="black" />
                    <path d="M3.22943 49.9253L116.771 49.9253C117.6 49.9254 118.397 49.6023 118.987 49.0261C119.578 48.4499 119.914 47.6671 119.924 46.8474V4.11221C119.924 3.04143 119.494 2.0145 118.727 1.25735C117.961 0.500191 116.921 0.0748291 115.837 0.0748291H115.774C114.691 0.0764809 113.653 0.502571 112.888 1.25955C112.123 2.01653 111.693 3.04251 111.693 4.11221V37.7571C111.691 38.8268 111.26 39.8521 110.494 40.6079C109.727 41.3637 108.689 41.7882 107.606 41.7882L12.3627 41.7882C11.2803 41.7882 10.2423 41.3635 9.47702 40.6075C8.71169 39.8515 8.28174 38.8262 8.28174 37.7571V4.11221C8.28174 3.04143 7.85111 2.0145 7.0846 1.25735C6.3181 0.500191 5.27848 0.0748291 4.19447 0.0748291C3.11047 0.0748291 2.07086 0.500191 1.30435 1.25735C0.537842 2.0145 0.107224 3.04143 0.107224 4.11221V46.8474C0.117073 47.6618 0.449379 48.4399 1.03296 49.0152C1.61655 49.5905 2.40499 49.9172 3.22943 49.9253Z" stroke="black" strokeWidth="0.25" strokeMiterlimit="10" />
                </g>
                <defs>
                    <clipPath id="clip0_115_973">
                        <rect width="120" height="50" fill="white" transform="matrix(-1 0 0 -1 120 50)" />
                    </clipPath>
                </defs>
            </svg>

            <button
                className={ClassSelector('isPS')}
                onClick={choosePlace}
            >
                <div className={ClassSelector('textSide')}>
                    {children}
                </div>
            </button>
        </div>

        : < div className={classes.place_box} >
            <svg className={ClassSelector('svgSide')} width="17" height="20" viewBox="0 0 17 20" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_115_884)">
                    <path d="M0.182617 18.8262L0.182617 1.17371L4.67553 1.17371C7.28094 1.17719 9.77831 2.10863 11.6192 3.76349C13.4602 5.41835 14.4942 7.66135 14.4942 9.99994C14.4942 12.3385 13.4602 14.5815 11.6192 16.2364C9.77831 17.8913 7.28094 18.8227 4.67553 18.8262L0.182617 18.8262Z" stroke="black" strokeWidth="0.5" strokeMiterlimit="10" />
                    <path opacity="0.5" d="M0.160645 16.3081L0.160645 3.69171L4.09103 3.69171C5.01395 3.69171 5.92783 3.85488 6.7805 4.1719C7.63317 4.48891 8.40792 4.95357 9.06053 5.53934C9.71313 6.12511 10.2308 6.82052 10.584 7.58587C10.9372 8.35121 11.119 9.1715 11.119 9.99991C11.119 11.6729 10.3785 13.2775 9.06053 14.4605C7.74253 15.6435 5.95495 16.3081 4.09103 16.3081L0.160645 16.3081Z" fill="black" />
                    <path d="M6.9184 19.8361C7.53975 19.8361 8.04346 19.384 8.04346 18.8262C8.04346 18.2685 7.53975 17.8164 6.9184 17.8164L2.42549 17.8164C1.80414 17.8164 1.30044 18.2685 1.30044 18.8262C1.30044 19.384 1.80414 19.8361 2.42549 19.8361L6.9184 19.8361Z" stroke="black" strokeWidth="0.5" strokeMiterlimit="10" />
                    <path d="M6.9184 2.18349C7.53975 2.18349 8.04346 1.73137 8.04346 1.17365C8.04346 0.615937 7.53975 0.163818 6.9184 0.163818L2.42549 0.163818C1.80414 0.163818 1.30044 0.615937 1.30044 1.17365C1.30044 1.73137 1.80414 2.18349 2.42549 2.18349L6.9184 2.18349Z" stroke="black" strokeWidth="0.5" strokeMiterlimit="10" />
                    <path d="M12.6167 9.88848C12.6167 6.55734 10.7319 4.70815 9.43878 2.77373C9.3658 2.59702 9.3239 2.41119 9.31459 2.22291C9.34104 1.79495 9.55466 1.39366 9.90899 1.10632C10.2633 0.818977 10.7297 0.668813 11.2067 0.688483C11.4718 0.687713 11.7346 0.732221 11.9811 0.81963C13.4753 1.92323 14.6824 3.30684 15.5179 4.87345C16.3533 6.44006 16.7968 8.15174 16.8174 9.88848C16.7949 11.642 16.3412 13.3694 15.4888 14.9473C14.6364 16.5252 13.4062 17.9147 11.8861 19.0164C11.6678 19.0851 11.4381 19.1206 11.2067 19.1213C10.7285 19.1409 10.2611 18.9898 9.90653 18.7011C9.552 18.4124 9.33918 18.0094 9.31459 17.5803C9.30662 17.3137 9.39364 17.0518 9.56298 16.8327C10.8195 15.3049 12.6167 13.6196 12.6167 9.88848Z" stroke="black" strokeWidth="0.5" strokeMiterlimit="10" />
                    <path opacity="0.5" d="M14.3701 9.87551V9.37059C14.0779 7.35092 13.3473 4.53124 10.4251 2.74108C10.1905 2.66582 9.94368 2.62594 9.69457 2.62305C9.61421 2.62305 9.53385 2.62305 9.45349 2.62305L9.51924 2.82633C10.8123 4.79354 12.7118 6.60337 12.7264 9.94108C12.7264 13.6722 10.9 15.3575 9.64343 16.8985C9.57811 16.9786 9.52641 17.067 9.49001 17.1608C9.55815 17.1641 9.62644 17.1641 9.69457 17.1608C9.9195 17.1601 10.1432 17.1314 10.3594 17.0755C13.3473 15.3116 14.3701 12.6493 14.3701 9.87551Z" fill="black" />
                </g>
                <defs>
                    <clipPath id="clip0_115_884">
                        <rect width="20" height="17" fill="white" transform="matrix(0 1 -1 0 17 0)" />
                    </clipPath>
                </defs>
            </svg>
            <button
                className={ClassSelector('notPS')}
                onClick={choosePlace}
            >
                <div className={ClassSelector('textSide')}>
                    {children}
                </div>
            </button>
        </div >
    )
}

export default BookingPlaceButton