import React,{useEffect}from 'react'

const WordBlock = ({setAns,ans,index,setCurrentPos,result,currentPos,submit}) => {

    const handleChange=(e)=>{
        // let value = e.target.value.split('')
        // let testarr=[...ans]
        // testarr.splice(index,1,value[(value.length)-1])
        // setAns(testarr)
    }

    const handleKeyUp=(e)=>{

        if(e.keyCode>=65&&e.keyCode<=90){
            // console.log(e.keyCode)
            let testarr=[...ans]
            testarr.splice(currentPos,1,e.key)
            setAns(testarr)
            if(index<4)setCurrentPos(index+1)

        }else if(e.key=='ArrowLeft')setCurrentPos(index)
        else if(e.key=='ArrowRight')setCurrentPos(index)
        else if(e.key=='Backspace'){
            let testarr=[...ans]
            testarr.splice(currentPos,1,'')
            setAns(testarr)
        }else if(e.key=='Enter')submit()

        
    }

    


  return (
    <div>
        <input type="text" id={index}  onChange={(e)=>handleChange(e)} value={ans[index]}  className={`outline-0 w-12 h-12 md:w-16 md:h-16  text-center caret-transparent borer-2 md:text-2xl text-lg text-white transition-colors mx-1 ${result[index]==1?'bg-green-600':result[index]==2?'bg-yellow-400':result[index]==3?'bg-red-600':'violet'} rounded-xl capitalize sha-sm ${currentPos==index&&'border-4'} `} onClick={()=>setCurrentPos(index)} onKeyUp={(e)=>handleKeyUp(e)}/>
    </div>
  )
}

export default WordBlock