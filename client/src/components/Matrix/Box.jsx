import React,{useState}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faCross, faEdit } from '@fortawesome/free-solid-svg-icons'

const Box = ({color,edit,setEdit,egTitle,egTask}) => {

    const [showEdit,setShowEdit]=useState(false)

    
    const handleClick=()=>{
        setShowEdit(e=>!e)
    }

  return (
    <div>
        <div className={`min-w-[12rem] min-h-[12rem] text-center sha-sm w-60 h-60 font-body p-2 md:w-80 md:h-60 lg:w-96 lg:h-80 rounded-lg txt relative`} style={{background:color}}>
            <div className='flex relative text-center justify-center'>
            <span className='absolute top-0 right-0 text-white cursor-pointer group' onClick={()=>handleClick()}><FontAwesomeIcon icon={faEdit} />
                <h1 className='absolute text-white bg-black p-1 rounded-lg z-20 scale-0 transition-all group-hover:scale-100'>Edit</h1>
            </span>
            <h1 className='text-white text-2xl md:text-xl'>{egTitle}</h1>
            </div>
            <h1 className='lg:h-[17.75rem] text-lg h-48 capitalize mb-2 py-2 overflow-y-auto'>{edit?edit?.toString():egTask}</h1>
        </div>

        {/*     EDIT         */}
        <div className={`fixed flex flex-col justify-center items-center top-0 left-0 z-50 h-screen w-screen bg-black/70 transition-all ${showEdit?'opacity-100':'opacity-0 hidden'}`} >
            <div className='p-2 rounded-lg bg-white relative index-50' style={{background:color}}>
                <FontAwesomeIcon icon={faClose} className='absolute text-white right-2'onClick={()=>handleClick()} />
                
                <div className='p-1 m-1' >
                    <h1 className='text-white text-2xl my-2 text-center md:text-xl'>{egTitle}</h1>

                    <textarea cols="30" rows="10" placeholder='Task' className='bg-white/80 rounded-md px-2 py-4 md:w-96 w-60  capitalize  h-80 placeholder:text-gray-600 outline-0'
                    value={edit} onChange={(e)=>setEdit(pre=>(e.target.value))} ></textarea>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Box