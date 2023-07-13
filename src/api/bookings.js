
export const saveBooking = async (bookingData) =>{
     const url = `${process.env.REACT_APP_API_URL}/bookings`
     const response = await fetch(url,{
        method: "POST",
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(bookingData)
     });
     const data= await response.json();
     return data;

}

export const getBookings = async email => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/bookings?email=${email}`,
    //   {
    //     method: 'GET',
    //     headers: {
    //       'content-type': 'application/json',
    //       authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
    //     },
    //   }
    )
    const bookings = await response.json()
    return bookings
  }
  // Delete a booking 

  export const deleteBooking = async (id) => {

    const url = `${process.env.REACT_APP_API_URL}/booking/${id}`
    const response = await fetch(url,{
       method: "DELETE",
       headers: {
           'content-type': 'application/json',
       }
    });
    const data= await response.json();
    return data;

  }
// Create payment intent 
export const getPaymentIntent = async price => {
  // const url = `${process.env.REACT_APP_API_URL}/create-payment-intent`
    const response = await fetch(`${process.env.REACT_APP_API_URL}/create-payment-intent`,
    {
       method: "POST",
       headers: {
           'content-type': 'application/json',
       },
      //  body: JSON.stringify({ price })
      body: JSON.stringify({price})
    });
    const data= await response.json();
    return data;

}



// Get all bookings for user
export const getAllBookingsByEmail = async (email) =>{
    const url = `${process.env.REACT_APP_API_URL}/bookings?email=${email}`
    const response = await fetch(url);
    const data= await response.json();
    return data;

}

// get all booking for admin 
export const getAllBookings = async () =>{
    const url = `${process.env.REACT_APP_API_URL}/bookings`
    const response = await fetch(url);
    const data= await response.json();
    return data;

}