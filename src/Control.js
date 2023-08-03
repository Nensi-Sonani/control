import React from 'react'
import { useState } from 'react'
import './control.css'

const Control = () => {
    let [name,setName]=useState('')
    let [course,setCourse]=useState('')
    let [grid,setGrid]=useState('')
    let [city,setCity]=useState('')

    // city ? console.log(city) : null
  return (
    <div>
    <form>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type='text' value={grid} onChange={(e)=>setGrid(e.target.value)}/><br></br>
        <input type='checkbox' value="Node js" onChange={(e)=>setCourse(e.target.value)}/>
        <label>Node js</label><br></br>
        <input type='checkbox' value="React js" onChange={(e)=>setCourse(e.target.value)}/>
        <label>React js</label><br></br>
        <input type='checkbox' value="Next js" onChange={(e)=>setCourse(e.target.value)}/>
        <label>Next js</label><br></br>
        <input type='radio' name="city" value="Surat" onChange={(e)=>setCity(e.target.value)}/>
        <label>Surat</label><br></br>
        <input type='radio' name="city" value="Vadodra" onChange={(e)=>setCity(e.target.value)}/>
        <label>Vadodra</label><br></br>
        <input type='radio'  name="city" value="Vapi" onChange={(e)=>setCity(e.target.value)}/>
        <label>Vapi</label><br></br>
        <input type='submit'/>
    </form>
  
    <h4>Name:{name}</h4>
    <p>Course:{course}</p>
    <p>Grid:{grid}</p>
    <p>City:{city}</p>
 
    </div>
  )
}

export default Control

