"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import React from 'react'
import authService from '@/appwrite/auth'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { toast } from "sonner"

interface IFormInput {
    email: string;
    password: string
}

const Login = () => {
    const { register, handleSubmit } = useForm<IFormInput>()

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        console.log(data);
        try {
            const userAuth = await authService.login(data);
            toast("Login Successfully",)
        } catch (error) {
            toast("Error")
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>Enter your email and password to log in.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Email"
                                {...register("email")}
                                className="w-full"
                            />
                        </div>
                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Password"
                                {...register("password")}
                                className="w-full"
                            />
                        </div>
                        <Button type="submit" className="w-full">Submit</Button>
                    </form>
                </CardContent>
                <CardFooter>
                    <p className="text-sm text-gray-600">Dont have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up</a></p>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Login