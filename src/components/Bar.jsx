import React from 'react'

const Bar = ({title, pad, fontColor, background}) => {
  return (
    <div className={`${pad || 'py-6'} ${background || "bg-neutral300" }  sm:px-4 md:px-0`}>
        <p className={`${fontColor || "text-primary"} text-3xl md:text-4xl text-center font-semibold raleway px-4 sm:px-0`}>{title}</p>
    </div>
  )
}

export default Bar