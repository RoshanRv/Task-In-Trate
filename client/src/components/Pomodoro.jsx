import React,{useState,useEffect}from 'react'
import aud from '../img/alarm.mp3'
import Quotes from './Quotes/Quotes'
import QuotesGenerator from './Quotes/QuotesGenerator'
import Info from './Info/Info'

const Pomodoro = () => {
    const alarm = new Audio(aud)
    const pomo = 25*60
    const anime = 40*60
    const animeRest = 20*60
    const longRest = 20*60
    const pomoRest = 5*60

    const [doro,setDoro]=useState('pomo');
    const [timer,setTimer]=useState(pomo)
    const [intervalId, setIntervalId] = useState(0);
    const [pomoCount,setPomoCount]=useState(1)

    const quote = useState(QuotesGenerator())


    let c = timer
    let timerCount

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

    const startCount=()=>{
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(0);
            return;
          }
          
          timerCount = setInterval(()=>{
              
              setTimer(e=>e-1)
              c--

              if(c==0){
                  alarm.play()
                  clearInterval(timerCount)
                  setIntervalId(0);

                }
              
            },1000)

            setIntervalId(timerCount)
        }
    

  const handlePomo =()=>{
      if(!intervalId)
      {setDoro('pomo')
      setTimer(pomo)}

  }
  const handleAnime =()=>{
    if(!intervalId)
      {setDoro('anime')
      setTimer(anime)}
  }

  useEffect(()=>{
    if(timer==0){
        if(doro=='pomo'){
            if( pomoCount%4!=0)
            {
                console.log(pomoCount)
                setDoro('pomoRest')
                setTimer(pomoRest)
                setPomoCount(e=>e+1)
            }
            else if( pomoCount%4==0){
                console.log(pomoCount)

                setDoro('longRest')
                setTimer(longRest)
                setPomoCount(e=>e+1) 
            }
        }
        else if(doro=='anime'){
            setDoro('animeRest')
            setTimer(animeRest)
        }
        else if(doro=='pomoRest'||doro=='longRest'){
            setDoro('pomo')
            setTimer(pomo)
        }
        else if(doro=='animeRest'){
            setDoro('anime')
            setTimer(anime)
        }
    }
  },[timer])

  const handleSpace=(e)=>{
      if(e.code==='Space'){
        startCount()
      }
  }

    document.onkeyup=(e)=>handleSpace(e)
    
  return (
    <section className={`flex flex-col font-body justify-center items-center min-h-screen transition-all duration-1000 ${doro.includes('Rest')?' yellow':' blue'}`} >
            <h1 className='font-digital text-2xl md:text-4xl text-white mb-6 mt-16 md:mt-20'>POMODORO<Info info={'fasnda sdka jsdo  aksdkoasdoasdoais jdoaisdj aosijdo asijd doai  skmno asd  mo asid aos asdk asodas dnasdkmn asodkas modaims doiasmn asodmnomn askdnaskl'} /> </h1>
        <div className="flex gap-x-2 my-8">
            {/* Doro Button */}
        <button className={`px-2 py-2  mt-4 rounded-md bg-white md:text-2xl font-bold ${doro.includes('Rest')?'text-orange-300':'text-blue-300 '} transition-colors duration-1000 ${(doro=='anime'||doro=='animeRest')&&'border-b-2 border-black/70'}`} onClick={()=>handlePomo() }>Pomodoro</button>
        <button className={`px-2 py-2  mt-4 rounded-md bg-white md:text-2xl font-bold ${doro.includes('Rest')?'text-orange-300':'text-blue-300 '} transition-colors duration-1000  ${(doro=='pomo'||doro=='pomoRest'||doro=='longRest')&&'border-b-2 border-black/70'}`} onClick={()=>handleAnime() } >Animedoro</button>
        </div>
        {/*         Result....   */}
        <div>
            <h1 className='md:text-2xl text-xl p-2 bg-black/40 font-body rounded-lg text-white my-4 '>{doro.includes('long')?'You Did Well, Now Take a Break...':doro.includes('Rest')?'Relax':'Focus !'}</h1>
        </div>
        {/*             Timer       */}
        <div className="text-center  rounded-lg backdrop-blur-lg">
            <div className=" md:h-80 md:w-80 h-40 w-40 bg-black/30 rounded-full text-center border-4 border-white flex items-center relative overflow-hidden">
                    <div className="font-clock text-white md:text-6xl text-3xl rounded-full w-max  mx-auto flex">
                        <p>{((timer/60)<10&&'0')+Math.floor(timer/60)}</p>
                        <p className='mx-1'> :</p>
                        <p> {((timer%60)<10&&'0')+Math.floor(timer%60)}</p>
                    </div>
            </div>
            {/*              Start Button            */}
            <button className={`px-2 py-2 ${doro.includes('Rest')?'text-orange-300':'text-blue-300 '} transition-colors duration-1000 w-24 mt-4 rounded-md bg-white md:text-2xl font-bold outline-0 ${!intervalId&&'border-b-2 border-black/70'}`} onClick={()=>startCount() }>{intervalId?'Pause':'Start'}</button>

        </div>

        <Quotes quote={quote}/>

    </section>
  )
}

export default Pomodoro