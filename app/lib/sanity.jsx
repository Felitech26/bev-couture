import { createClient  } from 'next-sanity';
import ImageUrlBuilder from  '@sanity/image-url';

export const client = createClient({
  projectId: '5h72l52s',
  dataset: 'production',
  apiVersion: '2024-07-27',
  useCdn: true,
})

const imgBuilder = ImageUrlBuilder(client);

export function urlFor(source) {
  return imgBuilder.image(source);
}