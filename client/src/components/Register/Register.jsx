import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

const Register = () => {

    const [username,setUsername]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [userType,setUserType]=useState('teacher')
    const [cls,setCls]=useState(null)
    const [sec,setSec]=useState(null)

    const [isBlank,setIsBlank]=useState(false)
    const [message,setMessage]=useState(null)

    useEffect(()=>{
        const header = document.getElementById('header')
        header.classList.add('hidden')


        return ()=>{
            header.classList.remove('hidden')
        }
    })

    //      Register Func

    const handleRegister = ()=>{
        if(username==''||email==''||password==''){
            setIsBlank(true)
            setTimeout(()=>{
                setIsBlank(false)
            },5000)

            return
        }

        Axios.post('http://localhost:3001/register',{username,email,password,userType,cls,sec}).then((resp)=>{
            setMessage(resp.data)
            setTimeout(()=>{
                setMessage(null)
            },5000)
        })

    }

  return (
    <main className='w-screen h-screen black flex justify-center items-center'>
        <h1 className="absolute top-20 font-digital text-4xl sha-txt text-white">Task-In-Trate</h1>
        <div className="flex bg-white flex-col justify-center items-center gap-y-8 p-8 sha rounded-lg z-10 backdrop-blur-md">
        <h1 className='font-digital text-3xl'>Register</h1>
        {isBlank&&<p className='text-red-500 py-2 text-lg'>Fill All The Details</p>}
        {message&&<p className={`${message=='Registered'?'text-green-600':'text-red-500'} py-2 text-lg`}>{message}</p>}
            <div className='grid grid-cols-2 gap-y-6'>
                <h1 className='text-lg'>Username:</h1>
                <input type="text" className={`bg-transparent border-b-2 border-black outline-0 text-lg`} value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <h1 className='text-lg'>Email:</h1>
                <input type="email" className={`bg-transparent border-b-2 border-black outline-0 text-lg`} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <h1 className='text-lg'>Password:</h1>
                <input type="password" className={`bg-transparent border-b-2 border-black outline-0 text-lg`} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <h1 className='text-lg'>Regsiter As:</h1>
                <select className='border-b-2 border-black outline-0' value={userType} onChange={(e)=>setUserType(e.target.value)}>
                    <option value={'student'}>Student</option>
                    <option value={'teacher'}>Teacher</option>
                </select>
            </div>
            {userType=='student'&&(
            <div className='grid grid-cols-2 gap-y-6 w-full'>
                <h1 className='text-lg'>Class:</h1>
                <select  className='border-b-2 border-black outline-0' value={cls} onChange={(e)=>setCls(e.target.value)}>
                    <option value={null}>Select</option>
                    <option value={5}>V</option>
                    <option value={6}>VI</option>
                    <option value={7}>VII</option>
                    <option value={8}>VIII</option>
                </select>
                <h1 className='text-lg'>Section:</h1>
                <select  className='border-b-2 border-black outline-0' value={sec} onChange={(e)=>setSec(e.target.value)}>
                    <option value={null}>Select</option>
                    <option value={'A'}>A</option>
                    <option value={'B'}>B</option>
                    <option value={'C'}>C</option>
                    <option value={'D'}>D</option>
                </select> 
            </div>)}
                               
                
                
            
            
        <button className='black font-digital text-white rounded-lg hover:scale-105 transition-all px-4 py-2 shadow-lg' onClick={()=>handleRegister()}>Register</button>
        <Link to={'/login'}><p className='text-md text-gray-500 hover:underline transition-colors hover:text-black'>Already Have An Account?</p></Link>
        </div>
    </main>
  )
}

export default Register