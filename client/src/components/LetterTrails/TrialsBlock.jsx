import React from 'react'

const TrialsBlock = ({ind,jind,letters,setAns,ans}) => {

    const handleClick=(e)=>{
        let arr=[...ans]
        arr.splice(jind,1,e.target.innerHTML)
        setAns(arr)
    }

  return (
    <div>
        <h1 onClick={(e)=>handleClick(e)} className={`font-clock md:w-16 w-12 h-12 md:h-16 black text-lg  text-white md:text-xl flex justify-center items-center m-2 rounded-full border-4 cursor-pointer ${ans[jind]==letters[ind][jind]&&'border-yellow-300'} `}>{letters[ind][jind]}</h1>
    </div>
  )
}

export default TrialsBlock