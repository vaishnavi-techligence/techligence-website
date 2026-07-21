import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingConfiguratorButton from "../components/FloatingConfiguratorButton";
import AOSProvider from "@/components/AOSProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Techligence | AI-Powered Service Robots",
  description: "Techligence Robotics - Revolutionizing industries with AI-powered service robots and intelligent automation solutions.",
  openGraph: {
    title: "Techligence | AI-Powered Service Robots",
    description: "Revolutionizing industries with AI-powered service robots and intelligent automation solutions.",
    url: "https://www.techligence.in",
    siteName: "Techligence",
    type: "website",
    images: [
      {
        url: "/logos/logo-light.png",
        width: 256,
        height: 256,
        alt: "Techligence Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Techligence | AI-Powered Service Robots",
    description: "Revolutionizing industries with AI-powered service robots and intelligent automation solutions.",
    images: ["/logos/logo-light.png"],
  },
  icons: {
    icon: "/logos/logo-light.png",
    apple: "/logos/logo-light.png",
  },
  metadataBase: new URL("https://www.techligence.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storedTheme = localStorage.getItem('theme');
                  var theme = storedTheme || 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <AOSProvider />
        {children}
        
        {/* Floating Configurator Button (Conditional on route) */}
        <FloatingConfiguratorButton />

        {/* Global GPU SVG Chroma Filters for background removal */}
        <svg width="1" height="1" className="absolute pointer-events-none opacity-0" style={{ position: "absolute", top: "-9999px", left: "-9999px", pointerEvents: "none" }}>
          <defs>
            <filter id="remove-green" colorInterpolationFilters="sRGB">
              <feColorMatrix type="matrix" values="
                0 0 0 0 0  
                0 0 0 0 0  
                0 0 0 0 0  
                6.350 -17.798 13.239 0 1.333" result="matte"/>
              <feGaussianBlur in="matte" stdDeviation="0.8" result="blurred-matte"/>
              <feComposite in="SourceGraphic" in2="blurred-matte" operator="in" result="keyed-src"/>
              <feColorMatrix in="keyed-src" type="matrix" values="
                1 0 0 0 0  
                0.5 0 0.5 0 0  
                0 0 1 0 0  
                0 0 0 1 0"/>
            </filter>
            <filter id="remove-green-light" colorInterpolationFilters="sRGB">
              <feColorMatrix type="matrix" values="
                0 0 0 0 0  
                0 0 0 0 0  
                0 0 0 0 0  
                6.350 -17.798 13.239 0 1.333" result="matte"/>
              <feGaussianBlur in="matte" stdDeviation="0.8" result="blurred-matte"/>
              <feComposite in="SourceGraphic" in2="blurred-matte" operator="in" result="keyed-src"/>
              <feColorMatrix in="keyed-src" type="matrix" values="
                1 0 0 0 0  
                0.5 0 0.5 0 0  
                0 0 1 0 0  
                0 0 0 1 0"/>
            </filter>
            <filter id="remove-green-showcase" colorInterpolationFilters="sRGB">
              <feColorMatrix type="matrix" values="
                0 0 0 0 0  
                0 0 0 0 0  
                0 0 0 0 0  
                6.350 -17.798 13.239 0 1.333" result="matte"/>
              <feGaussianBlur in="matte" stdDeviation="0.8" result="blurred-matte"/>
              <feComposite in="SourceGraphic" in2="blurred-matte" operator="in" result="keyed-src"/>
              <feColorMatrix in="keyed-src" type="matrix" values="
                1 0 0 0 0  
                0.5 0 0.5 0 0  
                0 0 1 0 0  
                0 0 0 1 0"/>
            </filter>
            <filter id="remove-green-showcase-light" colorInterpolationFilters="sRGB">
              <feColorMatrix type="matrix" values="
                0 0 0 0 0  
                0 0 0 0 0  
                0 0 0 0 0  
                6.350 -17.798 13.239 0 1.333" result="matte"/>
              <feGaussianBlur in="matte" stdDeviation="0.8" result="blurred-matte"/>
              <feComposite in="SourceGraphic" in2="blurred-matte" operator="in" result="keyed-src"/>
              <feColorMatrix in="keyed-src" type="matrix" values="
                1 0 0 0 0  
                0.5 0 0.5 0 0  
                0 0 1 0 0  
                0 0 0 1 0"/>
            </filter>
            <filter id="remove-black-showcase" colorInterpolationFilters="sRGB">
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  3.5 3.5 3.5 0 -0.5"
              />
            </filter>
            <filter id="remove-black-showcase-light" colorInterpolationFilters="sRGB">
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  3.5 3.5 3.5 0 -0.5"
              />
            </filter>
            <filter id="remove-white-showcase" colorInterpolationFilters="sRGB">
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -3 -3 -3 0 3.5"
              />
            </filter>
            <filter id="remove-t2max-bg" colorInterpolationFilters="sRGB">
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -8.324 14.549 -30.101 0 21.95"
              />
            </filter>
          </defs>
        </svg>
      </body>
    </html>
  );
}
