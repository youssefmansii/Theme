import React from 'react'
import { useState } from 'react'

const Content = () => {
    const [Theme, setTheme] =useState(true)
    const changeTheme = () => {
        setTheme(!Theme)
        }
    
  return (
   <div className={`${
    Theme ? "bg-white" : "bg-black"
   }
   absolute inset-0 w-full h-full flex items-center justify-center `}>
    <button onClick={changeTheme} className={`${
        Theme ? "text-white bg-black" : "text-black bg-white"
    }
    btn btn-soft btn-secondary btn-xl`}>{Theme ? "Dark" : "Light"}</button>
   </div>
  )
}

export default Content