import React from 'react'

let MyButton = ({title, color}) => {
  return (
    <button style={{backgroundColor: color}}>{title}</button>
  )
}

export default MyButton
