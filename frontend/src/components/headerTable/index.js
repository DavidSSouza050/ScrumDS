import React from 'react'
import './style.css'


export default function HeaderTable(props) {
  return (
    <div className='headerTable'>
      <div className='headerTitle left'>
        {props.title1}
      </div>
      <div className={props.title3 == null ? "headerTitle right" : "headerTitle"}>
        {props.title2}
      </div>

      {
          props.title3 != null ?
            <div className='headerTitle right'>
                 {props.title3}
            </div>
          :
          null

      }
    </div>
  )
}
