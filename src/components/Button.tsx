import React from 'react'

interface Props {
    children: string
    onClick: ()=> void;
}

export const Button = ({children, onClick}: Props) => {
  return (
    <button className='btn btn-primary' onClick={onClick}> Button </button>
  )
}

export default Button