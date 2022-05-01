import React,{useEffect,useState}from 'react'
import Fool from './Fool';
import Quotes from '../Quotes/Quotes';
import QuotesGenerator from '../Quotes/QuotesGenerator';
import Info from '../Info/Info';

const ColourFool = () => {

    let color=['red','green','blue','yellow','black','saddlebrown','hotpink','orange','mediumslateblue','gray']
    let colorName=['red','green','blue','yellow','black','white']
    const [currentColor,setCurrentColor]=useState(undefined)
    const [colorArr,setColorArr]=useState([])
    const [nameArr,setNameArr]=useState([])
    const [time,setTime]=useState(900)
    const [isRunning,setIsRunning]=useState(0)

    const quote = useState(QuotesGenerator())

    
   const getRandomColors = ()=>{

        setColorArr([])
        setNameArr([])
        setCurrentColor(undefined)
        for(let i=0;i<25;i++){
            let randColour = Math.floor(Math.random()*(color.length))
            let randColourName = Math.floor(Math.random()*(colorName.length))
            setColorArr(e=>[...e,color[randColour]])
            setNameArr(e=>[...e,colorName[randColourName]])
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

    getRandomColors()

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



    

    const handleRestart=()=>{

        if(isRunning){
            handleStart()
        }

        getRandomColors()

    }

    

    const handleStart = ()=>{

        if(isRunning){
            clearInterval(isRunning)
            setIsRunning(0)
            return
        }

        let pos = 0


        const timer = setInterval(()=>{
            setCurrentColor(pos++)

            if(pos==25){
                clearInterval(timer)
                setIsRunning(0)
                return 
            }

        },time)

        setIsRunning(timer)
    }

  return (
    <section className='font-body flex flex-col  items-center min-h-screen light'>

        <h1 className='font-digital text-2xl md:text-4xl text-white mb-6 mt-20 md:mt-24'>COLOUR FOOL<Info info={'fasnda sdka jsdo  aksdkoasdoasdoais jdoaisdj aosijdo asijd doai  skmno asd  mo asid aos asdk asodas dnasdkmn asodkas modaims doiasmn asodmnomn askdnaskl'} /> </h1>
        <div className='flex  gap-8 m-8'>
            
            {/*     Difficulty   Time    */}
            <label className='text-lg md:text-xl text-white'>Speed</label>
            <select value={time} onChange={(e)=>isRunning==0&&setTime(e.target.value)}  className='bg-transparent border-b-2 text-white py-1 outline-0 text-lg md:text-xl text-center px-2  '>
                <option value={900}>Very Easy</option>
                <option value={800}>Easy</option>
                <option value={700}>Mid</option>
                <option value={500}>Hard</option>
                <option value={400}>Super Hard</option>
            </select>
        </div>
        

        <div className={`grid grid-cols-3 md:grid-cols-5 w-max gap-4 gap-x-16 md:my-8 my-4`}>
            {colorArr.map((e,p)=>(
                <Fool color={e} key={p} name={nameArr[p]} index={p} currentColor={currentColor}/>
            ))}
        </div>
        <div className="flex gap-x-8 font-digital">
            <button onClick={()=>handleStart()} className='light md:px-4 px-2 md:py-2 py-1  my-2 rounded-lg  text-white text-lg md:text-2xl'>Start</button>
            <button onClick={()=>handleRestart()} className='light md:px-4 px-2 md:py-2 py-1 my-2 rounded-lg  text-white text-lg md:text-2xl'>Retry</button>
        </div>
        <Quotes quote={quote} />

    </section>
  )
}

export default ColourFool