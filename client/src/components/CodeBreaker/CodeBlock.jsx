import React from 'react'

const CodeBlock = ({setAns,ans,index,res,currentPos,setCurrentPos}) => {
    const min=0
    const max=9


    const handleChange=(e)=>{
        let value = e.target.value.split('')
        let testarr=[...ans]
        testarr.splice(index,1,value[(value.length)-1])
        setAns(testarr)

    }

    const handleClick=()=>{
        setCurrentPos(index)
        console.log(index,currentPos)
    }

  return (
    <div className='w-max'>
        <div>
            <input type="number" id={index} min={min} max={max} maxLength={1} onChange={(e)=>handleChange(e)} value={ans[index]} className={`${res[index]==1?'text-green-500':res[index]==2?'text-yellow-300':res[index]==3?'text-red-500':'text-white'} caret-transparent bg-transparent p-1 md:p-2 md:text-2xl pr-2 outline-0 border-b-4 border-black ${currentPos==index&&'border-white'}`} onClick={()=>handleClick()}/>
        </div>
    </div>
  )
}

export default CodeBlock