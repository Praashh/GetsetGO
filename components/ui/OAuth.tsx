import authService from '@/appwrite/auth'
import { Button } from '@mui/material'
import React from 'react'
import GitHubIcon from "@/public/github_git_icon_145985.png"
import GoogleIcon from "@/public/google_icon-icons.com_62736.png"
import Image from 'next/image'

const OAuth = () => {
    async function handleGithubClick() {
        try {
            const newUser = await authService.signinUsingGithub();
            console.log(newUser);
            newUser && alert("USer created successfully");
        } catch (error) {
            alert("not created using Github OAuth");
        }
    }
    async function handleGoogleClick() {
        try {
            const newUser = await authService.signinUsingGoogle();
            console.log(newUser);
            newUser && alert("USer created successfully");
        } catch (error) {
            alert("not created using Github OAuth");
        }
    }
    return (
        <div className='flex flex-wrap items-center justify-center gap-4 w-full'>
            <Button variant='outlined' onClick={handleGoogleClick} className='text-black flex items-center justify-center gap-1'>{"Sign Up With Google"} <Image src={GoogleIcon} alt='Github Icon' width={30} height={30} /></Button>
            <Button variant='outlined' onClick={handleGithubClick} className='text-black flex items-center justify-center gap-1'>{"Sign Up With GitHub"} <Image src={GitHubIcon} alt='Github Icon' width={30} height={30} /></Button>
        </div>
    )
}

export default OAuth
