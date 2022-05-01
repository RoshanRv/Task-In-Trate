import React from 'react'

const Quotes = ({quote}) => {


  return (
    <div className='mt-8 mb-4 mx-2 md:mx-4 '>
        <div className="border-4 p-2 md:p-4 border-white text-center font-quote">
            <p className='text-white select-black text-3xl capitalize md:text-5xl ' >“ {quote} ”</p>
        </div>
    </div>
  )
}

export default Quotes