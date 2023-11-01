const host = process.env.NEXT_PUBLIC_HOST

export const getAllRatings = async (limit, page) => {
  const queryParams = new URLSearchParams({ limit, page }).toString()
  const url = `${host}/ratings?${queryParams}`
  const res = await fetch(url, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const getTotalRatingsCount = async () => {
  const res = await fetch(`${host}/ratings/totalCount`, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const getTopRatings = async () => {
  const res = await fetch(`${host}/ratings/topStar`, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const createRatings = async (params) => {
  const response = await fetch(`${host}/ratings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return await response.json()
}

export const getOneRatings = async (email) => {
  const res = await fetch(`${host}/ratings/${email}`, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const deleteRatings = async (id) => {
  const res = await fetch(`${host}/ratings/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
