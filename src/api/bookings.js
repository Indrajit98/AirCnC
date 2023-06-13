
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