import React,{useEffect, useState}from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faMusic } from '@fortawesome/free-solid-svg-icons'
import brain from './img/brain-bg.png'
import brain_ico from './img/brain.png'
import s_table from './img/s-table.png'
import wordzle from './img/wordzle.png'
import code from './img/code.png'
import trials from './img/trials.png'
import sudoku from './img/sudoku.png'
import pomodoro from './img/pomodoro.png'
import matrix from './img/matrix.png'
import frog from './img/frog.png'
import caffine from './img/caffine.png'
import meditate from './img/meditate.jpeg'
import goals from './img/goals.jpeg'
import five from './img/five.png'
import colour_fool from './img/color-fool.png'
import { faGamepad ,faBook,faLightbulb} from '@fortawesome/free-solid-svg-icons'


const Home = ({setShowSong,showSong}) => {

    
    window.addEventListener('scroll',(e)=>{
        let top = document.documentElement.scrollTop
        let h = window.screen.height
        if(top>=h-200){
            const header = document.getElementById('header')
            header.classList.add('bg-white')
            header.classList.remove('bg-transparent')
            header.classList.add('text-black')
            header.classList.remove('text-transparent')
            header.classList.add('shadow-lg')


        }
        if(top<h-200||top==0){
            const header = document.getElementById('header')
            header.classList.add('bg-transparent')
            header.classList.remove('bg-white')
            header.classList.remove('text-black')
            header.classList.add('text-transparent')
            header.classList.remove('shadow-lg')
        }
    })

    

  return (
    <section className='min-h-screen  overflow-x-hidden flex flex-col justify-center font-body items-center'>
        {/*                 HERO             */}
        <div className='h-screen w-full black relative'>
            <img src={brain} alt="" className=' absolute md:w-[34rem]  bg  opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  '/>
            <img src={brain_ico} alt="" className='text-white absolute -z-50 brain opacity-0  left-1/2 -translate-x-1/2 -translate-y-1/2 '/>
            <h1 className='absolute top-1/2 text-4xl head opacity-0 md:text-6xl text-white font-bold w-max font-digital left-1/2 -translate-x-1/2 -translate-y-1/2'>Task-In-Trate</h1>
            <div>
                <a href="#games"><FontAwesomeIcon icon={faGamepad} className='text-white opacity-0 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white transition-all absolute float4 border-2 top-[83%] left-[12%] p-3 text-2xl rounded-full'/></a>
                <a href="#techniques"><FontAwesomeIcon icon={faBook} className='text-white opacity-0 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white transition-all absolute float3 border-2 top-[23%] left-[79%] p-3 text-2xl rounded-full'/></a>
                <FontAwesomeIcon icon={faMusic} className='text-white opacity-0 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white transition-all absolute float2 border-2 top-[27%] left-[17%] p-3 text-2xl cursor-pointer rounded-full' onClick={()=>setShowSong(e=>!e)} />
                <a href="#tips"><FontAwesomeIcon icon={faLightbulb} className='text-white opacity-0 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white transition-all absolute float2 border-2 top-[73%] left-[76%] p-3 text-2xl rounded-full'/></a>
                <a href="#games"><FontAwesomeIcon icon={faGamepad} className='text-white opacity-0 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white transition-all absolute float3 border-2 top-[53%] left-[62%] p-3 text-2xl rounded-full'/></a>
                <a href="#techniques"><FontAwesomeIcon icon={faBook} className='text-white opacity-0 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white transition-all absolute float1 border-2 top-[83%] left-[39%] p-3 text-2xl rounded-full'/></a>
                <FontAwesomeIcon icon={faMusic} className='text-white opacity-0 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white transition-all absolute float1 border-2 top-[67%] left-[47%] p-3 text-2xl cursor-pointer rounded-full' onClick={()=>setShowSong(e=>!e)} />
                <a href="#tips"><FontAwesomeIcon icon={faLightbulb} className='text-white opacity-0 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white transition-all absolute float4 border-2 top-[13%] left-[36%] p-3 text-2xl rounded-full'/></a>
                
            </div>

    
        </div>

        {/* MAIN   */}
        <main className='min-h-screen  bg-white'>

        {/*         GAMEs....... */}
            <div className='mt-16 justify-center flex flex-col' id='games'>
                <h1 className='font-digital text-xl font-extrabold  w-max mx-auto md:text-3xl uppercase'>Cognitive Training<FontAwesomeIcon icon={faGamepad} className='mx-2'/></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mt-8 p-2">

                    <Link to={'/schultetable'}>
                        <div className='s-table rounded-lg cursor-pointer group relative h-96 overflow-hidden w-[19.5rem] md:w-80 border-2 border-black text-center flex flex-col justify-center items-center'>
                            <img src={s_table} className='w-72 rounded-lg hover:scale-110 transition-all' alt="s-table" />
                            <div className='absolute text-white text-left p-2 backdrop-blur-sm bg-black/50 group-hover:bottom-0 transition-all -bottom-[6.2rem] w-full'>
                                <h1 className='font-digital text-xl md:text-2xl'>Schulte Table</h1>
                                <p className='text-body text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque odio eum modi corrupti quo nobis praesentium voluptatum deleniti culpa!</p>   
                            </div>
                        </div>
                    </Link>

                    <Link to={'/wordzle'}>
                        <div className='violet rounded-lg cursor-pointer group relative h-96 overflow-hidden w-[19.5rem] md:w-80 border-2 border-black text-center flex flex-col justify-center items-center'>
                            <img src={wordzle} className='w-full h-full rounded-lg hover:scale-110 transition-all' alt="wordzle" />
                            <div className='absolute text-white text-left p-2 backdrop-blur-sm bg-black/50 group-hover:bottom-0 transition-all -bottom-[6.2rem] w-full'>
                                <h1 className='font-digital text-xl md:text-2xl'>Wordzle</h1>
                                <p className='text-body text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque odio eum modi corrupti quo nobis praesentium voluptatum deleniti culpa!</p>   
                            </div>
                        </div>
                    </Link>

                    <Link to={'/codebreaker'}>
                        <div className='black rounded-lg cursor-pointer group relative h-96 overflow-hidden w-[19.5rem] md:w-80 border-2 border-black text-center flex flex-col justify-center items-center'>
                            <img src={code} className='w-72 rounded-lg hover:scale-110 transition-all' alt="codebreaker" />
                            <div className='absolute text-white text-left p-2 backdrop-blur-sm bg-black/50 group-hover:bottom-0 transition-all -bottom-[6.2rem] w-full'>
                                <h1 className='font-digital text-xl md:text-2xl'>Code Breaker</h1>
                                <p className='text-body text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque odio eum modi corrupti quo nobis praesentium voluptatum deleniti culpa!</p>   
                            </div>
                        </div>
                    </Link>

                    <Link to={'/sudoku'}>
                        <div className='sudoku rounded-lg cursor-pointer group relative h-96 overflow-hidden w-[19.5rem] md:w-80 border-2 border-black text-center flex flex-col justify-center items-center'>
                            <img src={sudoku} className='w-72 rounded-lg hover:scale-110 transition-all' alt="sudoku" />
                            <div className='absolute text-white text-left p-2 backdrop-blur-sm bg-black/50 group-hover:bottom-0 transition-all -bottom-[6.2rem] w-full'>
                                <h1 className='font-digital text-xl md:text-2xl'>Sudoku</h1>
                                <p className='text-body text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque odio eum modi corrupti quo nobis praesentium voluptatum deleniti culpa!</p>   
                            </div>
                        </div>
                    </Link>

                    <Link to={'/trials'}>
                        <div className='red rounded-lg cursor-pointer group relative h-96 overflow-hidden w-[19.5rem] md:w-80 border-2 border-black text-center flex flex-col justify-center items-center'>
                            <img src={trials} className='w-72 rounded-lg hover:scale-110 transition-all' alt="trials" />
                            <div className='absolute text-white text-left p-2 backdrop-blur-sm bg-black/50 group-hover:bottom-0 transition-all -bottom-[6.2rem] w-full'>
                                <h1 className='font-digital text-xl md:text-2xl'>Trials</h1>
                                <p className='text-body text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque odio eum modi corrupti quo nobis praesentium voluptatum deleniti culpa!</p>   
                            </div>
                        </div>
                    </Link>

                    <Link to={'/colourfool'}>
                        <div className='light rounded-lg cursor-pointer group relative h-96 overflow-hidden w-[19.5rem] md:w-80 border-2 border-black text-center flex flex-col justify-center items-center'>
                            <img src={colour_fool} className='w-full h-full  rounded-lg hover:scale-110 transition-all' alt="cf" />
                            <div className='absolute text-white text-left p-2 backdrop-blur-sm bg-black/50 group-hover:bottom-0 transition-all -bottom-[6.2rem] w-full'>
                                <h1 className='font-digital text-xl md:text-2xl'>Colour Fool</h1>
                                <p className='text-body text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque odio eum modi corrupti quo nobis praesentium voluptatum deleniti culpa!</p>   
                            </div>
                        </div>
                    </Link>
                    
                </div>
            </div>

            {/*         Techniques....... */}
            <div className='mt-28 justify-center flex flex-col' id='techniques'>
                <h1 className='font-digital text-xl font-extrabold  w-max mx-auto md:text-3xl uppercase'>Productivity<FontAwesomeIcon icon={faBook} className='mx-2'/></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mt-8 p-2">

                    <Link to={'/pomodoro'}>
                        <div className='blue rounded-lg cursor-pointer group relative h-96 overflow-hidden w-[19.5rem] md:w-80 border-2 border-black text-center flex flex-col justify-center items-center'>
                            <img src={pomodoro} className='w-full h-full rounded-lg hover:scale-110 transition-all' alt="pomodoro" />
                            <div className='absolute text-white text-left p-2 backdrop-blur-sm bg-black/50 group-hover:bottom-0 transition-all -bottom-[6.2rem] w-full'>
                                <h1 className='font-digital text-xl md:text-2xl'>Pomodoro</h1>
                                <p className='text-body text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque odio eum modi corrupti quo nobis praesentium voluptatum deleniti culpa!</p>   
                            </div>
                        </div>
                    </Link>

                    <Link to={'/matrix'}>
                        <div className='black rounded-lg cursor-pointer group relative h-96 overflow-hidden w-[19.5rem] md:w-80 border-2 border-black text-center flex flex-col justify-center items-center'>
                            <img src={matrix} className='w-72 rounded-lg hover:scale-110 transition-all' alt="matrix" />
                            <div className='absolute text-white text-left p-2 backdrop-blur-sm bg-black/50 group-hover:bottom-0 transition-all -bottom-[6.2rem] w-full'>
                                <h1 className='font-digital text-xl md:text-2xl'>Eisen Matrix</h1>
                                <p className='text-body text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque odio eum modi corrupti quo nobis praesentium voluptatum deleniti culpa!</p>   
                            </div>
                        </div>
                    </Link>

                    <Link to={'/frog'}>
                        <div className='green rounded-lg cursor-pointer group relative h-96 overflow-hidden w-[19.5rem] md:w-80 border-2 border-black text-center flex flex-col justify-center items-center'>
                            <img src={frog} className='w-full h-full rounded-lg hover:scale-110 transition-all' alt="frog" />
                            <div className='absolute text-white text-left p-2 backdrop-blur-sm bg-black/50 group-hover:bottom-0 transition-all -bottom-[6.2rem] w-full'>
                                <h1 className='font-digital text-xl md:text-2xl'>Eat The Frog</h1>
                                <p className='text-body text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque odio eum modi corrupti quo nobis praesentium voluptatum deleniti culpa!</p>   
                            </div>
                        </div>
                    </Link>

                    <Link to={'/caffinenap'}>
                        <div className='brown rounded-lg cursor-pointer group relative h-96 overflow-hidden w-[19.5rem] md:w-80 border-2 border-black text-center flex flex-col justify-center items-center'>
                            <img src={caffine} className='w-full h-full rounded-lg hover:scale-110 transition-all' alt="caffine" />
                            <div className='absolute text-white text-left p-2 backdrop-blur-sm bg-black/50 group-hover:bottom-0 transition-all -bottom-[6.2rem] w-full'>
                                <h1 className='font-digital text-xl md:text-2xl'>Caffine Nap</h1>
                                <p className='text-body text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque odio eum modi corrupti quo nobis praesentium voluptatum deleniti culpa!</p>   
                            </div>
                        </div>
                    </Link>

                    <Link to={'/five'}>
                        <div className='five-min rounded-lg cursor-pointer group relative h-96 overflow-hidden w-[19.5rem] md:w-80 border-2 border-black text-center flex flex-col justify-center items-center'>
                            <img src={five} className='w-full  rounded-lg hover:scale-110 transition-all' alt="five" />
                            <div className='absolute text-white text-left p-2 backdrop-blur-sm bg-black/50 group-hover:bottom-0 transition-all -bottom-[6.2rem] w-full'>
                                <h1 className='font-digital text-xl md:text-2xl'>5-Min Rule</h1>
                                <p className='text-body text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque odio eum modi corrupti quo nobis praesentium voluptatum deleniti culpa!</p>   
                            </div>
                        </div>
                    </Link>

                    
                </div>
            </div>

            {/*         Tips....... */}
            <div className='mt-28 justify-center flex flex-col' id='tips'>
                <h1 className='font-digital text-xl font-extrabold  w-max mx-auto md:text-3xl uppercase'>Tips<FontAwesomeIcon icon={faLightbulb} className='mx-2'/></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mt-8 p-2">

                    <Link to={'/excercises'}>
                        <div className='blue rounded-lg cursor-pointer group relative h-96 overflow-hidden w-[19.5rem] md:w-80 border-2 border-black text-center flex flex-col justify-center items-center'>
                            <img src={meditate} className='w-full h-full object-[70%] rounded-lg object-cover hover:scale-110 transition-all' alt="pomodoro" />
                            <div className='absolute text-white text-left p-2 backdrop-blur-sm bg-black/50 group-hover:bottom-0 transition-all -bottom-[6.2rem] w-full'>
                                <h1 className='font-digital text-xl md:text-2xl'>Excercises</h1>
                                <p className='text-body text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque odio eum modi corrupti quo nobis praesentium voluptatum deleniti culpa!</p>   
                            </div>
                        </div>
                    </Link>

                    <Link to={'/routines'}>
                        <div className='black rounded-lg cursor-pointer group relative h-96 overflow-hidden w-[19.5rem] md:w-80 border-2 border-black text-center flex flex-col justify-center items-center'>
                            <img src={goals} className='w-full h-full rounded-lg object-cover  bg-center hover:scale-110 transition-all' alt="matrix" />
                            <div className='absolute text-white text-left p-2 backdrop-blur-sm bg-black/50 group-hover:bottom-0 transition-all -bottom-[6.2rem] w-full'>
                                <h1 className='font-digital text-xl md:text-2xl'>Daily Routine</h1>
                                <p className='text-body text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque odio eum modi corrupti quo nobis praesentium voluptatum deleniti culpa!</p>   
                            </div>
                        </div>
                    </Link>

                    

                    
                </div>
            </div>
        </main>

        {/*                 Footer       */}
        <footer className='p-6 black  mt-16  w-full'>
            <div className='w- mx-auto flex flex-col md:flex-row justify-around font-digital gap-x-4'>
                {/*         Games... */}
                <div className={` my-4 transition-all relative font-digital`}>
                    <h1  className={` text-xl md:text-3xl text-white/80 w-max pb-1 hover:text-white border-b-2 transition-all duration-300 cursor-pointer `}>Cognitive Training <FontAwesomeIcon icon={faGamepad} className='mx-1 md:mx-2' /></h1>
                    <div className={` md:text-xl text-lg mt-4 text-white/80 `} >
                        <Link to={'/schultetable'}><h1 className='hover:text-white my-1 hover:scale-110  duration-300 cursor-pointer transition-all '>Schulte Table</h1></Link>
                        <Link to={'/colourfool'}><h1 className='hover:text-white my-1 hover:scale-110  duration-300 cursor-pointer transition-all '>Colour Fool</h1></Link>
                        <Link to={'/wordzle'}><h1 className='hover:text-white my-1 hover:scale-110  duration-300 cursor-pointer transition-all '>Wordzle</h1></Link>
                        <Link to={'/codebreaker'}><h1 className='hover:text-white my-1 hover:scale-110  duration-300 cursor-pointer transition-all '>Code Breaker</h1></Link>
                        <Link to={'/sudoku'}><h1 className='hover:text-white my-1 hover:scale-110  duration-300 cursor-pointer transition-all '>Sudoku</h1></Link>
                        <Link to={'/trials'}><h1 className='hover:text-white my-1 hover:scale-110  duration-300 cursor-pointer transition-all '>Trials</h1></Link>
                    
                    </div>
                </div>

                {/*     Techniques.... */}
                <div className={` my-4 duration-200  transition-all relative`}>
                    <h1 className={` text-xl md:text-3xl text-white/80 hover:text-white w-max pb-1 border-b-2 transition-all duration-300 cursor-pointer `}>Productivity<FontAwesomeIcon icon={faBook} className='mx-1 md:mx-2' /></h1>
                    <div className={` md:text-xl text-lg mt-4 text-white/80 `} >
                      <Link to={'/pomodoro'}><h1 className='hover:text-white my-1 hover:scale-110  duration-300 cursor-pointer transition-all '>Pomodoro</h1></Link>
                      <Link to={'/matrix'}><h1 className='hover:text-white my-1 hover:scale-110  duration-300 cursor-pointer transition-all '>Eisen Matrix</h1></Link>
                      <Link to={'/caffinenap'}><h1 className='hover:text-white my-1 hover:scale-110  duration-300 cursor-pointer transition-all '>Caffine Nap</h1></Link>
                      <Link to={'/frog'}><h1 className='hover:text-white my-1 hover:scale-110  duration-300 cursor-pointer transition-all '>Eat The Frog</h1></Link>
                      <Link to={'/five'}><h1 className='hover:text-white my-1 hover:scale-110  duration-300 cursor-pointer transition-all '>5-Min Rule</h1></Link>
                    </div>
                  </div>

                  {/*     Tips.... */}
                  <div className={` my-4 duration-200 transition-all relative`}>
                    <h1  className={` text-xl md:text-3xl text-white/80 hover:text-white w-max pb-1 border-b-2 transition-all duration-300 cursor-pointer `}>Tips<FontAwesomeIcon icon={faLightbulb} className='mx-1 md:mx-2' /></h1>
                    <div className={` md:text-xl text-lg mt-4 text-white/80 `} >
                      <Link to={'/excercises'}><h1 className='hover:text-white my-1 hover:scale-110  duration-300 cursor-pointer transition-all '>Excercises</h1></Link>
                      <Link to={'/routines'}><h1 className='hover:text-white my-1 hover:scale-110  duration-300 cursor-pointer transition-all '>Daily Routine</h1></Link>
                      
                    </div>
                  </div>
            </div>
            

        </footer>


    </section>
  )
}

export default Home