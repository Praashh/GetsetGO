export  interface SignUpTypes{
    email: string;
    firstName:string;
    lastName:string;
    password:string
}
export  interface LoginTypes{
    email: string;
    password:string
}
export interface ContextType{
    authStatus:boolean;
    name:string;
    email:string;
    setAuthStatus: (status : boolean) => void;
    setName: (status: string) => void;
    setEmail: (status : string) => void;
}