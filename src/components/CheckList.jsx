import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const CheckList = ({item, margin}) => {

  return (
          <li className={`flex ${margin || ''} gap-4`}>
                <span><FaCheckCircle size={35} className="text-[#7ab058]"/></span>
                <p className="text-xl" dangerouslySetInnerHTML={{__html: item}}/>
          </li>
  )
}

export default CheckList;