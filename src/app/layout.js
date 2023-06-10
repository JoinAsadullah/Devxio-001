import './globals.css'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Asadullah Portfolio',
  description: 'Muhammad Asadullah Full Stack Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='[color-scheme:dark] scroll-smooth'>
      <body className={`${inter.className} relative`}>{children}</body>
    </html>
  )
}
