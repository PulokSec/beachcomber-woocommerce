// Imports
import Router from 'next/router';
import NProgress from 'nprogress';
import { ApolloProvider } from '@apollo/client';
import localFont from 'next/font/local'
// State import
import { CartProvider } from '@/stores/CartProvider';
import client from '@/utils/apollo/ApolloClient';

// Types
import type { AppProps } from 'next/app';

// Styles
import '@/styles/globals.css';
import 'nprogress/nprogress.css';

// NProgress
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const beachComber = localFont({
  src: '../../public/fonts/beachComber.woff2',
  variable: '--font-beachcomber-semibold',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <CartProvider>
        <main className={`${beachComber.variable} font-sans`}>
        <Component {...pageProps} />
        </main>
      </CartProvider>
    </ApolloProvider>
  );
}

export default MyApp;
