import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const Info = ({info}) => {
  return (
    <div className='group relative inline-block '>
        <FontAwesomeIcon icon={faCircleInfo} className=' m-1 mx-2 rounded-full md:text-lg text-lg ' />
        <div className='scale-0 absolute txt z-50 -translate-x-1/2 font-body text-center  group-hover:scale-100 transition-all bg-black/80 text-white text-sm md:text-md'>
            <p className=' w-[50vw] break-words  p-2' >{info}</p>
        </div>
        

    </div>
  )
}

export default Info