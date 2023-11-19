export const CMS_NAME = 'Markdown'
export const HOME_OG_IMAGE_URL =
  'https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg'

// https://regex101.com/r/gw85cc/2
export const INTERNAL_LINK_REGEX = /\[\[(?<wikitext>.*)\]\]|<a href="(?<mdpath>.*)">(?<mdtext>.*)<\/a>/gim;

// https://regex101.com/r/Yg7HuO/2
export const FRONT_MATTER_REGEX = /^(---)$.+?^(---)$.+?/ims;