import { Teko, Work_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ReduxProvider from '@/store/ReduxProvider'
import { Toaster } from 'react-hot-toast'

const teko = Teko({ subsets: ['latin'] })
const ws = Work_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'KalababaS Crypto World',
  description:
    'Top Crypto Signals 2023 Welcome to KalababaS Crypto World! Since 2018, we’ve been immersed in the dynamic cryptocurrency market. Now, we&#8217;re thrilled [&hellip;]',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={teko.className}>
        <ReduxProvider>
          <div className={`font-semibold ${ws.className}`}>
            <Toaster />
          </div>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  )
}
