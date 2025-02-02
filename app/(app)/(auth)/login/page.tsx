"use client"
import Login from '@/components/ui/Login'
import useAuth from '@/context/useAuth';
import { useRouter } from 'next/navigation';
import React from 'react'

const LoginPage = () => {
  const router = useRouter();
  const { authStatus } = useAuth();

  if (authStatus) {
      router.replace("/dasboard");
      return <></>;
  }

  return (
    <div>
        {!authStatus && <Login/>}
    </div>
  )
}

export default LoginPage
