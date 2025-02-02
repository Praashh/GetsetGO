"use client";
import SignupWrapper from "@/components/landing/SignupWrapper";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";
import React from "react";

const SignupPage = () => {
    const router = useRouter();
    const { authStatus, name } = useAuth();

    if (authStatus) {
        alert("already logged in!")
        router.replace(`/dashboard}`);
        return <></>;
    }

    return (
        <SignupWrapper />
    )
}

export default SignupPage;