import React,{useEffect,useState}from 'react'

const Fool = ({name,color,currentColor,index}) => {

  const [col,setCol]=useState('white')

  useEffect(()=>{


    if(currentColor==index){

      setCol(color)
    }else{
      setCol('white')
    }

  },[currentColor])

  return (
    <div className=' '>
        <h1 className='md:text-3xl capitalize' style={{color:col}}>{name}</h1>
    </div>
  )
}

export default Fool