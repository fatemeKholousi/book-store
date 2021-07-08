import React from 'react'
import { useHistory } from 'react-router-dom'

function NotFound() {
    let history=useHistory()
    console.log(history);
    return (
        <div>
            <h1>404 Error</h1>
            <strong>{history.location.pathname}&nbsp; is not found</strong>
        </div>
    )
}

export default NotFound
