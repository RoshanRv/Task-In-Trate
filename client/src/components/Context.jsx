import React,{createContext,useState} from 'react'

export const GlobalState  =createContext()

const Context = ({children}) => {

    const [user,setUser]=useState(()=>{
        const user = JSON.parse(localStorage.getItem('username'))
        return user||undefined
    })

  return (
    <GlobalState.Provider value={[user,setUser]}>
        {children}
    </GlobalState.Provider>
  )
}

export default Context