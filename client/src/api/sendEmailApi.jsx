const HOST = process.env.NEXT_PUBLIC_HOST

export const sendAnEmail = async (params) => {
  const response = await fetch(`${HOST}/sendEmail`, {
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
