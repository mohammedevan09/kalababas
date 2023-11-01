import DashTitle from '@/components/DashTitle'
import AddNewResults from './Add-results'

const page = () => {
  return (
    <div className="h-screen overflow-y-scroll text-white">
      <DashTitle title={'Create Result!'} subtitle={'Add a new result!'} />
      <AddNewResults />
    </div>
  )
}

export default page
