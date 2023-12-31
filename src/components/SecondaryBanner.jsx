import React from 'react';
import BarAppointment from './BarAppointment';

const SecondaryBanner = ({ title, subtitle, content, bg, img, secondContent, padding, flex, height, sb, paraB }) => {
  // Function to render HTML content with links
  const renderContentWithLinks = (htmlContent) => {
    return { __html: htmlContent };
  };

  return (
    <>
      <section className={`${bg || ''}`}>
        <div className='py-[3rem] sm:py-[3rem] px-4 sm:px-10 md:px-0 bg-primary'>
          <h1 className='font-bold text-white text-3xl sm:text-4xl md:text-4xl raleway text-center'>
            {title}
          </h1>
        </div>
        <div className='flex flex-col lg:flex-row gap-8'>
          <article className={`${ flex || 'flex' } items-center justify-center px-4 ${padding || "lg:py-0 py-12" } raleway flex-1`}>
            <div className='lg:px-[40px]'>
              <h2 className={`font-semibold text-secondary text-[30px] md:text-[35px] ${sb || 'mb-4'}`}>
                {subtitle}
              </h2>
              {/* Render the content with links */}
              <p
                className={`text-neutral400 ${paraB || ''} leading-primary text-[20px] font-normal`}
                dangerouslySetInnerHTML={renderContentWithLinks(content)}
              />
              <br />
              {/* Render the secondContent with links */}
              <p
                className='text-neutral400 leading-primary text-[20px] font-normal'
                dangerouslySetInnerHTML={renderContentWithLinks(secondContent)}
              />
            </div>
          </article>
          <div
            style={{
              backgroundImage: `url(${img})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className={`${height || 'min-h-[785px]'} flex-1 w-[full]`}
          ></div>
        </div>
      </section>
    </>
  );
};

export default SecondaryBanner;
