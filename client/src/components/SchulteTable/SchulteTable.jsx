import React,{useState,useEffect} from 'react'
import Cell from './Cell'
import Quotes from '../Quotes/Quotes'
import QuotesGenerator from '../Quotes/QuotesGenerator'
import Info from '../Info/Info'

const SchulteTable = () => {

    const [selectTimer,setSelectTimer]=useState(30)
    const [timer,setTimer]=useState(30)
    const [isStart,setIsStart]=useState(0)
    const [randarr,setRandarr]=useState([0])
    const [begin,setBegin]=useState(1)
    const [isLost,setIsLost]=useState(0)

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
        let c=timer

        if(isStart){
            clearInterval(isStart)
            setTimer(selectTimer)
            setIsStart(0)
            setIsLost(1)
            setBegin(1)
            getRandomNo()
            return
        }
        setIsLost(0)
        const tick=setInterval(()=>{

            setTimer(e=>e-1)
            c--
            if(c==0){
                setIsStart(0)
                setIsLost(1)
                setBegin(1)
                clearInterval(tick)
                setTimer(selectTimer)
                getRandomNo()
                return
            }

            setIsStart(tick)

        },1000)
    }

    let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

    const getRandomNo=()=>{

            setRandarr([])
            for(let i=0;i<25;i++){
                let rand = Math.floor(Math.random()*(arr.length))
                let val = arr[rand]
                setRandarr(e=>[...e,val])
                arr.splice(rand,1)
            }
        
    }


    useEffect(()=>{ 

        getRandomNo()
        
    },[])

    useEffect(()=>{

        setTimer(selectTimer)

    },[selectTimer])




  return (
    <section className='flex flex-col  items-center min-h-screen s-table relative font-body'>
        <h1 className="font-digital pt-20 uppercase text-white md:text-4xl text-2xl md:my-4 ">Schulte Table<Info info={'fasnda sdka jsdo  aksdkoasdoasdoais jdoaisdj aosijdo asijd doai  skmno asd  mo asid aos asdk asodas dnasdkmn asodkas modaims doiasmn asodmnomn askdnaskl'} /> </h1>
        {/*         Difficulty */}
        <div className={`md:my-8 my-2 ${isStart&&'scale-0'}`}>
            <label className='md:text-xl text-lg text-white mx-2  '>Timer</label>
            <select value={selectTimer} onChange={(e)=>setSelectTimer(e.target.value)} className='bg-transparent md:p-2 md:py-1 text-lg md:text-xl outline-0 border-b-2  text-white roundedmd p-1'>
                <option value={45}>45</option>
                <option value={40}>40</option>
                <option value={30}>30</option>
                <option value={25}>25</option>
                <option value={15}>15</option>
            </select>
        </div>
        {/*         Container        */}
        <div className='py-4   px-4 md:px-10 s-table sha rounded-md  border-4 text-center relative'>
            {/*        Timer      */}
            <h1 className="md:w-20 w-12 h-12 md:h-20 my-2 mb-6   flex justify-center items-center mx-auto box-border border-4  sha-sm rounded-full text-lg md:text-2xl  s-table text-white font-digital">{timer}</h1>
            {/*        'Click To Start..'  */}
            <div className={`md:px-32 md:py-48 outline-0 transition-all px-16 py-24  flex justify-center items-center z-10 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 ${isStart&&'scale-0'}`} onClick={()=>handleTimer()}>
                <button className=' z-50 w-max sha-sm font-digital uppercase text-xl md:text-2xl text-white p-2 border-2 rounded-lg s-table '>Click To Start</button>
            </div>
             {/*     Table        */}
            <div className={`grid grid-cols-5  ${!isStart&&'blur'} transition-all rounded-md w-max border2 border-black overflow-hidden relative`}>
            
                {randarr?.map((e,i)=>{
                return <Cell data={e} key={i} begin={begin} setBegin = {setBegin} setIsLost={setIsLost} isStart={isStart} handleTimer={handleTimer} isLost={isLost}/>
                })}
            </div>

            <button className={`md:p-2 md:px-4 uppercase font-digital s-table border-2 mt-8 text-white sha-sm rounded-lg md:text-xl  bg-white transition-all ${!isStart&&'scale-0'}`} onClick={()=>handleTimer()}>Restart</button>
        </div>

        <Quotes quote={quote}/>

        
    </section>
  )
}

export default SchulteTable