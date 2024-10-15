import { SparklesCore } from "@/components/ui/sparkles";
import { metadataInfo } from "@/constants/metaData";
import { roboto } from "@/fonts/fonts";
import Script from "next/script";
import "./globals.css";

export const metadata = metadataInfo;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-bluish`}>
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.01}
            maxSize={0.6}
            particleDensity={250}
            className="w-full h-full"
            particleColor="#d3d3d3"
          />
        </div>
        <div>{children}</div>
        <Script src="script.js" />
      </body>
    </html>
  );
}
