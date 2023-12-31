import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
const PageLayout = () => {
  const [dinnerTime, setDinnerTime] = useState(false)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [email, setEmail] = useState('')
  const router = useRouter()
  const handleAboutMeForYouClick = (e) => {
    e.preventDefault()
    console.log('About Me For You button clicked')
    router.push('/meforyou')
  }

  useEffect(() => {
    const target = new Date('11/11/2023 20:00:00')

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

  return (
    <>
      <div className="top-0 left-0 w-full h-full opacity-20 bg-neutral-300"></div>

      <div className="text-white text-center">
        {dinnerTime ? (
          <>
            <h1 className="text-4xl font-bold mb-4">
              Welcome to the Annual JKUSMA Dinner and Launch of the Me For You
              Program
            </h1>
            <div className="text-6xl mb-4 flex justify-center items-center ">
              <div className="flex flex-col items-center mr-2 from-stone-950 ">
                <span>0</span>
                <span className="text-sm">Day{days !== 1 && 's'}</span>
              </div>
              <span className="mx-2">:</span>
              <div className="flex flex-col items-center mr-2">
                <span>0</span>
                <span className="text-sm">Hour{hours !== 1 && 's'}</span>
              </div>
              <span className="mx-2">:</span>
              <div className="flex flex-col items-center mr-2">
                <span>{0}</span>
                <span className="text-sm">Minute{minutes !== 1 && 's'}</span>
              </div>
              <span className="mx-2">:</span>
              <div className="flex flex-col items-center">
                <span>0</span>
                <span className="text-sm">Second{seconds !== 1 && 's'}</span>
              </div>
            </div>
            <p className="text-lg">
              You can watch the vent live on the following platfomrs
            </p>

            <div className="flex justify-center mt-4">
              <a
                href="your_facebook_link"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 bg-gray-800 px-4 py-2 text-white rounded-md text-center"
              >
                Facebook
              </a>
              <a
                href="your_youtube_link"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 bg-gray-800 px-4 py-2 text-white rounded-md text-center"
              >
                YouTube
              </a>
              <a
                href="your_instagram_link"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 bg-gray-800 px-4 py-2 text-white rounded-md text-center"
              >
                Instagram
              </a>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-4">
              Annual JKUSMA Dinner and Fundraising Gala
            </h1>

            <div className="text-6xl mb-4 flex justify-center items-center ">
              <div className="flex flex-col items-center mr-2 from-stone-950 ">
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

            <p className="text-lg">
              Launch of the Me For You Fund on November 12, 2023, at 5:00 PM
            </p>
            <button
              className="px-6 py-2 my-2 bg-gray-800 text-white rounded-md cursor-pointer"
              onClick={handleAboutMeForYouClick}
            >
              About Me For You
            </button>
          </>
        )}
      </div>
    </>
  )
}

export default PageLayout
