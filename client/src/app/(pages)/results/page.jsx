import { getAllResults, getTotalResultsCount } from '@/api/resultsApi'
import ResultShow from './ResultShow'

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

  const data = await getAllResults(queryParams?.limit, queryParams?.page)
  const totalCount = await getTotalResultsCount()
  return <ResultShow data={data} totalCount={totalCount} />
}

export default page
