import React from 'react'

export default function Footer() {
  return (
    <div className="absolute bottom-0 left-0 p-4 text-white z-10 font-poly">
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
  )
}
