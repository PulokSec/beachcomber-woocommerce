import Image from "next/image";
import Header from "../Header/Header.component";

/**
 * Renders Hero section for Index page
 * @function PageTitle
 * @returns {JSX.Element} - Rendered component
 */
const Hero = () => (
  <section className='relative h-[80vh] w-full md:h-[100vh]'>
       <Image 
        src="https://beachcomber.csoft.ca/wp-content/uploads/2024/05/banner-top-upper-lower-shadow.png"
        alt="Hero Banner"
        fill={true} 
        priority={true} 
        className='object-cover bg-blend-screen object-center z-0' 
      />
<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-0"></div>
      <div className='relative z-1'>
        <Header />
          <div className=' container mx-auto ml-0 flex md:w-[40vw] h-[60vh] w-full flex-col  items-center md:justify-end justify-center md:pl-20 px-10 md:px-0'>
            <p className='text-leading-5 mt-5 text-4xl font-bold text-white md:text-6xl text-center space-y-3'>
            2024 BEACHCOMBER HOT TUBS
            </p>
            <div className="relative p-4 flex items-center justify-end text-center uppercase">
        <a href="#" className="inline-block mt-4 text-center text-white hover:bg-black bg-transparent border border-white px-10 py-3 rounded">
          Learn More
        </a>
      </div>
              <p className='text-leading-8 text-center text-lg py-5 text-white md:text-start md:text-5xl'>
                ANNIVERSARY EDITIONS
              </p>

              <p className="text-center md:text-start text-white">VIEW OUR EVERYDAY LOW PRICE MODELS</p>
          </div>
      </div>
    </section>
);

export default Hero;
