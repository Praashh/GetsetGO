import React from 'react'
import SignUp from '../ui/SignUp'
import OAuth from '../ui/OAuth'
import Link from 'next/link'
import AuthMessage from '../ui/AuthMessage'

const SignupWrapper = () => {
    return (
        <div className="px-4 py-7 md:px-10 md:py-10 flex flex-col md:flex-row items-center border-2 border-gray-500 w-full md:w-[70%] h-2/3  custom-border-radius">
            <section className="flex flex-col gap-5 items-center w-full md:w-[70%]">
                <h1 className='text-3xl font-bold'>Hello!</h1>
                <AuthMessage message="create your account" />
                <div className='w-full md:w-1/2'>
                    <SignUp />
                </div>
                <span>OR</span>
                <OAuth />
                <span>Already have an Account? <Link href={"/login"} className="text-[#1F64FF]">LOGIN</Link></span>
            </section>
            <section className='hidden md:block'>
                <div>
                    <svg width="1" height="604" viewBox="0 0 1 604" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="603.1" x2="0.5" stroke="#AAB2C8" stroke-opacity="0.45" />
                    </svg>
                </div>
            </section>
        </div>
    )
}

export default SignupWrapper
