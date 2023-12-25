import React from 'react'

const Bar = ({title, pad, fontColor, background, align, ps, fontSize, weight}) => {
  return (
    <div className={`${pad ||'py-6'} ${background || "bg-neutral300" } sm:px-4 md:px-4`}>
        <p className={`${fontColor || "text-primary"} text-3xl ${fontSize || 'md:text-4xl'} ${align || 'text-center'} ${weight || 'font-semibold'} raleway px-4 sm:px-0`}>{title}</p>
    </div>
  )
}

export default Bar