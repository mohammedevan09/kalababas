import DashTitle from '@/components/DashTitle'
import ResultGrid from './ResutlGrid'
import { getAllResults, getTotalResultsCount } from '@/api/resultsApi'

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

  const data = await getAllResults(queryParams?.limit, queryParams?.page || 1)

  const totalCount = await getTotalResultsCount()

  return (
    <div className="h-screen overflow-y-scroll text-white">
      <DashTitle title={'Results List'} subtitle={'All Results Data!'} />
      <ResultGrid data={data} totalCount={totalCount} />
    </div>
  )
}

export default page
