import Box from "./Box"
import { useEffect, useState } from "react"
import Quotes from "../Quotes/Quotes"
import QuotesGenerator from "../Quotes/QuotesGenerator"
import Info from "../Info/Info"

const Matrix=()=>{
    const [green,setGreen]=useState()
    const [red,setRed]=useState()
    const [blue,setBlue]=useState()
    const [yellow,setYellow]=useState()

    const quote = useState(QuotesGenerator())


    useEffect(()=>{

        let notes = JSON.parse(localStorage.getItem('notes'))
        if(notes){
            setGreen(notes[0])
            setRed(notes[1])
            setBlue(notes[2])
            setYellow(notes[3])
        }

        

    },[])

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
        
        let store=[green,red,blue,yellow]
        localStorage.setItem('notes',JSON.stringify(store))
        console.log(store)

    },[green,red,blue,yellow])

    return(
        <section id='sect' className="flex flex-col  items-center min-h-screen black  relative">
            {/*               Title              */}
            <h1 className="text-white text-2xl md:text-3xl mt-16 md:mt-24 mb-4 font-digital">Eisen Hower Matrix<Info info={'fasnda sdka jsdo  aksdkoasdoasdoais jdoaisdj aosijdo asijd doai  skmno asd  mo asid aos asdk asodas dnasdkmn asodkas modaims doiasmn asodmnomn askdnaskl'} /> </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-max m-2 md:m-4 ">
                <Box color={'#66FF66'} edit={green} setEdit={setGreen} egTitle={'Do It'} egTask={'Important!!!'} />
                <Box color={'#76D7EA'} edit={blue} setEdit={setBlue}  egTitle={'Schedule It'} egTask={'Not So Important'}  />
                <Box color={'#FFDF46'} edit={yellow} setEdit={setYellow}  egTitle={'Delegate It'} egTask={'Not Important'} />
                <Box color={'#FF355E'} edit={red} setEdit={setRed}  egTitle={'Delete It'} egTask={'Useless'} />
            </div>
        <Quotes quote={quote}/>

        </section>
    )
}

export default Matrix