import React,{useState,useEffect}from 'react'

const Cell = ({data,begin,setBegin,setIsLost,isStart,handleTimer,isLost}) => {
    const [incorrect,setIncorrect]=useState(0)
    const [rand,setRand]=useState(0)
    let color=['tomato','springgreen','royalblue','gold','black','saddlebrown','hotpink','orange']
    
    const  handleClick=()=>{
        if(isStart){
            if(data!=begin){
                setIsLost(1)
                setIncorrect(1)
                handleTimer()
            }
            else setBegin(e=>e+1)
        }  
    }
    
    useEffect(()=>{
        setTimeout(()=>{
            setIncorrect(0)
        },500)
    },[setIsLost,isLost])
    
    useEffect(()=>{
        setRand(Math.floor(Math.random()*color.length))
    },[])

  return (
    <div className={`w-max border-2 box-border active:bg-green-500 m-1 sha-sm border-black ${incorrect?'bg-red-500':'bg-white'} font-body ${isStart&&'cursor-pointer'}`} onClick={()=>handleClick()}>
        <div className="md:w-20 w-12 h-12 md:text-3xl text-xl  md:h-20 text-center flex items-center justify-center">
            <p style={{color:color[rand]}}>{data}</p>
        </div>
    </div>
  )
}

export default Cell