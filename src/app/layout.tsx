
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
// import { useEffect, useState } from "react";
// import { getPromos } from "@/services/promos";

export const metadata: Metadata = {
  title: "Gowanus Wharf",
  description:
    "Anchored on the northern point of the Gowanus Canal Esplanade, The Wharf is a residential, arts, and retail locale set to unfold across 4 residential towers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [data, setData] = useState<string[] | null>(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // async function handleData() {
  //   try {
  //     const response = await getPromos();
  //     setData(response);
  //   } catch (err) {
  //     setError("Failed to fetch data");
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   handleData();
  // }, []);

  // if (loading)
  //   return <div className="w-screen h-screen bg-navy flex items-center justify-center">Carregando...</div>;

  // if (error) return <p className="text-red-500">{error}</p>;

  return (
    <html lang="en">
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NM69X2T5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* {data && data?.length > 0 && (
          <div className="absolute top-0 w-full flex justify-center z-50 leading-none bg-marigold">
            <div className="w-[95%] h-full bg-navy text-navy flex justify-center text-center px-4 py-4">
              <span className="accent4 text-white">TESTESTESTE</span>
            </div>
          </div>
        )} */}

        {children}

        {/* Google Tag Manager Script */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': 
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NM69X2T5');`}
        </Script>
      </body>
    </html>
  );
}