import React from 'react'
import './SupportWindow.css'

const SupportWindow = props => {
  return (
    <div
      className='Support_window_transition'
      style={{
        height: '400px',
        width: '250px',
        background: 'black',
        bottom: '120px',
        right: '15px',
        position: 'fixed',
        opacity: props.visible ? '1' : '0'
      }}
    />
  )
}

export default SupportWindow
