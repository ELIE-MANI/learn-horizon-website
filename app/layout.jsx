import Footer from '@/components/layout/Footer';
import './globals.css'
import Navbar from "@/components/layout/Navbar";


export const metadata = {
  title: 'Learn Horizon',
  description: 'A website for tourism and safari in Rwanda',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
          <Navbar />      
          {children}
          <Footer />
            </body>
        </html>
    )
}