import React from 'react'
import './Spinner.css'
export const Spinner = () => {
  return (
    <div className='flex flex-col items-centre space-y-2'>
        <div className='spinner'></div>
        <p1 className="text-bgDark text-lg font-semibold">Loading....</p1>

    </div>
  )
}
