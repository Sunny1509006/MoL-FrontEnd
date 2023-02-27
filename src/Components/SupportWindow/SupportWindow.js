import React from 'react'
import './SupportWindow.css'

import EmailForm from './EmailForm'

const SupportWindow = props => {
  return (
    <div
      className='Support_window_transition'
      style={{
        height: '350px',
        width: '250px',
        background: 'white',
        bottom: '120px',
        right: props.visible ? '15px': '-500px',
        position: 'fixed',
        overflow: 'hidden',
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
        zIndex: '10000',
        borderColor : '#0C6395',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '10px',
        opacity: props.visible ? '1' : '0'
        
      }}
    >

        <EmailForm />

    </div>
  )
}

export default SupportWindow
