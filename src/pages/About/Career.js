import React from 'react'

const Career = () => {
  return (
    <>
    <div className='py-[3rem] sm:py-[3rem] px-4 sm:px-10 md:px-0 bg-primary'>
        <h1 className='font-bold text-white text-3xl sm:text-4xl md:text-4xl raleway text-center'>
            APPLY NOW
        </h1>
      </div>

   <section className='px-4 py-16'>
        <form className='px-6 py-10 bg-secondary shadow-lg w-full'>
                <div className='mb-6'>
                <label className='text-2xl font-semibold text-white'>First Name <span className='text-red-950'>*</span></label>
                <input type='text' className='rounded-sm w-full mt-4 py-3' /> 
                </div>
                
                <div className='mb-6'>
                    <label className='text-2xl font-semibold text-white'>Last Name <span className='text-red-950'>*</span></label>
                    <input type='text' className='rounded-sm w-full mt-4 py-3' /> 
                </div>
                <div className='mb-6'>
                    <label className='text-2xl font-semibold text-white'>Phone Number <span className='text-red-950'>*</span></label>
                    <input type='text' className='rounded-sm w-full mt-4 py-3' /> 
                </div>
                <div className='mb-6'>
                    <label className='text-2xl font-semibold text-white'>Email</label>
                    <input type='text' className='rounded-sm w-full mt-4 py-3' /> 
                </div>
                <div className='mb-6'>
                    <label className='text-2xl font-semibold text-white'>Referred By </label>
                    <input type='text' className='rounded-sm w-full mt-4 py-3' /> 
                </div>
                <div className='mb-6'>
                    <label className='text-2xl font-semibold text-white'>Experience: </label>
                    <input type='text' className='rounded-sm w-full mt-4 py-3' /> 
                </div>
                <div className='mb-6'>
                    <label className='text-2xl font-semibold text-white'>Upload Resume <span className='text-red-950'>*</span></label>
                    <input  type='file' className='rounded-sm w-full mt-4 py-3' /> 
                </div>
                <button className='bg-primary block text-center py-3 px-4 text-xl text-white font-semibold w-20%' type='button'>SUBMIT APPLICATION</button>
        </form>
   </section>

    </>
  )
}

export default Career