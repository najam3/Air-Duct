import React from 'react'
import { Link } from 'react-router-dom'

const LinkWithUnderLine = ({text, route}) => {
  return (
    <React.Fragment>
        <Link to={route} className='underline text-[#81a7ce] hover:text-secondary'>{text}</Link>
    </React.Fragment>
  )
}

export default LinkWithUnderLine