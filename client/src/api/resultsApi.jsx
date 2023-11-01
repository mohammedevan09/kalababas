const host = process.env.NEXT_PUBLIC_HOST

export const getAllResults = async (limit, page) => {
  const queryParams = new URLSearchParams({ limit, page }).toString()
  const url = `${host}/results?${queryParams}`
  const res = await fetch(url, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const getTotalResultsCount = async () => {
  const res = await fetch(`${host}/results/totalCount`, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const getOneResults = async (id) => {
  const res = await fetch(`${host}/results/${id}`, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const createResult = async (params) => {
  const response = await fetch(`${host}/results`, {
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

export const uploadResultsImage = async (id, formData) => {
  let url = `${host}/results/upload/${id}`

  try {
    const response = await fetch(url, {
      method: 'PUT',
      body: formData,
    })

    if (!response.ok) {
      const errorMessage = `An error has occurred: ${response.status}`
      throw new Error(errorMessage)
    }

    return await response.json()
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export const deleteResult = async (id) => {
  const res = await fetch(`${host}/results/${id}`, {
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
