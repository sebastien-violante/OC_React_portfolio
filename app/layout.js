import { Julee } from "next/font/google";
import "./globals.css";
import Navigation from '../components/Navigation/Navigation'
import Footer from  '../components/Footer/Footer'


const julee = Julee({
  weight:['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--julee'
})

export const metadata = {
  title: "Sébastien VIOLANTE",
  description: "Mon portfolio en continu...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={julee.variable}>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
