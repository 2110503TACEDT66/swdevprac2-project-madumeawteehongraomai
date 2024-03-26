export default async function deleteBooking({id}:{id:string}) {
    const response = await fetch(`http://localhost:5000/api/v1/interviews/${id}`,{
        method: "DELETE",
    })
    if(!response.ok){
        throw new Error("Failed to fetch delete booking")

    }

    return await response.json()

}