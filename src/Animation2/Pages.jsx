import React from 'react'
import Card from "./Card"

const Pages = () => {
  return (
    <div>
        <section className='text-[2rem] bg-green-300 h-screen flex items-center justify-center'><h1>The Foundation</h1></section>
        <Card/>
        <section className='text-[2rem] relative z-50 bg-green-300 h-screen flex items-center justify-center'><h1>End Form</h1></section>

    </div>
  )
}

export default Pages