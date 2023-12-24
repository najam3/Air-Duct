import React from 'react'

const VideoSection = ({title, src, poster}) => {
  return (
    <section className='py-16 bg-primary px-4'>
        <div>
            <h2 className='text-center text-white font-semibold mb-8 text-3xl md:text-3xl lg:text-4xl'>{title}</h2>
            <video poster={poster} class="w-[100%] h-[30vh] mx-auto" controls>
            <source src={src} type="video/mp4" />
            </video>
        </div>
    </section>
  )
}

export default VideoSection