"use client"
import { AuthProvider } from "@/context/authContext"
import authService from "@/appwrite/auth"
import { useEffect, useState } from "react";
import Navbar from "@/components/landing/Navbar";
import IDE from "@/components/ui/editor";

export default function Home() {
  const [authStatus, setAuthStatus] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    authService.isLoggedIn()
      .then(setAuthStatus)
      .finally(() => setLoader(false));

    authService.getCurrentUser()
      .then((user) => {
        if (!user) {
          return <>User Does not Exists</>
        } else {
          setName(user.name)
          setEmail(user.email)
        }
      }).finally(() => setLoader(false))
  }, []);
  return (
    <AuthProvider value={{ authStatus, setAuthStatus, email, name, setEmail, setName }}>
      <Navbar name = {name} loader={loader}/>
          <div className="flex justify-between ">
            <div>hi</div>
            <div className="w-1/2  right-0 h-screen">
            <IDE/>
            </div>
          </div>
    </AuthProvider>
  )
}