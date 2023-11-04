'use client'

import { adminLogin } from '@/api/userApi'
import { setToken, setUsers } from '@/store/reducers/userReducer'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

const ActualLogin = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { userInfo, token } = useSelector((state) => state?.user)

  useEffect(() => {
    if (userInfo && token && userInfo?.role === 'admin') {
      router.push('/admin-panel/dashboard')
    }
  }, [userInfo, token, router])

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  })

  return (
    <>
      <div className="blur-new left-0"></div>
      <div className="blur-new right-0"></div>
      <div className="blur-new left-[40%] bottom-0"></div>
      <div className="blur-new right-[40%] top-0"></div>
      <div className="grid items-around bg-[#0000003b] justify-center xl:p-10 md:p-5 p-3 rounded-md text-white">
        <>
          <SignUp
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            isValid={isValid}
            dispatch={dispatch}
            router={router}
          />
        </>
      </div>
    </>
  )
}

const SignUp = ({
  register,
  handleSubmit,
  errors,
  isValid,
  dispatch,
  router,
}) => {
  const handleClick = (formData) => {
    // console.log(formData)
    if (isValid) {
      adminLogin(formData)
        .then((data) => {
          dispatch(setUsers(data))
          dispatch(setToken(data?.token))
          toast.success('Logged in successfully!')
          if (data?.role === 'admin') {
            router.push('/admin-panel/dashboard')
          }
        })
        .catch((err) => {
          toast.error('Logged in failed')
          console.log('kk', err)
        })
    }
  }

  return (
    <form className="md:w-[480px] sm:w-[355px] w-[276px] mx-auto">
      <div className="w-full text-center mb-10">
        <div className="mx-auto text-center inline-block">
          <h1 className="text-5xl font-semibold">Login</h1>
          <div className="w-[60%] h-1 rounded-md bg-white mt-3"></div>
        </div>
      </div>
      <label
        htmlFor="email"
        className="block mb-1 text-md text-white font-bold"
      >
        Email
      </label>
      <input
        type="email"
        id="email"
        className="mb-1 text-white text-md outline-none block w-full py-1 border-b border-white font-semibold"
        placeholder="name@email.com"
        {...register('email', {
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Enter a valid email',
          },
          required: {
            value: true,
            message: 'Email is required',
          },
        })}
      />
      {errors.email?.message && (
        <p className="text-red-500 text-sm mt-1 mb-3 font-bold">
          {errors.email?.message}
        </p>
      )}
      <label
        htmlFor="password"
        className="block mb-1 text-md text-white font-bold"
      >
        Password
      </label>
      <input
        type="password"
        id="password"
        className="mb-1 text-white text-md outline-none block w-full py-1 border-b border-white font-semibold"
        placeholder="Enter correct password"
        {...register('password', {
          minLength: {
            value: 6,
            message: 'Minimum Length must be 6.',
          },
          required: {
            value: true,
            message: 'Email is required',
          },
        })}
      />
      {errors.password?.message && (
        <p className="text-red-500 text-sm mt-1 mb-3 font-bold">
          {errors.password?.message}
        </p>
      )}
      <button
        type="submit"
        className="btn bg-black text-white mt-6 mb-[1rem] block w-full mx-auto text-2xl font-semibold py-2 hover:bg-white hover:text-black transition-all duration-300 hover:border border-white rounded-full"
        onClick={handleSubmit(handleClick)}
      >
        Login
      </button>
    </form>
  )
}

export default ActualLogin
