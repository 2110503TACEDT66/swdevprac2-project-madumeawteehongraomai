export default async function getBooking(token:string):Promise<BookingJson> {
    const response = await fetch(`http://localhost:5000/api/v1/interviews`,{
        method: "GET",
        headers:{
            authorization: `Bearer ${token}`,
        },
    })
    if(!response.ok){
        throw new Error("Failed to fetch create booking")

    }

    return await response.json()

}