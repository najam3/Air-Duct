import React from 'react'

const BarAppointment = ({title, content, padding, background, color, weight, size}) => {
  return (
    <section className={`${background || 'bg-neutral200'} ${padding || 'py-[70px]'}  px-4`}>
        <h2 dangerouslySetInnerHTML={{__html: title}} className={`text-center ${!title ? 'hidden' : 'block'} font-semibold text-3xl sm:text-4xl mb-10 text-primary`} />
        <p className={`text-center ${color || ''} ${weight || ''} ${size || ''}`} dangerouslySetInnerHTML={{__html: content}} />
    </section>
  )
}

export default BarAppointment