'use client'

import { sendAnEmail } from '@/api/sendEmailApi'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

const SendEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      number: '',
      message: '',
    },
    mode: 'onChange',
  })

  const handleClick = (formData) => {
    // console.log(formData)
    sendAnEmail({
      ...formData,
      subject: 'An Email from crypto.kalababas.com',
    }).then(() => {})
    toast.success('Thanks For Contacting with us!')
    reset()
  }

  return (
    <form className="sm:w-[400px] w-[350px]">
      <h2 className="sm:text-4xl text-3xl font-semibold mb-3 mx-auto text-center">
        Contact
      </h2>
      <label
        htmlFor="name"
        className="block mb-1 text-md font-medium text-gray-900 dark:text-white"
      >
        Name
      </label>
      <input
        type="text"
        id="name"
        className="mb-3 text-white text-md outline-none block w-full p-2.5 bg-[black] border-b border-indigo-600 tracking-wider"
        placeholder="Your Name"
        {...register('name', {
          required: {
            value: true,
            message: 'Name is required',
          },
        })}
      />
      {errors.name?.message && (
        <p className="text-red-500 text-sm mt-1 mb-3 font-bold">
          {errors.name?.message}
        </p>
      )}
      <label
        htmlFor="email"
        className="block mb-1 text-md font-medium text-gray-900 dark:text-white"
      >
        Email
      </label>
      <input
        type="email"
        id="email"
        className="mb-3 text-white text-md outline-none block w-full p-2.5 bg-[black] border-b border-indigo-600"
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
        htmlFor="phoneNo"
        className="block mb-1 text-md font-medium text-gray-900 dark:text-white"
      >
        Mobile Number
      </label>
      <input
        type="number"
        id="phoneNo"
        className="mb-3 text-white text-md outline-none block w-full p-2.5 bg-[black] border-b border-indigo-600"
        placeholder="+00 xxxxxxxx"
        {...register('number', {
          required: {
            value: true,
            message: 'Phone Number is required',
          },
        })}
      />
      {errors.number?.message && (
        <p className="text-red-500 text-sm mt-1 mb-3 font-bold">
          {errors.number?.message}
        </p>
      )}
      <label
        htmlFor="comment"
        className="block mb-1 text-md font-medium text-gray-900 dark:text-white"
      >
        Comment
      </label>
      <textarea
        type="text"
        id="comment"
        className="mb-3 text-white text-md outline-none block w-full p-2.5 bg-[black] border border-indigo-600"
        placeholder="I am happy with your service!"
        {...register('message', {
          required: {
            value: true,
            message: 'Message is required',
          },
        })}
      />
      {errors.message?.message && (
        <p className="text-red-500 text-sm mt-1 mb-3 font-bold">
          {errors.message?.message}
        </p>
      )}
      <p
        id="helper-text-explanation"
        className="mt-2 text-md text-gray-500 dark:text-gray-400"
      >
        We’ll never share your details. Read our{' '}
        <a
          href="/"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Privacy Policy
        </a>
        .
      </p>
      <button
        type="submit"
        className="btn bg-white text-black mt-6 mb-[1rem] block w-full mx-auto text-2xl font-semibold py-2 hover:bg-black hover:text-white transition-all duration-300 hover:border border-white rounded-md"
        onClick={handleSubmit(handleClick)}
      >
        Submit
      </button>
    </form>
  )
}

export default SendEmail
