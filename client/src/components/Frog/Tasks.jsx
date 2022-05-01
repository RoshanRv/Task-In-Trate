import React,{useState}from 'react'

const Tasks = ({data,gi,di,dragNode,isDragging,setTasks,dragItem}) => {


    const [drag,setDrag]=useState(false)

    const handleDrag=(e,p)=>{
        dragNode.current = p
        isDragging.current=true
        setDrag(true)
    }

    const handleDragEnd=(e,p)=>{
        e.preventDefault()
        // dragNode.current = null
        // isDragging.current=false
        setDrag(false)

    }
    
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


  return (
    <div  className={`px-2 py-1  bg-white text-center  txt capitalize rounded-md ${dragItem&&"cursor-move"} m-2 drag`} draggable={dragItem} onDragStart={(e)=>handleDrag(e,{gi,di})} onDragEnter={(e)=>isDragging.current&&handleDragOver(e,{gi,di})} onDragEnd={(e)=>handleDragEnd(e,{gi,di})}>
        <h1 className='txt '>{data}</h1>
    </div>
  )
}

export default Tasks