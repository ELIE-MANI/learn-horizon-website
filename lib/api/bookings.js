export async function submitBooking(data) {
 const response = await fetch ("/api/bookings", {
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify(data)
 })   
    if (!response.ok){
        throw new Error("Booking failed")
    }

    return response.json()
}