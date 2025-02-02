"use client";
import { AuthProvider } from "@/context/authContext";
import authService from "@/appwrite/auth";
import { useEffect, useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/ui/hero";
import WhyUS from "@/components/landing/WhyUs";
import FAQS from "@/components/ui/faqs";
import FeatureShowcase from "@/components/ui/features";

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
      <div className="min-h-screen bg-white">
        <Navbar name={name} loader={loader} />
        <Hero />
        <div
        className="px-20 overflow-x-hidden">
          <FeatureShowcase/>
          <WhyUS/>
          <FAQS/>
        </div>
      </div>
    </AuthProvider>
  );
}