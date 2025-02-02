import authService from '@/appwrite/auth'
import React from 'react'
import Image from 'next/image'
import { Button } from './button'
import { Github } from 'lucide-react'

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
            <Button variant='outline' onClick={handleGoogleClick} className='text-black flex items-center justify-center gap-1'>{"Sign Up With Google"} <Github width={30} height={30} /></Button>
            <Button variant='outline' onClick={handleGithubClick} className='text-black flex items-center justify-center gap-1'>{"Sign Up With GitHub"} <Github width={30} height={30} /></Button>
        </div>
    )
}

export default OAuth
