import React from 'react'
import './style.css'


export default function HeaderTable(props) {
  return (
    <div className='headerTable'>
      <div className='headerTitle left'>
        {props.title1}
      </div>
      <div className='headerTitle'>
        {props.title2}
      </div>
      <div className='headerTitle right'>
          
      </div>
    </div>
  )
}


export function HeaderTableApproval(props){
  return(
    <div className='headerTable'>
      <div className='headerTitle left'>
        {props.title1}
      </div>
      <div className='headerTitle'>
        {props.title2}
      </div>
      <div className='headerTitle'>
        {props.title3}
      </div>
      <div className='headerTitle right'>
          
      </div>
    </div>
  )
}
