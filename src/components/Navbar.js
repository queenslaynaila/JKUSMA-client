'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import MobileMenu from './MobileMenu'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 200) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={
        isScrolled
          ? 'fixed  w-full shadow-sm flex justify-between p-4 items-center text-white bg-black/80 z-10'
          : 'fixed  w-full shadow-sm flex justify-between p-4 items-center text-white z-10'
      }
    >
      <Link href="/" className="flex items-center ml-10">
        <Image src="/logo.jpeg" width={50} height={50} alt="logo" />
      </Link>
      <div className="absolute right-6 tablet:hidden top-6 scale-150 ">
        <HiOutlineMenuAlt2 onClick={toggle} className="md:text-4xl" />
      </div>
      <ul className="hidden tablet:flex gap-8 p-6 font-poly text-base tracking-wide font-semibold">
        <li>
          <Link href="/about-us">About</Link>
        </li>
        <li>
          <Link href="/meforyou">Me For You</Link>
        </li>

        <li>
          <Link href="/pay">Payment</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>
      <MobileMenu isOpen={isOpen} toggle={toggle} />
    </nav>
  )
}

export default NavBar
