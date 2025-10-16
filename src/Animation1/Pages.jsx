import React from 'react'
import StickyCard from './StickyCard'
import NewCard from './NewCard'

const Pages = () => {
  return (
    <div>
        <section className='text-[2rem] bg-green-300 h-screen flex items-center justify-center'><h1>The Foundation</h1></section>
        <NewCard/>
        <section className='text-[2rem] bg-green-300 h-screen flex items-center justify-center'><h1>End Form</h1></section>

    </div>
  )
}

export default Pages