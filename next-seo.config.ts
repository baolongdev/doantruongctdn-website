import { DefaultSeoProps } from "next-seo";
import urlbase from "./store/linkwebbase";

const description = ""
// See https://www.npmjs.com/package/next-seo for more options
const config: DefaultSeoProps = {
  titleTemplate: "%s | Đoàn trường THPT chuyên Trần Đại Nghĩa",
  defaultTitle: "Đoàn trường THPT chuyên Trần Đại Nghĩa ",
  canonical: urlbase,
  description,
  
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    title: 'Đoàn trường THPT chuyên Trần Đại Nghĩa',
    description,
    url: urlbase,
    images: [{
      url: `${urlbase}favicon/og-image.png`,
      width: 1200,
      height: 787,
      alt: 'Og Image Alt',
    }]
  },
  twitter: {
    site: '@Đoàn trường THPT chuyên Trần Đại Nghĩa',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon/32.png',
      sizes: '32x32'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon/16.png',
      sizes: '16x16'
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/180.png"
    },
    {
      rel: "shortcut icon",
      type: "image/png",
      href: "/favicon/196.png"
    },
    {
      rel: "manifest",
      href: "/favicon/site.webmanifest"
    }
  ]
};

export default config;