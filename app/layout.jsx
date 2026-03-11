import Navbar from "@/components/layout/Navbar";


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
          <Navbar />      
          {children}
            </body>
        </html>
    )
}