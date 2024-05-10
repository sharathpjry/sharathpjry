/* eslint-disable padded-blocks */
import "./globals.css"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sharath S Poojari",
  description: "Sharath S Poojari"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/ScrollMagic.min.js"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Crystian%20 Sarghe"></link>
        <meta name="keywords" content="Full Stack Rester, Next.js, JavaScript, React.js, Software Tester, "/>
        <meta name="author" content="Sharath S Poojari"/>

        <meta property="og:title" content="Sharath S Poojari - Full Stack Tester"/>
        <meta property="og:description" content="Passionate Full Stack Tester skilled in Automation Testing."/>
        
        <meta name="twitter:title" content="Sharath S Poojari - Full Stack Tester"/>
        <meta name="twitter:description" content="Passionate Full Stack Tester skilled in Automation Testing"/>
        
        <meta property="profile:username" content="sharath-poojari-93a657191"/>

        <meta name="octolytics-actor-id" content="SharathPoojari"/>

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
