import React, { useEffect, useRef, useState } from 'react'
import Tasks from './Tasks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { faAdd} from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import Quotes from '../Quotes/Quotes'
import QuotesGenerator from '../Quotes/QuotesGenerator'
import Info from '../Info/Info'


const Frog = () => {

  const [tasks,setTasks]=useState([{title:'hard',task:[]},{title:'mid',task:[]},{title:'easy',task:[]}])
  const dragNode = useRef()
  const isDragging = useRef()
  const [addTask,setAddTask]=useState(-1)
  const [newTask,setNewTask]=useState('')
  const [isDelete ,setIsDelete]=useState(false)

  const quote = useState(QuotesGenerator())


  //          HEADER      

  window.addEventListener('scroll',(e)=>{
    let top = document.documentElement.scrollTop
    let h = window.screen.height

    if(top>=20){
        const header = document.getElementById('header')
        header.classList.add('bg-white')
        header.classList.remove('bg-transparent')
        header.classList.add('shadow-lg')
        header.classList.add('text-black')
        header.classList.remove('text-white')
        header.classList.remove('text-transparent')


    }
    if(top<20){
        const header = document.getElementById('header')
        header.classList.add('bg-transparent')
        header.classList.remove('bg-white')
        header.classList.add('text-white')
        header.classList.add('shadow-lg')
        header.classList.remove('text-black')
        header.classList.remove('text-transparent')

    }
})

useEffect(()=>{
  let top = document.documentElement.scrollTop
  if(top>20){
      const header= document.getElementById('header')
      header.classList.add('shadow-lg')
      header.classList.add('text-black')
  }else{
      const header= document.getElementById('header')
      header.classList.add('shadow-lg')
      header.classList.add('text-white')
  }

},[])

  useEffect(()=>{
    const task = JSON.parse(localStorage.getItem('tasks'))
    if(task){
      setTasks(task)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks])


  const handleDragOver=(e,p)=>{

    if(dragNode.current.gi!=p.gi || dragNode.current.di!=p.di){
        const current  = dragNode.current
        
        setTasks(e=>{
            const tasks = JSON.parse(JSON.stringify(e))
            tasks[p.gi].task.splice(p.di,0,tasks[current.gi].task.splice(current.di,1))
            dragNode.current = p
            return tasks
        })
    }
    
  }

  const handleAdd=(e)=>{
      setTasks(pre=>{
        let list = JSON.parse(JSON.stringify(pre))
        list[addTask].task.push(newTask)
        setNewTask('')
        setAddTask(-1)
        return list
      })
  }

  const handleTrash=(e)=>{
    let current= dragNode.current
    setTasks(pre=>{
      let list = JSON.parse(JSON.stringify(pre))
      list[current.gi].task.splice(current.di,1)
      setIsDelete(false)
      return list
    })
  }

  return (
    <section className='min-h-screen flex flex-col  font-body items-center green'>
        <h1 className="font-digital text-white text-2xl md:text-3xl my-4 mt-24 ">EAT THE FROG<Info info={'fasnda sdka jsdo  aksdkoasdoasdoais jdoaisdj aosijdo asijd doai  skmno asd  mo asid aos asdk asodas dnasdkmn asodkas modaims doiasmn asodmnomn askdnaskl'} /> </h1>
          <div className='md:p-2 bg-white  rounded-lg md:min-w-[20rem] w-[18rem] txt min-w-[16rem] mt-10 sha'>
            <div className="flex justify-between px-2 ">
            <h1 className="font-digital text-center text-xl md:text-2xl">Tasks</h1>
            <button id='trash' className='text-red-600 text-lg' onDragEnter={(e)=>setIsDelete(true)}><FontAwesomeIcon icon={faTrashCan}/></button>
            </div>
          {tasks.map((group,gi)=>
          (<div className='bg-yellow-300 rounded-lg m-1 p-2' onDragEnter={(e)=>!group.task.length&&handleDragOver(e,{gi,di:0})} key={gi}>
              <div className="flex justify-between p-1 text-center ">
                <h1 className='uppercase bg-yellow-200 w-full mx-2 rounded-lg p-1'>{group.title}</h1>
                <button className='bg-yellow-200 rounded-lg px-2' onClick={()=>setAddTask(gi)}><FontAwesomeIcon icon={faAdd}/></button>
              </div>
                
                  <div>
                    {group.task.length?(group.task.map((data,di)=><Tasks key={di} data={data} dragItem={true} di={di} gi={gi} dragNode={dragNode} setTasks={setTasks} isDragging={isDragging}/>)):<Tasks key={gi} data={'Write Down A Task...'} dragItem={false}/>}
                  </div>  
            </div>))}
          </div>
        <Quotes quote={quote}/>


         { /*     EDIT         */}
        <div className={`fixed flex flex-col justify-center items-center top-0 left-0 z-50 h-screen w-screen bg-black/70 transition-all ${addTask>-1?'opacity-100':'opacity-0 hidden'}`} >
            <div className='p-2 rounded-lg bg-yellow-300 relative index-50 text-center' >
                <FontAwesomeIcon icon={faClose} className='absolute t cursor-pointer right-2'onClick={()=>setAddTask(-1)} />
                
                <div className='p-1 m-1' >

                    <textarea cols="30" rows="10" placeholder='Task...' className=' rounded-md px-2 py-4 md:w-96 w-60  capitalize  h-40 placeholder:text-gray-600 outline-0'onChange={(e)=>setNewTask(e.target.value)} value={newTask}
                      ></textarea>
                </div>
                <button className='mx-auto px-2 py-1 rounded-lg bg-green-400 text-center' onClick={()=>handleAdd()}>Add Task</button>

            </div>
        </div>

        { /*     DELETE MODEL         */}
        <div className={`fixed flex flex-col justify-center items-center top-0 left-0 z-50 h-screen w-screen bg-black/70 transition-all ${isDelete?'opacity-100':'opacity-0 hidden'}`} >
            <div className='p-2 rounded-lg bg-white relative index-50' >
              <div className="bg-yellow-300 p-2">
                <h1 className='p-2 text-lg my-2 capitalize'>Are You Sure? You Want to Delete Task '{tasks[dragNode.current?.gi]?.task[dragNode.current?.di]}'</h1>
                <div className="flex justify-around">
                  <button  className=' px-2 py-1 rounded-md mx-2 bg-green-400 text-center' onClick={()=>setIsDelete(false)}>Cancel</button>
                  <button  className=' px-2 py-1 rounded-md mx-2 bg-green-400 text-center' onClick={()=>handleTrash()}>Delete</button>
                </div>
              </div>
            </div>
        </div>
            
    </section>
  )
}

export default Frog