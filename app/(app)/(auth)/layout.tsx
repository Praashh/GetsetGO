"use client"
import { AuthProvider } from "@/context/authContext"
import authService from "@/appwrite/auth"
import { useEffect, useState } from "react"
import CustomLoader from "@/components/ui/loader"


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
            loader ? (<CustomLoader/>) : (<>{children}</>)
        }
    </AuthProvider>
}

export default PageLayout;