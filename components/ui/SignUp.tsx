"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Label } from "@/components/ui/label"
import useAuth from "@/context/useAuth"
import authService from "@/appwrite/auth"

interface IFormInput {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPass: string
}

export default function SignUp() {
  const router = useRouter()
  const [error, setError] = useState<string>("")
  const [success, setSuccess] = useState<string>("")
  const { setAuthStatus, setEmail, setName } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()

  const onSubmit = async (data: IFormInput) => {
    setError("")
    setSuccess("")

    if (data.password !== data.confirmPass) {
      setError("Passwords don't match")
      return
    }

    try {
      const newUser = await authService.createUserAccount(data)
      setSuccess("Account created successfully!")
      setAuthStatus(true)
      setName(data.firstName)
      setEmail(data.email)
      router.push('/')
    } catch (error: any) {
      setError(error?.message || "Something went wrong. Please try again.")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-gray-800">Create your account</CardTitle>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {success && (
            <Alert className="mb-6">
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-gray-700">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  {...register("firstName", { required: "First name is required" })}
                  className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                />
                {errors.firstName && (
                  <p className="text-sm text-red-500">{errors.firstName.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-gray-700">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  {...register("lastName", { required: "Last name is required" })}
                  className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                />
                {errors.lastName && (
                  <p className="text-sm text-red-500">{errors.lastName.message}</p>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters"
                  }
                })}
                className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPass" className="text-gray-700">Confirm Password</Label>
              <Input
                id="confirmPass"
                type="password"
                placeholder="••••••••"
                {...register("confirmPass", {
                  required: "Please confirm your password"
                })}
                className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.confirmPass && (
                <p className="text-sm text-red-500">{errors.confirmPass.message}</p>
              )}
            </div>

            <Button 
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              Create Account
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}