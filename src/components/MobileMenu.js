import { IoCloseSharp } from 'react-icons/io5'
import Link from 'next/link'

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    isOpen && (
      <ul className="flex-col flex items-center fixed inset-0 left-1/4 bg-white gap-12 justify-center p-8 tablet:hidden text-black font-poly">
        <div className="absolute right-6 top-6 scale-150">
          <IoCloseSharp onClick={toggle} />
        </div>
        <li>
          <Link href="/about-us" onClick={toggle}>
            About
          </Link>
        </li>
        <li>
          <Link href="/pay">Payment</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>
    )
  )
}

export default MobileMenu
