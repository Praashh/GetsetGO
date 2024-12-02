import { createContext } from 'react'
import { ContextType } from '@/type'

export const AuthContext = createContext<ContextType>({
    authStatus: false,
    name:"",
    email:"",
    setAuthStatus: () => {},
    setName: () => {},
    setEmail: () => {}
})

export const AuthProvider = AuthContext.Provider;

export default AuthContext;