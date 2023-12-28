import React from 'react'
import FooterCard from '../components/FooterCard'
import ReviewCard from '../components/ReviewCard'

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
      
      <div className={'flex-wrap md:flex-nowrap flex justify-between gap-8'}>
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
      <div className='flex-wrap md:flex-nowrap flex justify-between gap-8'>
          <ReviewCard cardTitle={'Nicole Schwab'} brand={'/assets/branding-google.png'} description={'Rigoberto and Jose did an excellent job at cleaning our dryer vent. Our vent had not been cleaned in a LONG time so it was in pretty bad shape. They went above and beyond and replaced the pipe and some other parts and made it look as good as new! I a...'} profile={'/assets/1.png'} />
          <ReviewCard cardTitle={'David H.'} brand={'/assets/branding-yelp.png'} description={'The HVAC company we use uses Atlantic to handle their dryer vent cleaning requests. They do a great job and are very professional but unfortunately are...'} profile={'/assets/reviews/300s.jpg'} />
          <ReviewCard cardTitle={'Jenny O.'} brand={'/assets/branding-yelp.png'} description={'Atlantic Duct Cleaning came to clean our dryer vent, and I am thrilled with the service. Rene and Santos were our technicians. They were efficient,...'} profile={'/assets/reviews/chinese-girl.jpg'}/>
      </div>
      <div className={'flex-wrap md:flex-nowrap flex justify-between gap-8'}>
          <ReviewCard cardTitle={'Janice Andreyko'} brand={'/assets/branding-facebook.png'} description={'Joel came on 4/16/2021 and did a great job!'} profile={'/assets/reviews/dummy.jpg'} />
          <ReviewCard cardTitle={'Bob Wilson'} brand={'/assets/branding-facebook.png'} description={'I had the unfortunate experience of suffering financial losses in the bitcoin and stock market. However, If you find yourself in a similar situation, struggling to recover or manage your bitcoin and stock investments, I highly recommend reaching ...'} profile={'/assets/reviews/bob-willson.jpeg'} />
          <ReviewCard cardTitle={'Jon Thomas'} brand={'/assets/branding-facebook.png'} description={'Atlantic Duct Cleaning was recommended by the company that installed our new HVAC system. Roger Sr. And Jose Sr. Arrived on time and had on their masks and shoe covers. They did a quick walkthrough of the house with me, explained the process and got ... '} profile={'/assets/reviews/download.jpeg'}/>
      </div>
      <div className={'flex-wrap md:flex-nowrap flex justify-between gap-8'}>
          <ReviewCard cardTitle={'Stephanie Hiett Maddox'} brand={'/assets/branding-facebook.png'} description={'I was very impressed with the technicians that cleaned my air ducts. There wasn’t a speck of dust left when they finished! They arrived on time and were very professional. I highly recommend Atlantic Duct Cleaning and Jose and Edwin!'} profile={'/assets/reviews/women-kid.jpeg'} />
          <ReviewCard cardTitle={'Darnell Fried'} brand={'/assets/branding-facebook.png'} description={'Joel and Steven were prompt, wore their masks and put their shoe coverings on upon entering the house each time. Joel explained everything to me and showed me pictures at the end. He provided me with a brochure that explained the anti-microbial app...'} profile={'/assets/reviews/dummy.jpg'} />
          <ReviewCard cardTitle={'Tracey Gray'} brand={'/assets/branding-facebook.png'} description={'What a great crew to work with….from Lupe who set up my appointment and explained the process to Roger, Jose, and James who were my technicians!!!!'} profile={'/assets/reviews/red-head.jpeg'}/>
      </div>
      <div className={'flex-wrap md:flex-nowrap flex justify-between gap-8'}>
          <ReviewCard cardTitle={'Vicky Payne'} brand={'/assets/branding-facebook.png'} description={'Juan and Andres came to my home and did an excellent job. They answered all of our questions, were very professional, and worked quickly and efficiently. Definitely recommend!'} profile={'/assets/reviews/cow.jpeg'} />
          <ReviewCard cardTitle={'Tricia Paoletta'} brand={'/assets/branding-facebook.png'} description={'The gentlemen from Atlantic Duct Cleaning were professional and efficient. They cleaned by clothes dryer duct and the inside of the dryer very well. They were on time, and the price provided when I booked was consistent with what they charged. I was ... '} profile={'/assets/reviews/old-woman-chain.jpeg'} />
          <ReviewCard cardTitle={'Angela Taylor'} brand={'/assets/branding-facebook.png'} description={'Thanks you, Joel and Santos, for providing exceptional quality service during our duct cleaning appointment. The arrival time, explanation of service and attention to detail is greatly appreciated. Our family is extremely thankful for your 100% level... '} profile={'/assets/reviews/unnamed.png'}/>
      </div>
      <div className={'flex-wrap md:flex-nowrap flex justify-between gap-8'}>
          <ReviewCard cardTitle={'Kg OT Li'} brand={'/assets/branding-facebook.png'} description={'Investing on Real Estate and Cryptocurrency has been my best decision ever, I have been seeing so many positive reviews here on Facebook, on how people are getting paid through cryptocurrency, I saw so many brokers online to choose from but there was...'} profile={'/assets/reviews/wife-husband.jpeg'} />
          <ReviewCard cardTitle={'Ruth Rodgers Rohr'} brand={'/assets/branding-facebook.png'} description={'We highly recommend Atlantic Duct Cleaning! Their employees were so professional and did an incredible job on the ducts in our home.'} profile={'/assets/reviews/rogers.jpeg'} />
          <ReviewCard cardTitle={'Kris McDowell'} brand={'/assets/branding-facebook.png'} description={'We had Atlantic Duct cleaning come to our home today to perform a duct cleaning. We live on a gravel road, have a dog and have done some very dusty home remodeling recently. Juan and Carlos showed up on time, were very professional and courteous, exp...'} profile={'/assets/reviews/family.jpeg'}/>
      </div>
      <div className={'flex-wrap md:flex-nowrap flex justify-between gap-8'}>
          <ReviewCard cardTitle={'Kelsey Lecker'} brand={'/assets/branding-google.png'} description={'Alfonso & Cristian did a great job with our duct cleaning and sealing! They were very friendly and took their time to evaluate our house and any problems associated. They stayed late to finish the job in one day and cleaned up nicely. We would hi...'} profile={'/assets/reviews/blonde.png'} />
          <ReviewCard cardTitle={'Scott Stephenson'} brand={'/assets/branding-facebook.png'} description={'The techs they sent were friendly, professional and efficient. The work was done well and in a relatively short period of time with minimal disruption to our lives. Highly recommend them.'} profile={'/assets/reviews/papa-momma.jpeg'} />
          <ReviewCard cardTitle={'Bonnie Payne Reynolds'} brand={'/assets/branding-facebook.png'} description={'Rigoberto and Jose were very efficient, friendly and informative when cleaning our dryer vent. Everything was explained and they did a good job. We will be using them in the future and recommend their service.'} profile={'/assets/reviews/mom-son.jpeg'}/>
      </div>
      <div className='flex-wrap md:flex-nowrap flex w-full md:w-[65%] justify-between gap-8'>
          <ReviewCard cardTitle={'Shari Bice'} brand={'/assets/branding-google.png'} description={'I had my air ducts and my dyer duct cleaned yesterday. Rene and Roberto did an excellent job. They were friendly and thorough. They explained the process and answered all my questions. They left my house clean, no dust left behind, which I so appreci...'} profile={'/assets/3.png'} />
          <ReviewCard cardTitle={'Dana Guanciale'} brand={'/assets/branding-facebook.png'} description={'Very prompt and professional. Reasonably priced. So pleased with the results!'} profile={'/assets/reviews/fof.jpeg'} />
      </div>


    </section>
   
   
   </>
  )
}

export default Reviews