"use client";
import { AuthProvider } from "@/context/authContext";
import authService from "@/appwrite/auth";
import { useEffect, useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/ui/hero";

export default function Home() {
  const [authStatus, setAuthStatus] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    authService
      .isLoggedIn()
      .then(setAuthStatus)
      .finally(() => setLoader(false));

    authService
      .getCurrentUser()
      .then((user) => {
        if (user) {
          setName(user.name);
          setEmail(user.email);
        }
      })
      .finally(() => setLoader(false));
  }, []);

  return (
    <AuthProvider
      value={{ authStatus, setAuthStatus, email, name, setEmail, setName }}
    >
      <div className="min-h-screen bg-gradient-to-b from-white to-[#fce7f3] dark:from-black dark:to-[#1a1a1a]">
        <Navbar name={name} loader={loader} />
        <main className="flex justify-center items-center min-h-[calc(100vh-5rem)]">
          <Hero />
        </main>
      </div>
    </AuthProvider>
  );
}