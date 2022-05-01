import React,{useEffect,useState}from 'react'
import meditate from '../../img/meditate.jpeg'
import med from '../../img/med.jpeg'
import book from '../../img/book.jpeg'
import listen from '../../img/listen.jpeg'
import run from '../../img/run.jpeg'

const Excercies = () => {



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

  return (
    <section className='font-body exercise'>
        {/*         HERO         */}

        <div className=" h-screen hero-img w-full relative">  
            <div className='bg-fixed  h-full object-cover hero-img w-full ' style={{backgroundImage:`url(${meditate})`,backgroundPosition:'70%'}}> 
            
            </div>
            <div className="bg-black/70 absolute bg-fixed -top-full left-0 w-full min-h-screen md:h-screen cover "></div>
            <div className='bg-fixed font-digital text-3xl font-bold text-white  absolute left-1/2 -translate-x-1/2 hero-head -translate-y-1/2 -top-1/2 p-4 md:text-6xl'>
                <h1 className="my-2">Excercises To</h1>
                <h1 className="my-2">Improve Concetration</h1>
                
            </div>
            
        </div>

        <div className=' min-h-screen md:h-screen   w-full '>
            <div className='bg-fixed h-full text-center bg-cover flex flex-col justify-between py-4 w-fll bg-center' style={{backgroundImage:`url(${book})`}}>  
                <h1 className='font-digital text-2xl md:text-4xl  mb-2 text-white p-4 bg-black/60'>Read Books</h1>
                <div className='text-lg md:text-2xl bg-white text-left mx-4 mb-10 mt-40 p-4'>
                    <p className=' '>Books with a high word count require a lot of sustained focus for long periods of time. Consider recalling the plot and character attributes after finishing each chapter. Using your knowledge of the story, decide the best way it could continue. Write those plot points down and assess your decisions. Engaging with a story can be an exciting way to increase your concentration, learn how to process complex information and decide whether that information is helpful or relevant.</p>
                </div>
                
            </div>
        </div>

        <div className=' min-h-screen md:h-screen   '>
            <div className='bg-fixed  text-center h-full max-w-full flex flex-col justify-between py-4 bg-cover bg-center bg-no-repeat ' style={{backgroundImage:`url(${listen})` ,
               backgroundSize:' coer'}}>  
                <h1 className='font-digital text-2xl md:text-4xl  mb-2 capitalize text-white p-4 bg-black/60'>Practice attentive listening</h1>
                <div className='text-lg mx-4 md:text-2xl bg-white text-left mb-10 mt-40 p-4'>
                    <p className=' my-2'>If there's one place our limited attention span is incredibly noticeable, it's when we're talking to others. Instead of grasping at straws during a conversation, practice attentive listening by not interrupting, recapping what the other person has said regularly, and using connecting words like "OK," "I get it," and "Yes" to stay engaged and show that you're listening.</p>

                    <p className='my-2'>These skills not only help us come across as nicer, more interesting people, they also help train our minds to focus on the person in front of us.</p>
                </div>
                
            </div>
        </div>

        <div className=' min-h-screen md:h-screen   '>
            <div className='bg-fixed  text-center h-full max-w-full flex flex-col justify-between py-4 bg-cover bg-center bg-no-repeat ' style={{backgroundImage:`url(${med})` ,
               backgroundSize:' coer'}}>  
                <h1 className='font-digital text-2xl md:text-4xl  mb-2 capitalize text-white p-4 bg-black/60'>Meditate</h1>
                <div className='text-lg mx-4 md:text-2xl bg-white text-left mb-10 mt-40 p-4'>
                    <p className=' my-2'>Meditation is a bodily practice that can help you learn how to focus your attention and remain calm. Meditation techniques often involve regulating your breath and observing your thoughts. To meditate, try sitting down in a quiet location. Set a timer for five minutes and observe your breathing. This practice can help you regulate your emotional responses and better understand how you think, which can help you learn how to concentrate on a task.</p>
                </div>
                
            </div>
        </div>

        <div className=' min-h-screen md:h-screen   '>
            <div className='bg-fixed  text-center h-full max-w-full flex flex-col justify-between py-4 bg-cover bg-center bg-no-repeat ' style={{backgroundImage:`url(${run})` ,
               backgroundSize:' coer'}}>  
                <h1 className='font-digital text-2xl md:text-4xl  mb-2 capitalize text-white p-4 bg-black/60'>Excercise Your Body</h1>
                <div className='text-lg mx-4 md:text-2xl bg-white text-left mb-10 mt-40 p-4'>
                    <p className=' my-2'>Strength training and other forms of exercise can help you develop discipline and feel more energized. These attributes can help you sustain focus, particularly during a high-concentration event or job interview. Try dedicating 15 or 30 minutes a day to a physical activity you enjoy doing. This can be a walk around a certain location or perhaps dancing to a favorite song.</p>
                </div>
                
            </div>
        </div>


    </section>
  )
}

export default Excercies