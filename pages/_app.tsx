import { useEffect } from "react";
import router, { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import posthog from "posthog-js";
import SEO from "../next-seo.config";
import "../styles/index.css";
import { NextUIProvider } from "@nextui-org/system";
import ScrollRevealComponent from '../components/utils/scrollreveal';
import { Montserrat } from 'next/font/google';

function setupPostHog() {
  // setup posthog
  const router = useRouter();
  useEffect(() => {
    // Init PostHog
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_API_KEY, { api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST });

    // Track page views
    const handleRouteChange = () => posthog.capture('$pageview');
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

}
export default function MyApp({ Component, pageProps }: AppProps) {
  setupPostHog();

  return (
    <>
      <style jsx global>{`
        :root {
          --body-font: !${Montserrat().style.fontFamily};
        }
      `}</style>
      <DefaultSeo {...SEO} />
      <NextUIProvider navigate={router.push}>
        <ScrollRevealComponent>
          <Component {...pageProps} />
        </ScrollRevealComponent>
      </NextUIProvider>
      <Analytics />
      <SpeedInsights />
    </>
  )
}
