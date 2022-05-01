import React,{useEffect, useState}from 'react'

const MathGrid = ({data,clicked,setClicked,found,setFound,check,visible,setVisible,index}) => {
    

    const handleClick=()=>{
        let vis=[...visible]
        console.log(clicked.length)
        if(clicked.length<2){
            setClicked(e=>[...e,data.name])
            vis[index]=1
            setVisible(vis)


            if(clicked.length==1){
                if(clicked[0]==data.name){

                }

            } 
        }

    }

    // useEffect(()=>{
    //     for(let i of found){
    //         if(i==data.name)setVisible(1)
    //         else setVisible(0)
    //     }
    // },[clicked])

    

  return (
    <div className='w-max text-center relative bg-white p-2' onClick={()=>handleClick()}>
        <div className={`bg-white top-0 left-0 absolute h-full w-full ${visible[index]==1&&'h-0'}`}></div>
        <img src={data.img} className='w-32 h-32' alt="" />
    </div>
  )
}

export default MathGrid