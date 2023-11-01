const HOST = process.env.NEXT_PUBLIC_HOST

export const adminLogin = async (params) => {
  const response = await fetch(`${HOST}/user/admin-login`, {
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

export const handleRefresh = async (params) => {
  try {
    const queryParams = new URLSearchParams(params).toString()
    const response = await fetch(`${HOST}/user/refresh?${queryParams}`)

    if (!response.ok) {
      console.error('Unexpected status code:', response.status)
      return null
    }

    return await response.json()
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export const createUser = async (params) => {
  const response = await fetch(`${HOST}/user/register`, {
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
