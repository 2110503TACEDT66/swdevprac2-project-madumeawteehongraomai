export default async function userRegister(userName:string,userTel:string,userEmail:string,userPassword:string,userRole:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/register`,
    {
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            name:userName,
            tel: userTel,
            email: userEmail,
            password: userPassword ,
            role: userRole
            
        }),
    })
    if(!response.ok){
        throw new Error("Failed to log-in")
    }
    return await response.json()
}