"use client"
import { Button, Snackbar, Stack, TextField } from '@mui/material'
import {useForm, SubmitHandler} from "react-hook-form"
import React from 'react'
import authService from '@/appwrite/auth'

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
            alert("logged in!")
        } catch (error) {
            throw error;
        }
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <Stack spacing={4}>
      <TextField
        required
        id="outlined-required"
        className="bg-white w-full shadow-lg"
        placeholder="Email-id"
        {...register("email")}
      />
      <TextField
        required
        id="outlined-password-input"
        type="password"
        autoComplete="current-password"
        placeholder="Enter Your Password"
        className="bg-white w-full"
        {...register("password")}
      />
      <Button variant="contained" type="submit" className="w-full">Submit</Button>
      {/* <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        message={message}
      /> */}
    </Stack>
  </form>
  )
}

export default Login
