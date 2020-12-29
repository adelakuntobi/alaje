import React from 'react'
// import Rectangle38 from '../../images/Rectangle 38.png'
import { ImQuotesLeft } from 'react-icons/im'
// import { GrBlockQuote } from 'react-icons/gr'

function Sample({ text, name, occupation,image }) {
  return (
    <section className="mx-auto mb-40 md:mb-32 sample bg-white hover:text-white cursor-pointer rounded-md w-full md:w-9/12">
      <div className="px-5 md:px-12 py-4 shadow-2xl relative">
        <ImQuotesLeft className="text-gray-300 block mx-auto my-2" size="5rem" />
        <p className="mb-8 overflow-y-hidden p-tag">
          {text}
        </p>
        <div className="text-center absolute testimony text-black">
          <img src={image} alt="Client"
            className="rounded-full block mx-auto h-16 w-16" />
          <h2 className="text-xl md:">{name}</h2>
          <p className="italic">{occupation}</p>
        </div>
      </div>
    </section>
  )
}

export default Sample
