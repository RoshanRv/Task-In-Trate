import React,{useEffect}from 'react'
import productive from '../../img/productive.jpeg'
import breakfast from '../../img/breakfast.jpeg'
import run from '../../img/run.jpeg'
import goals from '../../img/goals.jpeg'
import wake from '../../img/wake.jpeg'
import review from '../../img/review.png'

const Routine = () => {


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
    <section className='font-body routine'>
        {/*         HERO         */}

        <div className=" h-screen w-full">  
            <div className='bg-fixed  h-full object-cover bg-center w-ful bg-no-repeat' style={{backgroundImage:`url(${productive})`}}> 
            
            </div>
            <div className="bg-black/70 absolute bg-fixed -top-full left-0 w-full min-h-screen md:h-screen cover "></div>
            <div className='bg-fixed font-digital text-3xl font-bold text-white  absolute left-1/2 -translate-x-1/2 hero-head -translate-y-1/2 -top-1/2 p-4 md:text-6xl'>
                <h1 className="my-2">Daily Routine To</h1>
                <h1 className="my-2">Become More Productive</h1>
            </div>

        </div>
        {/*             MORN         */}
        <div className=' min-h-screen md:h-screen  w-full '>
            <div className='bg-fixed h-full text-center bg-cover flex flex-col justify-between py-4 w-fll bg-center' style={{backgroundImage:`url(${wake})`}}>  
                <h1 className='font-digital text-2xl md:text-4xl capitalize  mb-2 text-white p-4 bg-black/60'>wake up early</h1>
                <div className='text-lg md:text-2xl bg-white text-left mx-4 mb-10 mt-40 p-4'>
                    <p className=' '>For the students who have to start classes before 8 AM, this sounds demanding, but having the time to fuel your body and accomplish tasks right away sets a positive tone for the entire day.</p>
                    <p className=' '>Many successful students choose to wake up between 5 am, and 6 AM to block out plenty of time and start working before the rest of the world, but the right time to wake up also depends on the time you go to sleep and the time you start classes.</p>
                    <p className=' '>The most important thing is to make sure you’re consistent since your body sets its internal rhythms based on consistency — if you wake up at 5 AM every day and go to bed at 10 PM every night, you should feel just as good as someone who wakes up at 8 AM every day and goes to sleep at midnight.</p>
                </div>
                
            </div>
        </div>

        <div className=' min-h-screen md:h-screen   '>
            <div className='bg-fixed  text-center h-full max-w-full flex flex-col justify-between py-4 bg-cover bg-center bg-no-repeat ' style={{backgroundImage:`url(${breakfast})` ,
               backgroundSize:' coer'}}>  
                <h1 className='font-digital text-2xl md:text-4xl  mb-2 capitalize text-white p-4 bg-black/60'>Eat a healthy breakfast.</h1>
                <div className='text-lg mx-4 md:text-2xl bg-white text-left mb-10 mt-40 p-4'>
                    <p className=' my-2'>Eating breakfast provides you the fuel necessary to get through a morning of classes. Pick foods with protein, nutrients, and fiber, like oatmeal with nut butter, or avocado toast, or a smoothie full of fruits and veggies.</p>

                    <p className='my-2'>You can also make yourself some coffee or green tea as an antioxidant-packed alternative if you’re feeling drowsy.</p>
                </div>
                
            </div>
        </div>

        <div className=' min-h-screen md:h-screen   '>
            <div className='bg-fixed  text-center h-full max-w-full flex flex-col justify-between py-4 bg-cover bg-center bg-no-repeat ' style={{backgroundImage:`url(${run})` ,
               backgroundSize:' coer'}}>  
                <h1 className='font-digital text-2xl md:text-4xl  mb-2 capitalize text-white p-4 bg-black/60'>Take time to exercise.</h1>
                <div className='text-lg mx-4 md:text-2xl bg-white text-left mb-10 mt-40 p-4'>
                    <p className=' my-2'>Stretching and moving your body helps wakes you up, and exercising in the morning will keep you energized all day. If you don’t want to head to the gym, a brisk run around the block, a floor workout, or some yoga stretches are all great alternatives to keep you in shape.</p>
                </div>
                
            </div>
        </div>

        <div className=' min-h-screen md:h-screen   '>
            <div className='bg-fixed  text-center h-full max-w-full flex flex-col justify-between py-4 bg-cover bg-center bg-no-repeat ' style={{backgroundImage:`url(${goals})` ,
               backgroundSize:' coer'}}>  
                <h1 className='font-digital text-2xl md:text-4xl  mb-2 capitalize text-white p-4 bg-black/60'>Set Daily Goals</h1>
                <div className='text-lg mx-4 md:text-2xl bg-white text-left mb-10 mt-40 p-4'>
                    <p className=' my-2'>The best way to maximize your day is to set a few short goals — is there an assignment you’d like to get done by the end of the day, or a paper you want to outline, or a quiz you want to ace? Look over the day ahead and pick out key tasks you’d like to focus on. Jot these down in your planner so you don’t forget to complete them by the end of the day.</p>
                    <p className=' my-2'>These goals don’t have to be academic either — maybe you want to attend a club meeting for the first time, or network with someone on campus. Thinking deliberately about where you want the day to take you will help you avoid getting bored or overwhelmed.</p>
                </div>
                
            </div>
        </div>

        <div className=' min-h-screen md:h-screen   '>
            <div className='bg-fixed  text-center h-full max-w-full flex flex-col justify-between py-4 bg-cover bg-center bg-no-repeat ' style={{backgroundImage:`url(${review})` ,
               backgroundSize:' coer'}}>  
                <h1 className='font-digital text-2xl md:text-4xl  mb-2 capitalize text-white p-4 bg-black/60'>Review your notes. </h1>
                <div className='text-lg mx-4 md:text-2xl bg-white text-left mb-10 mt-40 p-4'>
                    <p className=' my-2'>Take some time before class starts to study your notes from the past few days. Synthesize the most important information by copying it down, then quiz yourself on key concepts and identify areas where you’re still confused. You can also jot down follow up questions to ask in class. Reviewing these notes will prime your brain with key concepts, and you’ll probably find it easier to pay attention in class.</p>
                    
                </div>
                
            </div>
        </div>

        {/*                 Eve              */}

       


    </section>
  )

}

export default Routine