import React, { useEffect, useState } from 'react';
import { getPaymentIntent } from '../../api/bookings';

const CheckoutForm = ({bookingData}) => {
    const [clientSecret, setClientSecret] = useState('')
    console.log(bookingData);

    useEffect(() => {
        getPaymentIntent(bookingData?.totalPrice).then(data => { 
            console.log(data);
            setClientSecret(data.clientSecret)
        })


    },[bookingData?.totalPrice])

    console.log(clientSecret);
    console.log(bookingData.totalPrice);

    return (
        <div>
            {

            }
            
        </div>
    );
};

export default CheckoutForm;