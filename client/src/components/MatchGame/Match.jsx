import React,{useState,useEffect} from 'react'
import youtube from '../../img/youtube.png'
import aws from '../../img/aws.png'
import microsoft from '../../img/microsoft.png'
import adobe from '../../img/adobe.png'
import discord from '../../img/discord.png'
import edge from '../../img/microsoft-edge.png'
import play from '../../img/google-play.png'
import amazon from '../../img/amazon.png'
import MathGrid from './MathGrid'

const Match = () => {

    const [tiles,setTiles]=useState([])
    const [clicked,setClicked]=useState([])
    const [found,setFound]=useState([])
    let arr = Array(16).fill(0)
    const [visible,setVisible]=useState(arr)


    const logo=[
        {name:'youtube',
        img:youtube},
        {name:'youtube',
        img:youtube},
        {name:'amazon',
        img:amazon},
        {name:'amazon',
        img:amazon},
        {name:'discord',
        img:discord},
        {name:'discord',
        img:discord},
        {name:'aws',
        img:aws},
        {name:'aws',
        img:aws},
        {name:'play',
        img:play},
        {name:'play',
        img:play},
        {name:'adobe',
        img:adobe},
        {name:'adobe',
        img:adobe},
        {name:'edge',
        img:edge},
        {name:'edge',
        img:edge},
        {name:'microsoft',
        img:microsoft},
        {name:'microsoft',
        img:microsoft},
]

    useEffect(()=>{ 
        let arr=[...logo]
        let arrange=[]
        for(let i=0;i<16;i++){
            let rand = Math.floor(Math.random()*(arr.length-1))
            arrange.push(arr[rand])
            arr.splice(rand,1)
        }
        setTiles(arrange)

    },[])

    const check=()=>{
        console.log(clicked)
        setClicked([])
    }


  return (
    <section className='min-h-screen flex flex-col justify-center items-center bg-sky-300'>
        <div className='grid grid-cols-4 text-center mx-auto w-max gap-12'>
            {tiles.map((data,p)=><MathGrid data={data} key={p} setClicked={setClicked} clicked={clicked} found={found} check={check} setFound={setFound}
            visible={visible} setVisible={setVisible} index={p}/>)}
        </div>
    </section>
  )
}

export default Match