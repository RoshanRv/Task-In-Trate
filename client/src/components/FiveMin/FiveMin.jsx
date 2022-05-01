import React,{useState,useEffect}from 'react'
import QuotesGenerator from '../Quotes/QuotesGenerator'
import Quotes from '../Quotes/Quotes'
import Info from '../Info/Info'

const FiveMin = () => {
    const min=5*60
    const [timer,setTimer]=useState(min)
    const [isRunning,setIsRunning]=useState(0)
    
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
                clearInterval(seconds)
                setIsRunning(0)
                setTimer(min)
                return
            }
        },1000)

        setIsRunning(seconds)
    }

  return (
    <section className='min-h-screen flex flex-col  items-center five-min'>
        <h1 className="text-white font-digital text-2xl md:text-3xl mt-24 mb-10">5-MINUTE RULE<Info info={'fasnda sdka jsdo  aksdkoasdoasdoais jdoaisdj aosijdo asijd doai  skmno asd  mo asid aos asdk asodas dnasdkmn asodkas modaims doiasmn asodmnomn askdnaskl'} /> </h1>
        <div className="md:w-96 md:h-96 w-60 h-60 bg-white border-8 border-black rounded-full relative">
            <h1 className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 font-clock text-4xl md:text-6xl'>{(Math.floor(timer/60)<10&&'0')+Math.floor(timer/60)+':'+(Math.floor(timer%60)<10?'0':'')+timer%60}</h1>
        </div>

        <button className={`p-4 five-min border-2  font-digital transition-all ${!isRunning&&'border-b-4 border-black'} border-black/80 mt-6 rounded-lg `} onClick={()=>handleTimer()}>Just 5-Min</button>

        <Quotes quote={quote} />
        
    </section>
  )
}

export default FiveMin