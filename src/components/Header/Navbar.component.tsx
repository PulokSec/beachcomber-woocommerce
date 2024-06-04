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
          <div
            className="order-3 hidden w-full md:flex md:items-center md:w-auto md:order-1"
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
          </div>
          <div className="order-1 md:order-2">
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
            className="order-3 hidden w-full md:flex md:items-center md:w-auto"
            id="menu"
          >
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
              {/* <li>
                <Link href="/profile">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34px" height="34px"><path d="M12 5q1.46 0 2.18.72c.35.36.76 1.06.74 2.35v.74l.53.23q.04.02.05.26v.94c0 .14-.12.43-.22.6l-.08.13-.04.14c-.14.5-.62 1.98-1.13 2.78C13.5 14.71 12.98 15 12 15s-1.5-.29-2.03-1.1c-.5-.8-.99-2.3-1.13-2.8l-.04-.13-.07-.12a2 2 0 0 1-.23-.61V9.3q.01-.24.05-.26l.53-.23v-.74c-.02-1.3.4-2 .74-2.35Q10.52 5 12 5m0-1C7.86 4 8.08 7.75 8.08 8.15c0 0-.58.25-.58 1.15v.94c0 .54.38 1.14.38 1.14s.55 1.95 1.25 3.05A3.1 3.1 0 0 0 12 16c1.32 0 2.17-.47 2.87-1.57s1.25-3.05 1.25-3.05.38-.6.38-1.14V9.3c0-.9-.58-1.15-.58-1.15 0-.4.22-4.15-3.92-4.15"/><path d="M8.68 16.82A5 5 0 0 0 12 17.98c1.3 0 2.5-.43 3.32-1.16 1.26.53 2.28 1.07 3.3 1.76.6.4.87 1.22.88 1.42h1c0-.49-.42-1.66-1.33-2.25a20 20 0 0 0-4.11-2.11c-.65.89-1.86 1.34-3.06 1.34s-2.41-.45-3.06-1.34a20 20 0 0 0-4.1 2.1A3.2 3.2 0 0 0 3.5 20h1c0-.2.29-1.03.9-1.43a18 18 0 0 1 3.28-1.75"/></svg>

                </Link>
              </li> */}
          <div
            className="flex items-center order-2 md:order-3"
            id="nav-content"
          >
            {/* <AlgoliaSearchBox /> */}
            {/* <MobileSearch /> */}
            {!isMobile && <Cart />}
          </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
