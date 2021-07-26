import React, { useState } from 'react'
import moment from 'moment-jalaali'
import DatePicker from 'react-datepicker2';


function Datee() {
    const [value, setValue] = useState(moment('1396/7/6', 'jYYYY/jM/jD'))
    console.log(value.format('jYYYY/jM/jD'))

    //today
    // console.log(  moment().format('jYYYY/jM/jD'))

    return (
        <DatePicker
            onChange={p => setValue(p)}
            value={value}
            persianDigits={false}
            isGregorian={false}
            timePicker={false}
        />
    )
}

export default Datee



