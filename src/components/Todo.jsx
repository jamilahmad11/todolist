import React, { useState } from 'react'

const Todo = (props) => {
    const[jamil,setJamil]=useState('');
  return (
    <div>
<h1>TODO LIST{jamil}</h1>
<input  type='text' onChange={(e)=>setJamil(e.target.value)} value={jamil}></input>
<button type="button" class="btn btn-primary" onClick={()=>{
    props.propsplate(jamil)
    setJamil('')
}}>+</button>
    </div>
  )
}

export default Todo