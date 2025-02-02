"use client"
import { AuthProvider } from "@/context/authContext"
import authService from "@/appwrite/auth"
import { useEffect, useState } from "react"


const PageLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [authStatus, setAuthStatus] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [loader, setLoader] = useState<boolean>(true);

    useEffect(() => {
        authService.isLoggedIn()
            .then(setAuthStatus)
            .finally(() => setLoader(false));

            authService.getCurrentUser()
            .then((user)=> {
               if(!user){
                 return <div>User Does not Exists</div>
               }else{
                setName(user.name)
                setEmail(user.email)
               }
            }).finally(()=> setLoader(false))
    }, []);
    return <AuthProvider value={{ authStatus, setAuthStatus, name, email, setEmail, setName }}>
        {
            loader ? (<div className="h-screen w-screen flex justify-center items-center"><div className="loader h-50 w-50"></div></div>) : (<>{children}</>)
        }
    </AuthProvider>
}

export default PageLayout;