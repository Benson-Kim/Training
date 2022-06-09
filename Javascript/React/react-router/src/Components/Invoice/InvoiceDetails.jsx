import React from 'react'
import { useParams } from 'react-router-dom'

const InvoiceDetails = () => {
    const parms = useParams();
    let invoiceId = parms.invoiceId
    
    return (
        <div>
            <h5>Invoice Details</h5>
            <div className="details">
                
            </div>
        </div>
    )
}

export default InvoiceDetails