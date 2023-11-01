import { getAllRatings, getTotalRatingsCount } from '@/api/ratingsApi'
import DashTitle from '@/components/DashTitle'
import RatingsGrid from './RatingsGrid'

const page = async ({ searchParams }) => {
  const queryParams = {}
  if (Number(searchParams.limit)) {
    queryParams.limit = Number(searchParams.limit)
  } else {
    queryParams.limit = 10
  }

  if (Number(searchParams.page)) {
    queryParams.page = Number(searchParams.page) + 1
  }

  const data = await getAllRatings(queryParams?.limit, queryParams?.page || 1)

  const totalCountData = await getTotalRatingsCount()

  return (
    <div className="h-screen overflow-y-scroll text-white">
      <DashTitle title={'Ratings List'} subtitle={'All Ratings Data!'} />
      <RatingsGrid data={data} totalCount={totalCountData?.totalData} />
    </div>
  )
}

export default page
