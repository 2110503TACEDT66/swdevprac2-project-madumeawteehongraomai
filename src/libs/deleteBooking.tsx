export default async function deleteBooking(id:string , token:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/interviews/${id}`,{
        method: "DELETE",
        headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
    })
    const data = await response.json()
    console.log(data)
    if(!response.ok){
        throw new Error("Failed to fetch delete booking")

    }
    return data

}