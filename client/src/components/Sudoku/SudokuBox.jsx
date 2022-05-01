import React,{useState,useEffect}from 'react'

const SudokuBox = ({value,row,col,setSudo,sudo,check,soln,difficulty}) => {

    const [ques,setQues]=useState(0)
    const [incorrect,setIncorrect]=useState(0)

    useEffect(()=>{
        // console.log(sudo[row][col],value)
        
        
    },[difficulty])

    useEffect(()=>{
        setQues(0)
        if(value>0){
            setQues(1)
            // console.log(value,row,col)

        }
    },[soln])



    useEffect(()=>{
        if(check==1){
            if(soln[row][col]!=sudo[row][col])setIncorrect(1)
            else setIncorrect(2)
        }if(check==0)setIncorrect(0)

    },[check])

    const handleChange=(e)=>{
        let val = e.target.value.split('')
        let chngSudo = [...sudo]
        chngSudo[row][col]=val.splice(-1)
        setSudo(chngSudo)
    }
  return (
      <div className='md:text-xl text-lg '>
        {ques==1&&<div className={`p-2 w-8 md:w-12 md:h-12 h-8 flex items-center  bg-white justify-center border-2 border-black shadow-lg sha-sm`}>{value}</div>}
        {ques==0&&<input type='number' min={1} max={9} maxLength={1} value={sudo[row][col]} onChange={(e)=>handleChange(e)} className={`p-2 w-8 md:w-12 md:h-12 h-8 text-center border-black/50 outlne-0  border-2  outline-yellow-600  caret-transparent ${incorrect==1?'bg-red-400':incorrect==2?'bg-green-500':'bg-white/70'}`}/>}
    </div>
  )
}

export default SudokuBox