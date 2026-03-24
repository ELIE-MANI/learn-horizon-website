export async function submitBooking(data) {
 const controller = new AbortController()
 const timeout =setTimeout(() => {
    controller.abort()
 },8000)  
    try {
 const response = await fetch ("/api/bookings", {
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify(data),

    signal:controller.signal
 })   
    clearTimeout(timeout)
    const result = await response.json()
    if (!response.ok){
        throw new Error(result.error || "Booking failed")
    }

    return result
}catch(error){
    console.error(error);
    throw new Error("Network error")
    
}
}