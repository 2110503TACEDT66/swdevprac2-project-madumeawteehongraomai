export default async function createBooking(cid:string, jid:string, date:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/companies/${cid}/${jid}/interviews/`,{
        method: "POST",
        body: JSON.stringify({
            intvDate: date
        }),
    })
    if(!response.ok){
        throw new Error("Failed to fetch create booking")

    }

    return await response.json()

}