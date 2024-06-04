/**
 * Renders Footer of the application.
 * @function Layout
 * @returns {JSX.Element} - Rendered component
*/
import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPinterest, FaVimeoV, FaSpotify } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-black py-10 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">Support</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-100">Contact Us</a></li>
            <li className="mb-2"><a href="#" className="text-gray-100">Shipping Policy</a></li>
            <li className="mb-2"><a href="#" className="text-gray-100">Returns & Exchanges</a></li>
            <li className="mb-2"><a href="#" className="text-gray-100">Beachcomber Guarantees</a></li>
            <li className="mb-2"><a href="#" className="text-gray-100">FAQ</a></li>
            <li className="mb-2"><a href="#" className="text-gray-100">Safety Data Sheets</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Account</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-100">My Account</a></li>
            <li className="mb-2"><a href="#" className="text-gray-100">Order Status</a></li>
            <li className="mb-2"><a href="#" className="text-gray-100">Guarantee Registration</a></li>
            <li className="mb-2"><a href="#" className="text-gray-100">Guides & Manuals</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Learn More</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-100">Blog</a></li>
            <li className="mb-2"><a href="#" className="text-gray-100">Our Story</a></li>
            <li className="mb-2"><a href="#" className="text-gray-100">Store Locator</a></li>
            <li className="mb-2"><a href="#" className="text-gray-100">Become a Dealership</a></li>
            <li className="mb-2"><a href="#" className="text-gray-100">Careers</a></li>
            <li className="mb-2"><a href="#" className="text-gray-100">Evolution of Hot Tubs</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Subscribe To Our Newsletter!</h3>
          <p className="mb-4 text-gray-100">Are you a hot tub owner? Stay up to date with our latest specials, as well as tips on hot tub maintenance and water care.</p>
          <form className="flex flex-col space-y-4">
            <input type="text" placeholder="Name" className="p-2 border border-gray-300 rounded" />
            <input type="email" placeholder="Email" className="p-2 border border-gray-300 rounded" />
            <button type="submit" className="bg-[#264967] text-white py-2 rounded">Sign Up</button>
          </form>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="container mx-auto flex flex-col items-start justify-start mt-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="text-center text-gray-100 mb-4 md:mb-0 text-4xl">
          Tethys Water Care App
        </div>
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Image className="border border-gray-100 rounded-md" src="https://www.beachcomberhottubs.com/media/wysiwyg/uploads/apple_1.png" alt="App Store" width={150} height={50} />
          <Image className="border border-gray-100 rounded-md" src="https://www.beachcomberhottubs.com/media/wysiwyg/uploads/google_1.png" alt="Google Play" width={150} height={50} />
        </div>
        </div>
        <div className="flex flex-col md:flex-row items-center space-x-4 mb-4 md:mb-0 py-5 md:py-10">
          <span className="text-gray-100">We accept:</span>
          <div className="flex flex-row items-center justify-center py-5 md:py-0 gap-4">
          <Image className="border border-gray-100 md:w-[80px] md:h-[50px]" src="https://www.beachcomberhottubs.com/media/wysiwyg/visa_1.png" alt="Visa" width={80} height={30} />
          <Image className="border border-gray-100 md:w-[80px] md:h-[50px]" src="https://www.beachcomberhottubs.com/media/wysiwyg/mastercard_1.png" alt="MasterCard" width={80} height={30} />
          <Image className=" md:w-[100px] md:h-[30px]" src="https://www.beachcomberhottubs.com/media/wysiwyg/paypal_1.png" alt="PayPal" width={80} height={50} />
          <Image className=" md:w-[100px] md:h-[30px]" src="https://www.beachcomberhottubs.com/media/wysiwyg/financeit_1.png" alt="Financeit" width={80} height={50} />
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center gap-4">
        <div className="text-gray-100 mb-4 md:mb-0 text-xl">
          Connect with us:
        </div>
        <div className="flex items-center space-x-4">
        <a href="#" className="text-gray-100"><FaFacebookF className="w-[30px] h-[30px]"/></a>
          <a href="#" className="text-gray-100"><FaInstagram className="w-[30px] h-[30px]"/></a>
          <a href="#" className="text-gray-100"><FaTwitter className="w-[30px] h-[30px]"/></a>
          <a href="#" className="text-gray-100"><FaYoutube className="w-[30px] h-[30px]"/></a>
          <a href="#" className="text-gray-100"><FaPinterest className="w-[30px] h-[30px]"/></a>
          <a href="#" className="text-gray-100"><FaVimeoV className="w-[30px] h-[30px]"/></a>
          <a href="#" className="text-gray-100"><FaSpotify className="w-[30px] h-[30px]"/></a>
</div>
      </div>
      </div>
      </div>
      <div className="container mx-auto flex flex-row items-center justify-between py-5 bg-white px-5 md:px-0">
        <div className="flex space-x-4 font-semibold md:text-[20px]">
          <a href="#" className="text-gray-600">Privacy Policy</a>
        </div>
        <div className="flex space-x-4 font-semibold md:text-[20px]">
        <a href="#" className="text-gray-600">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
