import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        url: "/favicon.png",
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
    images: ["/favicon.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
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
        {children}
        {/* Global GPU SVG Chroma Filters for background removal */}
        <svg width="0" height="0" className="absolute pointer-events-none" style={{ position: "absolute", width: 0, height: 0 }}>
          <defs>
            <filter id="remove-green" colorInterpolationFilters="sRGB">
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0.5 0 0.5 0 0  0 0 1 0 0  6.350 -17.798 13.239 0 1.333"
              />
              <feComponentTransfer>
                <feFuncA type="linear" slope="3" intercept="-1" />
              </feComponentTransfer>
            </filter>
            <filter id="remove-green-showcase" colorInterpolationFilters="sRGB">
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0.5 0 0.5 0 0  0 0 1 0 0  6.350 -17.798 13.239 0 1.333"
              />
              <feComponentTransfer>
                <feFuncA type="linear" slope="3" intercept="-1" />
              </feComponentTransfer>
            </filter>
            <filter id="remove-black-showcase" colorInterpolationFilters="sRGB">
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  20.0 20.0 20.0 0 -0.2"
              />
              <feComponentTransfer>
                <feFuncA type="linear" slope="3" intercept="-1" />
              </feComponentTransfer>
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
