import React from 'react'
import SignUp from '../ui/SignUp'
import OAuth from '../ui/OAuth'
import Link from 'next/link'
import AuthMessage from '../ui/AuthMessage'

const SignupWrapper = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-1">
                <SignUp />
                <div className="text-center text-gray-600">OR</div>
                <OAuth />
                <div className="text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link href="/login" className="text-indigo-600 hover:text-indigo-500">
                        Log in
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignupWrapper