import React from 'react'

const LareBtn = ({text, color, border, fontColor}) => {
  console.log(color)
  return (
 
        <button className={`px-12 py-4 text-2xl ${`text-${fontColor}`} ${`border-${border}`} ${`bg-${color}`} font-bold`}>
            {text}
        </button>

  )
}

export default LareBtn