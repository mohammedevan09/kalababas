import { getTopRatings } from '@/api/ratingsApi'
import { getAllResults } from '@/api/resultsApi'
import AboutUs from '@/components/homeComponents/AboutUs'
import Landing from '@/components/homeComponents/Landing'
import Pricing from '@/components/homeComponents/Pricing'
import RatingsAndReviews from '@/components/homeComponents/RatingsAndReviews'
import Results from '@/components/homeComponents/Results'

export default async function Home() {
  const results = await getAllResults(12, 1)
  const ratings = await getTopRatings()
  return (
    <>
      <Landing />
      <AboutUs />
      <Results data={results} />
      <RatingsAndReviews data={ratings} />
      <Pricing />
    </>
  )
}
