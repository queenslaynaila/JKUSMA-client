'use client'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CountdownPage = () => {
  const [dinnerTime, setDinnerTime] = useState(false)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [email, setEmail] = useState('')

  useEffect(() => {
    const target = new Date('11/11/2023 17:00:00')

    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d)

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      setHours(h)

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      setMinutes(m)

      const s = Math.floor((difference % (1000 * 60)) / 1000)
      setSeconds(s)

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setDinnerTime(true)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const notifyError = () => toast.error('An error occured', { theme: 'colored' })
  const notifySuccess = () =>
    toast.success('Email received', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      style: {
        backgroundColor: '#FFCE3C',
        color: '#000',
      },
    })
  const handleNotifyClick = (e) => {
    const data  ={email:email}
    e.preventDefault()
    const apiUrl = 'http://[::1]:3001/notifications'
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          notifySuccess()
          console.log('Email notification sent successfully!')
        } else {
          notifyError()
          console.error('Failed to send email notification.')
        }
      })
      .catch((error) => {
        notifyError()
        console.error('An error occurred:', error)
      })
  }

  return (
    <div className="bg-gradient-to-r from-blue-800 to-indigo-900 min-h-screen flex items-center justify-center">
     <ToastContainer/>
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Annual JKUSMA Dinner</h1>

        <div className="text-4xl mb-4 flex justify-center items-center">
          <div className="flex flex-col items-center mr-2">
            <span>{days}</span>
            <span className="text-sm">Day{days !== 1 && 's'}</span>
          </div>
          <span className="mx-2">:</span>
          <div className="flex flex-col items-center mr-2">
            <span>{hours}</span>
            <span className="text-sm">Hour{hours !== 1 && 's'}</span>
          </div>
          <span className="mx-2">:</span>
          <div className="flex flex-col items-center mr-2">
            <span>{minutes}</span>
            <span className="text-sm">Minute{minutes !== 1 && 's'}</span>
          </div>
          <span className="mx-2">:</span>
          <div className="flex flex-col items-center">
            <span>{seconds}</span>
            <span className="text-sm">Second{seconds !== 1 && 's'}</span>
          </div>
        </div>
        <div className="mb-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border rounded-md mr-2 text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="px-6 py-2 bg-white text-purple-600 rounded-md"
            onClick={handleNotifyClick}
          >
            Notify Me
          </button>
        </div>

        <p className="text-sm">
          Dinner starts on November 12, 2023, at 5:00 PM
        </p>
      </div>
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <span className="mr-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Facebook
          </a>
        </span>
        <span className="mr-2">/</span>
        <span className="mr-2">
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            YouTube
          </a>
        </span>
        <span className="mr-2">/</span>
        <span className="mr-2">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Instagram
          </a>
        </span>
      </div>
    </div>
  )
}

export default CountdownPage
