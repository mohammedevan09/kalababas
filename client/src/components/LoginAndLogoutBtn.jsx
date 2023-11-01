import GoogleLogin, { GoogleLogout } from 'react-google-login'

export const GoogleLoginButton = ({
  responseSuccessGoogle,
  responseFailureGoogle,
}) => {
  return (
    <GoogleLogin
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
      buttonText="Login with Google to Rate"
      onSuccess={responseSuccessGoogle}
      onFailure={responseFailureGoogle}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
    />
  )
}

export const GoogleLogoutButton = ({ logoutSuccess }) => {
  return (
    <GoogleLogout
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
      buttonText="Logout"
      onLogoutSuccess={logoutSuccess}
    />
  )
}
