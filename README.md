## About The Project

This is a Next.js ecommerce project bootstrapped with create-next-app. It is hooked with Sanity, a real-time CMS, allowing you to edit and add products. It is also integrated with Stripe, a payment gateway to cover payments.

## Technologies

Project is created with:

- Next: 12.3
- Sanity: 2.33
- React: 999
- npm

## Components

#### Next.js Practises

- A "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others using `getServerSideProps` ,`getStaticProps` and `getStaticPaths`to pre-render the dynamic pages to boost performance.

- Dynamic Routing and Linking to dynamic paths with React component <Link />

- Working with next/image

#### Advanced React Practises

- React Fragments

- Usage of React Hooks: useState, useEffect, useContext, useRef

- Advanced State Management of the entire application using React Context API

- Usage of react-hot-toast for notifications and react-icons for icons

- Callback and Arrow functions

#### Usage Of Sanity; a Real-time CMS

    Allows managing the entire content of the app

- Writing basic queries in Sanity, similar to GraphQL queries

- Setting up schemas: Product, Banner

#### Stripe

- Integration with Stripe to manage payments, products, shipping rates, and the entire checkout process

#### Styling in CSS

- Animations, transitions, flexbox and other basic CSS

## Setup

To run this project, install it locally using npm:

```
$ cd ecommerce
$ npm install
$ npm run dev
```
