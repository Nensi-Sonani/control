import React from 'react'
import { useState } from 'react'

const Control = () => {
    let [name,setName]=useState('')
    let [course,setCourse]=useState('')
    let [grid,setGrid]=useState('')
    let [city,setCity]=useState('')
  return (
    <div>
    <form>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type='text' value={course} onChange={(e)=>setCourse(e.target.value)}/>
        <input type='text' value={grid} onChange={(e)=>setGrid(e.target.value)}/>
        <input type='text' value={city} onChange={(e)=>setCity(e.target.value)}/>
        <input type='submit'/>
    </form>
  

    <h3>Name:{name}</h3>
    <p>Course:{course}</p>
    <p>Grid:{grid}</p>
    <p>City:{city}</p>
    </div>
  )
}

export default Control

