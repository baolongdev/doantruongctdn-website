import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

  return (
    <Html lang="en">
      <Head>
        {/* <!--=============== REMIXICONS ===============--> */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mixitup/3.3.1/mixitup.min.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,r){w._rwq=r;w[r]=w[r]||function(){(w[r].q=w[r].q||[]).push(arguments)}})(window,"rewardful");
          `,
          }}
        ></script>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
