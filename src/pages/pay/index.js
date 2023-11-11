import React from 'react'

const PaymentPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover relative font-poly"
      style={{ backgroundImage: "url('/dinner.jpg')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-neutral-400"></div>

      <div className="text-white text-center relative">
        <h1 className="text-4xl font-bold mb-4">Support JKUSMA Students</h1>

        <div className=" mx-4  bg-gray-800 p-6 rounded-lgp-6 rounded-lg shadow-md ">
          <p className="text-lg mb-4">
            To donate, you can use M-Pesa with the following details:
          </p>
          <div className="flex flex-col space-y-2">
            <p className="text-lg">
              Paybill: <span className="font-bold">522522</span>
            </p>
            <p className="text-lg">
              Account: <span className="font-bold">6047415</span>
            </p>
          </div>
        </div>

        <p className="text-lg mt-4 ">Thank you for your generosity!</p>
      </div>
    </div>
  )
}

export default PaymentPage
