import React from "react";
import { IoStarSharp } from "react-icons/io5";
import LinkWithUnderLine from "./LinkWithUnderLine";

const ReviewCard = ({profile, description, brand, cardTitle}) => {
  return (
    <div className="w-full bg-white shadow-inner border p-5 mt-5 h-max rounded-lg text-center">
      <div className="mx-auto mb-1 w-[120px] h-[120px] rounded-full border border-gray-300">
        <img src={profile} alt="profile" className="rounded-full p-1" />
      </div>
      <h2 className="mb-2 font-semibold text-lg">{cardTitle}</h2>
      <img src={brand} className={`m-auto ${brand === '/assets/branding-yelp.png' ? 'w-[50px]' : brand === '/assets/braning-facebook.png'  ? 'w-[60px]' : 'w-[100px]'}`} alt="branding-google" />
      <div className="flex items-center justify-center mt-4 mb-2">
        <IoStarSharp size={20} color={`${brand === '/assets/branding-facebook.png' ? '#4080ff' : '#d32323'} `} />
        <IoStarSharp size={20} color={`${brand === '/assets/branding-facebook.png' ? '#4080ff' : '#d32323'}`} />
        <IoStarSharp size={20} color={`${brand === '/assets/branding-facebook.png' ? '#4080ff' : '#d32323'}`} />
        <IoStarSharp size={20} color={`${brand === '/assets/branding-facebook.png' ? '#4080ff' : '#d32323'}`} />
        <IoStarSharp size={20} color={`${brand === '/assets/branding-facebook.png' ? '#4080ff' : '#d32323'}`} />
      </div>
      <p className="mt-2">
            {description} <LinkWithUnderLine route={'/pageNotFound'} text={'Read More'} key={'1'} />
      </p>
    </div>
  );
};

export default ReviewCard;
