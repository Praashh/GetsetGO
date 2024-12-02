import React from 'react'

type Props = {
    message: string;
}
const AuthMessage = ({ message }: Props) => {
    return (
        <>
            <div className='md:flex hidden items-center'><svg width="150" height="1" viewBox="0 0 150 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="150" y2="0.5" stroke="#AAB2C8" stroke-opacity="0.45" />
                <line y1="0.5" x2="150" y2="0.5" stroke="#AAB2C8" stroke-opacity="0.45" />
                <line y1="0.5" x2="150" y2="0.5" stroke="#AAB2C8" stroke-opacity="0.45" />
                <line y1="0.5" x2="150" y2="0.5" stroke="#AAB2C8" stroke-opacity="0.45" />
            </svg>
                <span>{message}</span>
                <svg width="150" height="1" viewBox="0 0 150 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="150" y2="0.5" stroke="#AAB2C8" stroke-opacity="0.45" />
                    <line y1="0.5" x2="150" y2="0.5" stroke="#AAB2C8" stroke-opacity="0.45" />
                    <line y1="0.5" x2="150" y2="0.5" stroke="#AAB2C8" stroke-opacity="0.45" />
                    <line y1="0.5" x2="150" y2="0.5" stroke="#AAB2C8" stroke-opacity="0.45" />
                </svg>
            </div>
            <span className='md:hidden text-sm w-full'>{message}</span>
        </>
    )
}

export default AuthMessage
