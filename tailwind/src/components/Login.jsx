import { useState } from "react";
import {z} from "zod";

const loginSchema = z.object({
    email:z.string().email('invalid email address'),
    password:z.string().min(6,"password must be of atleast 6 characters"),
});

const Login=()=>{
    
    const [error, setError] = useState({});
    const [formData , setformData] = useState({
        email:"",
        password:"",
    })

    const changeHandler=(e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setformData({...formData,[name]:value});
    }

    const submitHandler=(e)=>{
        e.preventDefault();
       
        
        const result = loginSchema.safeParse(formData);
        // console.log(result); 
        if(!result.success){
            const errorField = result.error.formErrors.fieldErrors; 
            setError(errorField);
            console.log(error);
            return; 
        }
        // API CALL 
        setError({});
        console.log(formData);
    }
    
        return(
            <div className="min-h-screen flex items-center justify-center bg-[#f0f0f0]  ">
               <form onSubmit={submitHandler} className="w-[400px] h-[200px] border-none rounded-md p-6 flex flex-col justify-center space-y-4 shadow-xl">
               <div className="flex flex-col ">
                <input type="email" placeholder="email" autoComplete="email" value={formData.email} name="email" onChange={changeHandler} className="email  px-2 py-1"/>
                <span className="text-xs text-red-600">{error && error.email}</span>
               </div>
               <div className="flex flex-col">
                <input type="password" placeholder="password" autoComplete="current-password" onChange={changeHandler} value={formData.password} name="password" className="password  px-2 py-1"/>
                <span className="text-xs text-red-600">{error && error.password}</span>
               </div>
                <button className="btn border-none bg-blue-500 text-white px-4 py-1 rounded cursor-pointer">Login</button> 
               </form>
            </div>
        )
}

export default Login;