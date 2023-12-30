import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYelp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";
import LinkWithUnderLine from "./LinkWithUnderLine";
import { companyInfo } from "../companyInfo";


const Footer = () => {


    return(
        <footer>
            <div className="flex gap-12 flex-wrap sm:flex-nowrap bg-secondary py-3 px-4 md:px-0 justify-center items-center">
                    <FaFacebookF size={50} className="min-w-[25px]" color="#fff"/>
                    <FaLinkedin size={50} className="min-w-[25px]" color="#fff"/>
                    <FaTwitter size={50} className="min-w-[25px]" color="#fff"/>
                    <FaYoutube size={50} className="min-w-[25px]" color="#fff"/>
                    <FaYelp size={50} className="min-w-[25px]" color="#fff"/>
                    <FaInstagram size={50} className="min-w-[25px]" color="#fff"/>
            </div>

                <div className="px-4 pb-8">
                    <div className="py-20 flex justify-between text-center md:text-left w-full flex-col md:flex-row items-center">
                        <ul className="w-full md:w-[35%]">
                            <li className="mb-2">
                                <Link className="text-primary hover:text-secondary duration-300 ease-in-out transition-colors font-bold text-2xl md:text-2xl lg:text-3xl" to={'/'}>HOME</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="text-primary hover:text-secondary duration-300 ease-in-out transition-colors font-bold text-2xl md:text-2xl lg:text-3xl" to={'/'}>REVIEWS</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="text-primary hover:text-secondary duration-300 ease-in-out transition-colors font-bold text-2xl md:text-2xl lg:text-3xl" to={'/'}>CONTACT</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="text-primary hover:text-secondary duration-300 ease-in-out transition-colors font-bold text-2xl md:text-2xl lg:text-3xl" to={'/'}>RECEIVE ESTIMATE</Link>
                            </li>
                            <li className="mb-8">
                                <Link className="text-primary hover:text-secondary duration-300 ease-in-out transition-colors font-bold text-2xl md:text-2xl lg:text-3xl" to={'/'}>SCHEDULE NOW</Link>
                            </li>
                            <li className="mb-4">
                                <Link className="text-secondary font-bold text-lg" to={'/'}>OFFICE: {companyInfo.phoneNum}</Link>
                            </li>
                             <p className="text-lg text-black font-semibold mb-2">6997 GATEWAY CT <br/> MANASSAS, VA 20109</p>
                           <p className="text-secondary font-bold text-lg">MONDAY - FRIDAY (8AM - 5PM)</p>
                        </ul>
                        <div className="w-full md:w-[25%] mt-8 md:mt-0">
                            <ul className="mb-8">
                                <h2 className="font-bold text-2xl md:text-2xl lg:text-3xl text-primary mb-3">RESIDENTIAL</h2>
                                <li className="mb-2">
                                    <Link className="text-black hover:text-secondary duration-300 ease-in-out transition-colors text-xl md:text-xl lg:text-2xl" to={'/'}>Air Duct Cleaning</Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="text-black hover:text-secondary duration-300 ease-in-out transition-colors text-xl md:text-xl lg:text-2xl" to={'/'}>Dryer Vent Cleaning</Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="text-black hover:text-secondary duration-300 ease-in-out transition-colors text-xl md:text-xl lg:text-2xl" to={'/'}>Deep Duct Cleaning</Link>
                                </li>
                            </ul>
                            <ul className="mt-8 md:mt-0">
                                <h2 className="font-bold text-2xl md:text-2xl lg:text-3xl text-primary mb-3">COMMERCIAL</h2>
                                <li className="mb-2">
                                    <Link className="text-black hover:text-secondary duration-300 ease-in-out transition-colors text-xl md:text-xl lg:text-2xl" to={'/'}>Air Duct Cleaning</Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="text-black hover:text-secondary duration-300 ease-in-out transition-colors text-xl md:text-xl lg:text-2xl" to={'/'}>Dryer Vent Cleaning</Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="text-black hover:text-secondary duration-300 ease-in-out transition-colors text-xl md:text-xl lg:text-2xl" to={'/'}>Kitchen Hood Cleaning</Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="text-black hover:text-secondary duration-300 ease-in-out transition-colors text-xl md:text-xl lg:text-2xl" to={'/'}>Deep Duct Cleaning</Link>
                                </li>
                            </ul>

                        </div>
                        <ul className="mb-8 mt-8 md:mt-0 w-full md:w-[28%]">
                                <h2 className="font-bold text-2xl md:text-2xl lg:text-3xl text-primary mb-3">ABOUT US</h2>
                                <li className="mb-2">
                                    <Link className="text-black hover:text-secondary duration-300 ease-in-out transition-colors text-xl md:text-xl lg:text-2xl" to={'/'}>Our Process</Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="text-black hover:text-secondary duration-300 ease-in-out transition-colors text-xl md:text-xl lg:text-2xl" to={'/'}>About Duct Master</Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="text-black hover:text-secondary duration-300 ease-in-out transition-colors text-xl md:text-xl lg:text-2xl" to={'/'}>Service Areas</Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="text-black hover:text-secondary duration-300 ease-in-out transition-colors text-xl md:text-xl lg:text-2xl" to={'/'}>Client List</Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="text-black hover:text-secondary duration-300 ease-in-out transition-colors text-xl md:text-xl lg:text-2xl" to={'/'}>Our Blog</Link>
                                </li>
                                <li className="mb-8">
                                    <Link className="text-black hover:text-secondary duration-300 ease-in-out transition-colors text-xl md:text-xl lg:text-2xl" to={'/'}>FAQs</Link>
                                </li>
                                <button className="text-white bg-primary font-semibold px-8 py-6 md:py-4 md:px-4 lg:px-8 text-xl lg:py-6">SUBMIT A REFFERAL</button>
                                {/* <LareBtn text={'SUBMIT A REFERRAL'} /> */}
                        </ul>
                    </div>

                    <div className="">
                        <div className="text-center">
                            <button className="inline-block align-middle text-xl bg-secondary px-12 font-semibold py-4 text-white">SCHEDULE NOW</button>
                            <img src="/assets/secure-shopping-img.webp" className="inline-block align-middle w-[100px] ms-6 object-contain" alt="#" />
                        </div>

                            <div className='p-5 hover:-translate-y-[10px] hover:shadow-2xl transition-all duration-300 cursor-pointer rounded-none border-t-4 border-[#0000004d] bg-white shadow-xl mt-20 mx-auto w-full sm:w-[400px] flex-shrink relative'>
                            <div className='flex gap-6 items-center'>
                                <img src='/assets/logo.jpg' alt='client' className='w-16' />
                                <div>
                                    <h2 className='text-[#5d6f80] mb-3 text-xl font-bold'>Duct Master</h2>
                                    <div className='flex items-center'>
                                    <IoStarSharp size={20} color='#ff6900'/>
                                    <IoStarSharp size={20} color='#ff6900'/>
                                    <IoStarSharp size={20} color='#ff6900'/>
                                    <IoStarSharp size={20} color='#ff6900'/>
                                    <IoStarSharp size={20} color='#ff6900'/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='text-[#5d6f80] text-[20px] leading-[1.5em] mt-2'>
                                5 Stars - Based on 3194  User <br/> Reviews
                                </p>  
                            </div>   
                            {/* <img src='/assets/small-map.png' alt='map' className='w-[20px] absolute top-0 right-0 mt-5 me-5'/>              */}
                            </div>
                    </div>

                    <div className="text-center mt-20">
                        <p className="text-black">Licensed Bonded and Insured</p>
                                <br/>
                        <p className="text-black">&copy; 2023 Duct Master. All Rights Reserved. <LinkWithUnderLine text={'Privacy Policy'} />. <LinkWithUnderLine text={'Sitemap'} />.</p>
                                <br />
                        <p className="text-black inline-block align-middle"><img src="/assets/lse-logo.webp" alt="#" className="w-[30px] inline-block align-middle" />Web Design & Digital Marketing by <LinkWithUnderLine text="Local Search Essesntials" route="/" />.
                        </p>
                    </div>

                </div>
        </footer>
    )
}

export default Footer