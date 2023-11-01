import { BiSolidBookAdd } from 'react-icons/bi'
import { FaListCheck } from 'react-icons/fa6'
import { GiDroplets } from 'react-icons/gi'

export const navItems = [
  {
    text: 'Add New Result',
    icon: <BiSolidBookAdd color="#6ca5ff" size={20} />,
    link: '/admin-panel/dashboard',
  },
  {
    text: 'Result List',
    icon: <FaListCheck color="#6ca5ff" size={20} />,
    link: '/admin-panel/dashboard/results-list',
  },
  {
    text: 'Ratings List',
    icon: <GiDroplets color="#6ca5ff" size={20} />,
    link: '/admin-panel/dashboard/ratings-list',
  },
]
