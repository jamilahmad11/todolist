import React from 'react'

const Maptodo = (props) => {
  return (
    <div>
       <li>
       {props.item}
       <span>
       <i class="fa-solid fa-trash-can" onClick={()=>{
        props.deletarray(props.index)
       }}>
        
       </i>
       </span>
       </li>
    </div>
  )
}

export default Maptodo