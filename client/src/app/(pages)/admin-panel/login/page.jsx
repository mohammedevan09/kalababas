import { Work_Sans } from 'next/font/google'
import ActualLogin from './ActualLogin'

const ws = Work_Sans({ subsets: ['latin'] })

const Page = () => {
  return (
    <div
      className={`h-screen sm:w-screen w-[87vw] flex items-center justify-center mx-auto relative ${ws.className}`}
    >
      <ActualLogin />
    </div>
  )
}

export default Page
