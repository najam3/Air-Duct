import React from 'react'
import FooterCard from '../components/FooterCard'

const Reviews = () => {
  return (
   <>
    <div className='py-[3rem] sm:py-[3rem] px-4 sm:px-10 md:px-0 bg-primary'>
        <h1 className='font-bold text-white text-3xl sm:text-4xl md:text-4xl raleway text-center'>
        REVIEWS & RATINGS
        </h1>
      </div>
   
    <section className='py-12 px-4'>
        <p className='text-center mb-6'>At Atlantic Duct Cleaning, our goal is making sure your duct cleaning and sealing projects are done completely and correctly the first time around. We pride ourselves on providing clients with quality service. Take a look at some of our reviews from these satisfied customers!</p>
      
      <div className='flex justify-between gap-8'>
        <FooterCard
          border={'border-[#d32323]'}
          logo={'/assets/yelp.png'}
          color={'#d32323'}
          boom={'5 Stars - Based on 85 User Reviews'}
        />
        <FooterCard 
        border={'border-[#35A853]'}
        boom={'5 Stars - Based on 3218 User Reviews'}
        logo={'/assets/google.png'}
        color={'#E7711C'}
        />
        <FooterCard 
        border={'border-[#4080ff]'}
        boom={'5 Stars - Based on 85 User Reviews'}
        logo={'/assets/faceebook.png'}
        color={'#4080ff'}
        />
      </div>
      
    </section>
   
   
   </>
  )
}

export default Reviews