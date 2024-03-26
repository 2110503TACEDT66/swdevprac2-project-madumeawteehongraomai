export default async function createBooking({cid, pid, date}:{cid:string, pid:string, date:Date}) {
    const response = await fetch(`http://localhost:5000/api/v1/companies/${cid}/${pid}/interviews/`,{
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