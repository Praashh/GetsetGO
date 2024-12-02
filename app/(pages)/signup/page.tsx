"use client";
import SignupWrapper from "@/components/landing/SignupWrapper";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";
import React from "react";

const SignupPage = () => {
    const router = useRouter();
    const { authStatus, name } = useAuth();

    // if (authStatus) {
    //     alert("already logged in!")
    //     router.replace(`/profile/${name}`);
    //     return <></>;
    // }

    return (
        <section className="flex justify-center items-center  border-2 min-h-screen">
            <SignupWrapper />
        </section>
    )
}

export default SignupPage;