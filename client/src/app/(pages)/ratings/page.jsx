import { getAllRatings, getTotalRatingsCount } from '@/api/ratingsApi'
import RatingsToShow from './RatingsToShow'

const page = async ({ searchParams }) => {
  const queryParams = {}
  if (searchParams.limit) {
    queryParams.limit = searchParams.limit
  } else {
    queryParams.limit = 12
  }

  if (searchParams.page) {
    queryParams.page = searchParams.page
  } else {
    queryParams.page = 1
  }

  const data = await getAllRatings(queryParams?.limit, queryParams?.page)
  const totalCount = await getTotalRatingsCount()

  return (
    <>
      <RatingsToShow data={data} totalCount={totalCount} />
    </>
  )
}

export default page
