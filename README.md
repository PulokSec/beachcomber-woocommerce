![Screenshot 1](./screenshots/homepage_descktop.png)

## Star History 

# Next.js Ecommerce site with WooCommerce backend

## Live URL: <https://next-woocommerce.dfweb.no>

## Table Of Contents (TOC)

-   [Installation](#Installation)
-   [Features](#Features)
-   [Issues](#Issues)
-   [Troubleshooting](#Troubleshooting)
-   [TODO](#TODO)

## Installation

1.  Install and activate the following required plugins, in your WordPress plugin directory:

-   [woocommerce](https://wordpress.org/plugins/woocommerce) Ecommerce for WordPress.
-   [wp-graphql](https://wordpress.org/plugins/wp-graphql) Exposes GraphQL for WordPress.
-   [wp-graphql-woocommerce](https://github.com/wp-graphql/wp-graphql-woocommerce) Adds WooCommerce functionality to a WPGraphQL schema.

Optional plugin:

-   [headless-wordpress](https://github.com/w3bdesign/headless-wp) Disables the frontend so only the backend is accessible. (optional)

The current release has been tested and is confirmed working with the following versions:

-   WordPress version 6.3.2
-   WooCommerce version 7.4.0
-   WP GraphQL version 1.13.8
-   WooGraphQL version 0.12.0
-   WPGraphQL CORS version 2.1

2.  For debugging and testing, install either:

    <https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/> (Firefox)

    <https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm> (Chrome)

3.  Make sure WooCommerce has some products already


4.  Clone or fork the repo and modify `.env.example` and rename it to `.env`

    Then set the environment variables accordingly in Vercel or your preferred hosting solution.

    See <https://vercel.com/docs/environment-variables>

5.  Modify the values according to your setup

6.  Start the server with `npm run dev`

7.  Enable COD (Cash On Demand) payment method in WooCommerce

8.  Add a product to the cart

9.  Proceed to checkout (Gå til kasse)

10. Fill in your details and place the order

## Features

-   Next.js version 14.2.3
-   React 18
-   Typescript
-   Tests with Playwright
-   Connect to Woocommerce GraphQL API and list name, price and display image for products
-   Support for simple products and variable products
-   Cart handling and checkout with WooCommerce (Cash On Delivery only for now)
-   Meets WCAG accessibility standards where possible
-   Placeholder for products without images
-   Apollo Client with GraphQL
-   React Hook Form
-   Native HTML5 form validation
-   Animations with Framer motion, Styled components and Animate.css
-   Loading spinner created with Styled Components
-   Shows page load progress with Nprogress during navigation
-   Fully responsive design
-   Category and product listings
-   Show stock status
-   Pretty URLs with builtin Nextjs functionality
-   Tailwind 3 for styling
-   JSDoc comments

