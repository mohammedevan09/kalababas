import AdminHeader from '@/components/AdminHeader'
import Menu from '@/components/Menu'
import { Work_Sans } from 'next/font/google'

const ws = Work_Sans({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'KalababaS Crypto World Admin panel',
    template: `%s | KalababaS Crypto World`,
  },
  description:
    'Top Crypto Signals 2023 Welcome to KalababaS Crypto World! Since 2018, we’ve been immersed in the dynamic cryptocurrency market. Now, we&#8217;re thrilled [&hellip;]',
}

const layout = ({ children }) => {
  return (
    <div className={`${ws.className}`}>
      <main className="flex gap-2 w-full h-auto">
        <Menu />
        <div className="flex flex-col relative pr-4 w-full">
          <AdminHeader />
          {children}
        </div>
      </main>
    </div>
  )
}

export default layout
