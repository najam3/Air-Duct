import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const CheckList = ({item, margin}) => {

  return (
     <ul>
          <li className={`flex ${margin || ''} gap-4`}>
                <span><FaCheckCircle size={30} className="text-secondary"/></span>
                <p className="text-xl">{item}</p>
          </li>
     </ul>
  )
}

export default CheckList;