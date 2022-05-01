import React, { useEffect,useState,useContext } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import Axios from 'axios'
import { GlobalState } from '../Context'

const Login = () => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const [isBlank,setIsBlank]=useState(false)
    const [message,setMessage]=useState(null)

    const navigate = useNavigate()

    const [user,setUser]=useContext(GlobalState)


    useEffect(()=>{
        const header = document.getElementById('header')
        header.classList.add('hidden')


        return ()=>{
            header.classList.remove('hidden')
        }
    })

    //      Login Func

    const handleLogin = ()=>{
        if(email==''||password==''){
            console.log('blank')
            setIsBlank(true)
            setTimeout(()=>{
                setIsBlank(false)
            },5000)
            return
        }

        Axios.post('http://localhost:3001/login',{email,password}).then(resp=>{
            
            if(resp.data[0]?.username){
                setUser(resp.data[0].username)
                localStorage.setItem('username',JSON.stringify(email))
                setMessage('Logged In')
                setTimeout(()=>{
                    navigate('/')
                },1000)
            }else{
                setMessage(resp.data.message)
                setTimeout(()=>{
                    setMessage(null)
                },3000)
            }
            
            
        })

    }

  return (
    <main className='w-screen h-screen black flex justify-center items-center'>
        <h1 className="absolute top-20 font-digital text-4xl sha-txt text-white">Task-In-Trate</h1>
        <div className="flex bg-white flex-col justify-center items-center gap-y-8 p-8 sha rounded-lg z-10 backdrop-blur-md">
        <h1 className='font-digital text-3xl'>LOGIN</h1>
            {isBlank&&<p className='text-red-500 py-2 text-lg'>Fill All The Details</p>}
            {message&&<p className={`${message.includes('Log') ?'text-green-600':'text-red-500'} py-2 text-lg`}>{message}</p>}
            <div className='grid grid-cols-2 gap-y-6'>
                <h1 className='text-lg'>Email:</h1>
                <input type="email" className={`bg-transparent border-b-2 border-black outline-0 text-lg`} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <h1 className='text-lg'>Password:</h1>
                <input type="password" className={`bg-transparent border-b-2 border-black outline-0 text-lg`} value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            
        <button className='black font-digital text-white rounded-lg hover:scale-105 transition-all px-4 py-2 shadow-lg' onClick={()=>handleLogin()}>Login</button>
        <Link to={'/register'}><p className='text-md text-gray-500 hover:underline transition-colors hover:text-black'>Register New Accout</p></Link>
        </div>
    </main>
  )
}

export default Login