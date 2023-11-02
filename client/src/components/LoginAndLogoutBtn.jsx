'use client'

import { GoogleLogin } from '@react-oauth/google'
import { FcGoogle } from 'react-icons/fc'

export const GoogleLoginButton = ({
  responseSuccessGoogle,
  responseFailureGoogle,
}) => {
  return (
    <GoogleLogin
      text="Login with Google to Rate"
      onSuccess={responseSuccessGoogle}
      onError={responseFailureGoogle}
    />
  )
}

export const GoogleLogoutButton = ({ logoutSuccess }) => {
  return (
    <button
      onClick={logoutSuccess}
      className="flex justify-center items-center gap-2 bg-white py-2 px-3 text-black rounded-md text-lg font-semibold
      "
    >
      <FcGoogle size={23} /> Logout
    </button>
  )
}
