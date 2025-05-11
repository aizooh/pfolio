import React from 'react'
import {btnList} from './app/data'

const Navigation = () => {
  return (
    <div className="flex items-center justify-between relative ">
        {BtnList.map(btn, index) => (
            return <button> {btn.label}</button>
        )}            
      
    </div>
  )x
}

export default Navigation
