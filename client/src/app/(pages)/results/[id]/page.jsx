import { getAllResults, getOneResults } from '@/api/resultsApi'
import OneResults from './OneResults'
import Results from '@/components/homeComponents/Results'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export async function generateMetadata({ params }) {
  const data = await getOneResults(params?.id)

  return {
    title: data?.title,
    description: data?.description,
  }
}

const page = async ({ params }) => {
  const result = await getOneResults(params?.id)
  const data = await getAllResults(12, 1)
  //   console.log(data)

  const date = new Date(result?.updatedAt)
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }

  const formattedDate = date.toLocaleDateString(undefined, options)
  return (
    <>
      <div className={`${rubik.className}`}>
        <OneResults results={result} formattedDate={formattedDate} />
      </div>
      <Results data={data} title={'More Results'} />
    </>
  )
}

export default page
