import { useContext, useState, useEffect } from 'react';
import Link from 'next/link';

import { CartContext } from '@/stores/CartProvider';

interface ICartProps {
  stickyNav?: boolean;
}

/**
 * Displays the shopping cart contents.
 * Displays amount of items in cart.
 */
const Cart = ({ stickyNav }: ICartProps) => {
  const { cart } = useContext(CartContext);
  const [productCount, setProductCount] = useState<number | null | undefined>();

  useEffect(() => {
    if (cart) {
      setProductCount(cart.totalProductsCount);
    } else {
      setProductCount(null);
    }
  }, [cart]);

  return (
    <>
      <Link href="/handlekurv">
        <span
          className="pl-4 mt-2 no-underline inline-block"
          aria-label="Handlekurv"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="28px" height="28px">
    <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
        <path d="M 76.675 62.176 H 24.794 c -1.409 0 -2.628 -0.98 -2.93 -2.356 l -8.222 -37.465 c -0.195 -0.887 0.023 -1.815 0.592 -2.523 c 0.57 -0.708 1.429 -1.12 2.338 -1.12 H 87 c 0.853 0 1.665 0.363 2.234 0.998 c 0.568 0.635 0.841 1.482 0.748 2.33 l -3.434 31.287 C 85.995 58.371 81.75 62.176 76.675 62.176 z M 27.207 56.176 h 49.468 c 2.01 0 3.69 -1.507 3.909 -3.505 l 3.068 -27.96 H 20.302 L 27.207 56.176 z" fill="#ffffff"/>
        <path d="M 53.842 62.176 c -1.657 0 -3 -1.343 -3 -3 V 21.711 c 0 -1.657 1.343 -3 3 -3 s 3 1.343 3 3 v 37.465 C 56.842 60.833 55.499 62.176 53.842 62.176 z" fill="#ffffff"/>
        <path d="M 68.233 62.176 c -0.082 0 -0.165 -0.003 -0.249 -0.01 c -1.651 -0.137 -2.88 -1.585 -2.744 -3.236 l 3.083 -37.465 c 0.136 -1.65 1.568 -2.882 3.236 -2.744 c 1.651 0.136 2.88 1.584 2.744 3.236 l -3.083 37.465 C 71.092 60.989 69.779 62.176 68.233 62.176 z" fill="#ffffff"/>
        <path d="M 39.448 62.176 c -1.51 0 -2.81 -1.137 -2.978 -2.673 l -4.111 -37.465 c -0.181 -1.647 1.008 -3.128 2.655 -3.309 c 1.647 -0.18 3.128 1.008 3.309 2.655 l 4.111 37.465 c 0.181 1.646 -1.008 3.129 -2.655 3.31 C 39.668 62.17 39.558 62.176 39.448 62.176 z" fill="#ffffff"/>
        <path d="M 84.944 43.443 H 20.683 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 h 64.262 c 1.657 0 3 1.343 3 3 S 86.602 43.443 84.944 43.443 z" fill="#ffffff"/>
        <circle cx="34.47" cy="73.28" r="7" fill="#ffffff"/>
        <circle cx="74.5" cy="73.28" r="7" fill="#ffffff"/>
        <path d="M 16.569 24.711 c -1.378 0 -2.62 -0.956 -2.927 -2.357 l -0.554 -2.522 c -0.724 -3.296 -3.698 -5.689 -7.072 -5.689 H 3 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 h 3.016 c 6.171 0 11.61 4.375 12.933 10.402 l 0.554 2.521 c 0.355 1.619 -0.668 3.218 -2.287 3.574 C 16.999 24.689 16.782 24.711 16.569 24.711 z" fill="#ffffff"/>
        <path d="M 64.526 73.691 c -0.005 -0.136 -0.021 -0.27 -0.021 -0.407 c 0 -2.07 0.633 -3.995 1.715 -5.593 H 42.755 c 1.082 1.597 1.714 3.523 1.714 5.593 c 0 0.137 -0.015 0.271 -0.021 0.407 H 64.526 z" fill="#ffffff"/>
        <path d="M 24.469 73.284 c 0 -2.081 0.64 -4.015 1.733 -5.617 c -1.408 -0.123 -2.519 -1.295 -2.519 -2.734 c 0 -1.521 1.237 -2.758 2.758 -2.758 c 1.657 0 3 -1.343 3 -3 s -1.343 -3 -3 -3 c -4.83 0 -8.758 3.929 -8.758 8.758 c 0 4.154 2.909 7.634 6.796 8.528 C 24.477 73.402 24.469 73.344 24.469 73.284 z" fill="#ffffff"/>
    </g>
</svg>
        </span>
      </Link>

      {productCount && (
        <span
          className={`w-6 h-6 pb-2 -mt-5 text-center rounded-full         
          ${stickyNav ? 'text-black bg-white' : 'text-white bg-black'}`}
        >
          {productCount}
        </span>
      )}
    </>
  );
};

export default Cart;