import React from 'react'

const ContactPage = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-neutral-200"></div>
      <div className="text-white text-center relative ">
        <h1 className="text-2xl font-bold m-4">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Phone</h2>
            <p className="text-lg">+254 111727518 (JKUSMA PRESIDENT)</p>
            <p className="text-lg">
              +254 746 120652 (ORGANISING COMMITTEE CHAIR)
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Email</h2>
            <p className="text-lg">jkusmajkuat@gmail.com</p>
            <p className="text-lg">
              brendamaina59@gmail.com (ORGANISING COMMITTEE CHAIR)
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Address</h2>
            <p className="text-lg">
              Jomo Kenyatta University of Agriculture and Technology
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage
