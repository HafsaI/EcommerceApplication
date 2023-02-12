import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'zw1486fw',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

// build sanity images 
const builder = imageUrlBuilder(client);

// sanity is going to give us access to url images 
export const urlFor = (source) => builder.image(source);

// we can use sanity client anywhere in the code once we do this