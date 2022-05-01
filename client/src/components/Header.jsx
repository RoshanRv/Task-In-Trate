import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useState,useLayoutEffect,useContext}from 'react'
import { Link ,useLocation} from 'react-router-dom'
import { faBars,faClose ,faGamepad ,faBook,faLightbulb} from '@fortawesome/free-solid-svg-icons'
import { GlobalState } from './Context'


const Header = () => {

  const {pathname} = useLocation()
  

  const [showNav,setShowNav]=useState(false)
  const [showMini,setShowMini]=useState(0)

  const [user,setUser] = useContext(GlobalState)

  useLayoutEffect(()=>{
      window.scrollTo({
        top:0,
        left:0,
        behavior:'auto'
      })
  },[pathname])


  return (
    <header id='header' className='fixed top-0 left-0 text-transparent transition-all z-40 w-screen  select-none'>
        <nav className='mx-auto w-screen font-digital px-10 py-2 relative '>
          <div className="w-full flex justify-between items-center">
              <button className='   hover:scale-110 duration-300 transitional-all md:text-xl ' onClick={()=>setShowNav(true)}><FontAwesomeIcon icon={faBars} /></button>
            <Link to={'/'} >
              <h1 className='md:text-3xl text-2xl '>Task-In-Trate</h1>
            </Link>
            <Link to={user?`/${user}`:`/login`}>
              <div className="group  relative flex gap-x-2 items-center ">
                <div className="w-12 h-12 rounded-full bg-purple-300 flex justify-center items-center border-2 border-black/50  group-hover:-translate-x-20 transition-all overflow-hidden shadow-lg shadow-black/40 ">
                  {/* <img src={require('../img/adobe.png')} alt="" className='p-1 w-full h-full '/> */}
                  <h1 className='text-purple-500 capitalize'>{user[0]||'L'}</h1>
                </div>
                <h1 className='translate-x-48 group-hover:-translate-x-10 text-purple-500 transition-all capitalize'>{user?user:'Login'}</h1>
              </div>
            </Link>
          </div>
            

            {/*     Side Nav     */}
            <div className={`fixed h-full text-white sha top-0 ${showNav?'left-0':'-left-full'} transition-all duration-300 bg-white border-r-2 border-white/50 z-50 w-full`} >
              <div className="relative flex flex-col justify-center  items-center h-full p-2">
                <button className='text-black/50  hover:text-black hover:scale-110 duration-300 transitional-all md:text-xl z-10 absolute top-3 right-5' onClick={()=>setShowNav(false)}><FontAwesomeIcon icon={faClose} /></button>
                <div className='mt-16 ' >
                  {/*     Games.... */}
                  <div className={` my-4 ${showMini==1?'h-[calc(2.5rem*6)]':'h-10 '} transition-all relative`}>
                    <h1 onClick={()=>setShowMini(e=>e==1?0:1)}  className={`${showMini==1&&'border-b-2 border-transparent/50 hover:border-black'} text-xl md:text-3xl text-transparent/50 hover:text-black hover:scale-110 transition-all duration-300 cursor-pointer `}>Cognitive Training <FontAwesomeIcon icon={faGamepad} className='mx-1 md:mx-2' /></h1>
                    <div className={` md:text-xl text-lg mt-4 text-transparent/50 ${showMini==1?'opacity-100':'opacity-0 '}`}onClick={()=>setShowNav(false)} >
                      <Link to={'/schultetable'}><h1 className='hover:text-black my-1 hover:scale-110  duration-300 cursor-pointer transition-all '>Schulte Table</h1></Link>
                      <Link to={'/colourfool'}><h1 className='hover:text-black my-1 hover:scale-110  duration-300 cursor-pointer transition-all '>Colour Fool</h1></Link>
                      <Link to={'/wordzle'}><h1 className='hover:text-black my-1 hover:scale-110  duration-300 cursor-pointer transition-all '>Wordzle</h1></Link>
                      <Link to={'/codebreaker'}><h1 className='hover:text-black my-1 hover:scale-110  duration-300 cursor-pointer transition-all '>Code Breaker</h1></Link>
                      <Link to={'/sudoku'}><h1 className='hover:text-black my-1 hover:scale-110  duration-300 cursor-pointer transition-all '>Sudoku</h1></Link>
                      <Link to={'/trials'}><h1 className='hover:text-black my-1 hover:scale-110  duration-300 cursor-pointer transition-all '>Trials</h1></Link>
                      
                    </div>
                  </div>

                  {/*     Techniques.... */}
                  <div className={` my-4 duration-200 ${showMini==2?'h-[calc(2.5rem*6)]':'h-10 '} transition-all relative`}>
                    <h1 onClick={()=>setShowMini(e=>e==2?0:2)}  className={`${showMini==2&&'border-b-2 border-transparent/50 hover:border-black'} text-xl md:text-3xl text-transparent/50 hover:text-black hover:scale-110 transition-all duration-300 cursor-pointer `}>Productivity<FontAwesomeIcon icon={faBook} className='mx-1 md:mx-2' /></h1>
                    <div className={` md:text-xl text-lg mt-4 text-transparent/50 ${showMini==2?'opacity-100':'opacity-0 '}`}onClick={()=>setShowNav(false)} >
                      <Link to={'/pomodoro'}><h1 className='hover:text-black my-1 hover:scale-110  duration-300 cursor-pointer transition-all '>Pomodoro</h1></Link>
                      <Link to={'/matrix'}><h1 className='hover:text-black my-1 hover:scale-110  duration-300 cursor-pointer transition-all '>Eisen Matrix</h1></Link>
                      <Link to={'/caffinenap'}><h1 className='hover:text-black my-1 hover:scale-110  duration-300 cursor-pointer transition-all '>Caffine Nap</h1></Link>
                      <Link to={'/frog'}><h1 className='hover:text-black my-1 hover:scale-110  duration-300 cursor-pointer transition-all '>Eat The Frog</h1></Link>
                      <Link to={'/five'}><h1 className='hover:text-black my-1 hover:scale-110  duration-300 cursor-pointer transition-all '>5-Min Rule</h1></Link>
                    </div>
                  </div>

                  {/*     Tips.... */}
                  <div className={` my-4 duration-200 ${showMini==3?'h-[calc(2.5rem*6)]':'h-10 '} transition-all relative`}>
                    <h1 onClick={()=>setShowMini(e=>e==3?0:3)} className={`${showMini==3&&'border-b-2 border-transparent/50 hover:border-black'} text-xl md:text-3xl text-transparent/50 hover:text-black hover:scale-110 transition-all duration-300 cursor-pointer `}>Tips<FontAwesomeIcon icon={faLightbulb} className='mx-1 md:mx-2' /></h1>
                    <div className={` md:text-xl text-lg mt-4 text-transparent/50 ${showMini==3?'opacity-100':'opacity-0 '}`}onClick={()=>setShowNav(false)} >
                      <Link to={'/excercises'}><h1 className='hover:text-black my-1 hover:scale-110  duration-300 cursor-pointer transition-all '>Excercises</h1></Link>
                      <Link to={'/routines'}><h1 className='hover:text-black my-1 hover:scale-110  duration-300 cursor-pointer transition-all '>Daily Routine</h1></Link>
                      
                    </div>
                  </div>

                </div>
              </div>
            </div>
            
        </nav>
    </header>
  )
}

export default Header