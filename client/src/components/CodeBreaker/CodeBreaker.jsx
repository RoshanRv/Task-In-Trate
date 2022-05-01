import React,{useState,useEffect} from 'react'
import CodeBlock from './CodeBlock'
import Quotes from '../Quotes/Quotes'
import QuotesGenerator from '../Quotes/QuotesGenerator'
import Info from '../Info/Info'

const CodeBreaker = () => {
    const [difficulty,setDifficulty]=useState(4)
    const [ans,setAns]=useState([])
    const [code,setCode]=useState([])
    const [res,setRes]=useState([])
    const [currentPos,setCurrentPos]=useState(0)
    const [access,setAccess]=useState(0)

    const quote = useState(QuotesGenerator())


    const getRandomCode = ()=>{
        setCurrentPos(0)
        setAccess(0)
        setRes([])
        setAns([])
        for(let i=0;i<difficulty;i++)setAns(e=>[...e,0])
        setCode([])
        const no = [1,2,3,4,5,6,7,8,9,0]
        for(let i=0;i<difficulty;i++){
            const rand = Math.floor(Math.random()*(no.length))
            setCode(e=>[...e,no[rand]])
        }
    }

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


    useEffect(()=>{
       getRandomCode()
    },[difficulty])

    const handleClick=()=>{
        setRes([])
        let arr=[...ans]
        if(ans.join('')==code.join('')){
            setAccess(1)
            
            setTimeout(()=>{
                //     Pop Up
                setAccess(4)
            },2000)
        }
        else setAccess(2)

        
            for(let i in arr){
                let move=0
                let perfect=0
                for(let[j,k] of code.entries()){
                    if(arr[i]==k){
                        if(i==j)perfect++
                        else move++
                    }
                }
                if(perfect>0)setRes(e=>[...e,1])
                else if (move>0)setRes(e=>[...e,2])
                else setRes(e=>[...e,3])
            }
        }

        const handleKeyUp = (e)=>{
            if(e.key=='ArrowRight'){
                if(currentPos<difficulty-1)setCurrentPos(e=>e+1)

            }
            else if(e.key=='ArrowLeft'){
                if(currentPos>0)setCurrentPos(e=>e-1)

            }else if(e.key=='Enter'){
                handleClick()
            }

        }

        useEffect(()=>{
            document.getElementById(currentPos)?.focus()
        },[currentPos])

        document.onkeyup=(e)=>handleKeyUp(e)
   

    
  return (
    <section className='flex  font-digital  items-center flex-col min-h-screen black'>
        {/*         Head and Diff. */}
        <div className='my-8 text-center'>
            <h1 className='md:text-4xl mt-16 my-8 text-white'>CODE BREAKER<Info info={'fasnda sdka jsdo  aksdkoasdoasdoais jdoaisdj aosijdo asijd doai  skmno asd  mo asid aos asdk asodas dnasdkmn asodkas modaims doiasmn asodmnomn askdnaskl'} /> </h1>
            <select className='p-2 black border-2 rounded-lg px-4 text-white outline-0 text-center' value={difficulty} onChange={(e)=>setDifficulty(e.target.value)}>
                <option value={4}>Very Easy</option>
                <option value={5}>Easy</option>
                <option value={6}>Mid</option>
                <option value={7}>Hard</option>
            </select>
        </div>
        {/*             SAFE       */}
        <div className='md:px-20 p-6 md:py-10 black border-4 md:mt-12 text-center rounded-md  sha'>
        {/*         ROUND                */}
            <div className='black border-4 relative border-red-600 p-8 sha  rounded-full w-60 h-60 md:w-96 md:h-96 text-center'>
                {/* <h1 className='text-white'>{code}</h1> */}
                {/*             RESULT           */}
                <h1 className={`bg-white/50  text-sm md:text-xl mt-4 md:mt-10 rounded-lg mx-auto w-max font-black ${access==1?'text-green-600':access==2&&'text-red-600'} p-2`}>{access==1?'--ACCESS-GRANTED--':access==2?'--ACCESS-DENIED--':'---SOLVE---'}</h1>
                {/*             Code and Button   */}
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 text-center'>
                    <div className='flex gap-x-2 bg-white/30 md:p-2  p-1 rounded-xl'>
                        {ans.map((_,i)=><CodeBlock setAns={setAns} ans={ans} index={i} res={res} key={i} currentPos={currentPos} setCurrentPos={setCurrentPos}/>)}
                    </div>

                    <button onClick={()=>handleClick()} className='md:p-2 p-1  black text-white border-2 mt-4 md:mt-10 bg-white rounded-lg mx-auto'>Unlock</button>
                </div>
            </div>
        </div>

        <Quotes quote={quote}/>

        {/*                 Pop Up           */}
        {<div className={`fixed bg-black/50 top-0 left-0 w-screen h-screen flex flex-col justify-center items-center  transition-all scale-0 ${access==4&&'scale-100'}`}>
            <div className='black md:border-2 md:p-8 md:py-8 rounded-lg text-center'>
                <h1 className='md:text-2xl text-white uppercase m-2'>Well Done !!</h1>
                <h1 className='md:text-2xl text-white uppercase m-2'>You Cracked The Code</h1>
                <button className='md:p-2 p-1  black text-white border-2 mt-4 md:mt-10 bg-white rounded-lg mx-auto' onClick={()=>getRandomCode()}>RETRY</button>
            </div>
        </div>}
        
    </section>
  )
}

export default CodeBreaker