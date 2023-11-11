import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-white py-4 fixed bottom-0 left-0 w-full">
      <div className="container mx-auto text-left">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline mr-4"
        >
          Facebook
        </a>
        <span className="text-gray-500">/</span>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline mx-4"
        >
          YouTube
        </a>
        <span className="text-gray-500">/</span>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline ml-4"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
