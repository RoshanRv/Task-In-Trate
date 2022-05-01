import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useEffect, useState,useRef}from 'react'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import music1 from '../../img/music1.mp3'
import music2 from '../../img/music2.mp3'
import music3 from '../../img/music3.mp3'
import music4 from '../../img/music4.mp3'
import game1 from '../../img/game1.mp3'
import game2 from '../../img/game2.mp3'
import game3 from '../../img/game3.mp3'

const Player = ({showSong,setShowSong}) => {

    const songs=[music1,music2,music3,music4]
    const games=[game1,game2,game3]

    const [type,setType]=useState(0)
    
    const [isPlaying,setIsPlaying]=useState(0)


    const handleClick=()=>{
        if(showSong){
            clearTimeout(showSong)
        }
        setShowSong(true)

        const hide = setTimeout(()=>{
            setShowSong(false)
        },5000)

        setShowSong(hide)

    }

    let track

    
    const loadSong=()=>{
        track = document.getElementById('aud')
        if(type==0){
            track.src = songs[Math.floor(Math.random()*songs.length)]
        }else{
            track.src = games[Math.floor(Math.random()*games.length)]
        }
        track.load()
    }
    

    const handlePlay=()=>{
        console.log(isPlaying)
        if(isPlaying==0){
            loadSong()
            track.play()
            setIsPlaying(1)
            track.addEventListener('ended',()=>{
                setIsPlaying(0)
                handlePlay()
            })
        }else if(isPlaying==1){
            track = document.getElementById('aud')
            track.pause()
            setIsPlaying(2)
        }else if(isPlaying==2){
            track = document.getElementById('aud')
            track.play()
            setIsPlaying(1)
        }
        
    }

    const handleChange=(e)=>{
        setType(e.target.value)
        track = document.getElementById('aud')
        track.pause()
        setIsPlaying(0)
    }


    
  return (
    <div className={`md:p-4 p-2 shadow-lg bg-white font-body  ${showSong?'right-0 opacity-100 ':'-right-40 opacity-50'} transition-all top-20 z-50 rounded-full fixed cursor-pointer flex`} onClick={()=>handleClick()}>
        <FontAwesomeIcon icon={isPlaying==1?faPause:faPlay} onClick={()=>{handlePlay()}} className='text-white  text-xl p-2 md:p-3 px-3 md:px-4 rounded-full bg-violet-600'/>
        <audio id='aud'></audio>
        <select value={type} onChange={(e)=>handleChange(e)} className='mx-4 px-2 outline-0 border-b-2 border-violet-600'>
            <option value={0}>Calm</option>
            <option value={1}>Video Game</option>
        </select>
    </div>
  )
}

export default Player