export default async function deleteBooking(id:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/interviews/${id}`,{
        method: "DELETE",
    })
    if(!response.ok){
        throw new Error("Failed to fetch delete booking")

    }

    return await response.json()

}