import React,{useEffect, useState}from 'react'
import coffe from '../../img/coffe.png'
import alarm from '../../img/alarm.mp3'
import Quotes from '../Quotes/Quotes'
import QuotesGenerator from '../Quotes/QuotesGenerator'
import Info from '../Info/Info'

const Caffine = () => {
    const nap = 20*60
    const [timer,setTimer]=useState(nap)
    const [isRunning,setIsRunning]=useState(0)
    const aud = new Audio(alarm)
    
    const quote = useState(QuotesGenerator())

    //          HEADER      

    window.addEventListener('scroll',(e)=>{
        let top = document.documentElement.scrollTop
        let h = window.screen.height

        if(top>=20){
            const header = document.getElementById('header')
            header.classList.add('bg-white')
            header.classList.remove('bg-transparent')
            header.classList.add('shadow-lg')
            header.classList.add('text-black')
            header.classList.remove('text-white')
            header.classList.remove('text-transparent')


        }
        if(top<20){
            const header = document.getElementById('header')
            header.classList.add('bg-transparent')
            header.classList.remove('bg-white')
            header.classList.add('text-white')
            header.classList.add('shadow-lg')
            header.classList.remove('text-black')
            header.classList.remove('text-transparent')

        }
    })

    useEffect(()=>{
        let top = document.documentElement.scrollTop
        if(top>20){
            const header= document.getElementById('header')
            header.classList.add('shadow-lg')
            header.classList.add('text-black')
        }else{
            const header= document.getElementById('header')
            header.classList.add('shadow-lg')
            header.classList.add('text-white')
        }

    },[])


    const handleTimer=()=>{
        if(isRunning){
            clearInterval(isRunning)
            setIsRunning(0)
            return 
        }

        let c=timer
        const seconds=setInterval(()=>{
            setTimer(e=>e-1)
            c--
            if(c==0){
                aud.play()
                clearInterval(seconds)
                setIsRunning(0)
                setTimer(nap)
                return
            }
        },1000)

        setIsRunning(seconds)
    }

  return (
    <section className='min-h-screen brown flex flex-col  items-center font-body'>
        <h1 className='font-digital mt-20 mb-4 md:text-3xl text-2xl text-white '>CAFFINE NAP<Info info={'fasnda sdka jsdo  aksdkoasdoasdoais jdoaisdj aosijdo asijd doai  skmno asd  mo asid aos asdk asodas dnasdkmn asodkas modaims doiasmn asodmnomn askdnaskl'} />  </h1>
        {/*         Smokes...  */}
        <div className='relative z-10 text-center w-max mt-44' >
            <div className='mx-auto text-center  w-max absolute right-3 md:right-8'>
                <div className='absolute h-12 w-2 bg-white right-20 -top-20 vap rounded-full  '></div>
                <div className='absolute h-12 w-2 bg-white right-16 -top-12 va rounded-full '></div>
                <div className='absolute h-12 w-2 bg-white right-12 -top-16 vap rounded-full '></div>
                <div className='absolute h-12 w-2 bg-white right-24 -top-16 va rounded-full '></div>
                <div className='absolute h-8 w-2 bg-white right-28 -top-8 vap rounded-full '></div>
                <div className='absolute h-12 w-2 bg-white right-32 -top-20 vap rounded-full '></div>
                <div className='absolute h-12 w-2 bg-white right-36 -top-12 va rounded-full '></div>
            </div>
            {/*        Img        */}
            <img src={coffe} alt="" className='md:w-60 z-10'/>
            <div className='md:w-40 h-6 bg-black rounded-full  mx-auto  -translate-y-4 blur-lg'></div>
            {/*           TIMER          */}
            <div className='md:w-24 h-20 w-20 bg-white md:h-24 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-3/2 border-4 border-black rounded-full'>
                <h1 className='font-clock absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2'>{(Math.floor(timer/60)<10&&'0')+Math.floor(timer/60)+':'+(Math.floor(timer%60)<10?'0':'')+timer%60}</h1>
            </div>
        </div>

        <button className={`p-4 brown border-2 outline-0 transition-all sha-sm ${!isRunning&&'border-b-4 border-black'} border-black/80 mt-4 rounded-lg `} onClick={()=>handleTimer()}>Take a Nap</button>

        <Quotes quote={quote}/>

    </section>
  )
}

export default Caffine