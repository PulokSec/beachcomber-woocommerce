// Imports
import Link from 'next/link';

// Components
import Cart from './Cart.component';
import AlgoliaSearchBox from '../AlgoliaSearch/AlgoliaSearchBox.component';
import MobileSearch from '../AlgoliaSearch/MobileSearch.component';

// Utils
import useIsMobile from '@/utils/hooks/useIsMobile';
import Image from 'next/image';

/**
 * Navigation for the application.
 * Includes mobile menu.
 */
const Navbar = () => {
  const isMobile = useIsMobile();
  return (
    <header>
      <nav id="header" className="top-0 z-50 w-full py-1 bg-transparent">
        <div className="container flex md:flex-wrap flex-col md:flex-row items-center justify-between px-6 py-3 mx-auto mt-0 md:min-w-96">
        <div className="order-1 md:order-1">
            <Link href="/">
            <Image
    src="https://beachcomber.csoft.ca/wp-content/uploads/2024/06/white-logo.png"
    width={300}
    height={40}
    alt="logo"
    className="inset-0 object-cover"
  />
            </Link>
          </div>
          <div
            className="order-3 hidden w-full md:flex md:items-center md:w-auto md:order-2"
            id="menu"
          >
            <ul className="items-center justify-between pt-4 text-base text-gray-700 md:flex md:pt-0">
              <li>
                <Link href="/hot-tub-landing">
                  <span className="inline-block py-2 pr-4 text-xl font-bold no-underline hover:underline text-white">
                    HOT TUBS
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/water-care">
                  <span className="inline-block py-2 pr-4 text-xl font-bold no-underline hover:underline text-white">
                    WATER CARE
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/plus-category-landing">
                  <span className="inline-block py-2 pr-4 text-xl font-bold no-underline hover:underline text-white">
                    HOT TUB CARE
                  </span>
                </Link>
              </li>
            </ul>
            <ul className="items-center justify-between pt-4 text-base text-gray-700 md:flex md:pt-0">
              <li>
                <Link href="/special-offers">
                  <span className="inline-block py-2 pr-4 text-xl font-bold no-underline hover:underline text-white">
                    OFFERS
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about-us-company">
                  <span className="inline-block py-2 pr-4 text-xl font-bold no-underline hover:underline text-white">
                    ABOUT
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="inline-block py-2 pr-4 text-xl font-bold no-underline hover:underline text-white">
                    CONTACT
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="order-3 hidden w-full md:flex md:items-center md:w-auto"
            id="menu"
          >
          <div
            className="flex items-center order-2 md:order-3"
            id="nav-content"
          >
            {/* <AlgoliaSearchBox /> */}
            {/* <MobileSearch /> */}
            {!isMobile && <Cart />}
          </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
