import React from 'react'
import Bg from '../img/footer2.png'
function Footer() {

    return (
        <div style={{
            clear: 'both',
            position: 'relative',
            height: '300px',
            marginTop: '150px',
        }}>
            <div
                style={{
                    backgroundImage: `url(${Bg})`,
                    backgroundColor: 'rgba( 255, 252, 238 ,0.7)',
                    height: '300px',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',/* Resize the background image to cover the entire container */

                }}
            >
                <h3 style={{ marginRight: '30%', paddingTop: '100px' }}>
                    مرداد هزار و چهارصد
                    E-mail:     Fatemekholousizaer@gmail.com
                </h3>

            </div>
        </div>
    )
}

export default Footer
