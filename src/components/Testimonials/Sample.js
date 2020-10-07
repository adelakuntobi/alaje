import React from 'react'
// import Rectangle38 from '../../images/Rectangle 38.png'
import { ImQuotesLeft } from 'react-icons/im'
// import { GrBlockQuote } from 'react-icons/gr'

function Sample({ text, name, occupation,image }) {
  return (
    <section className="w-8/12 mx-auto my-5 lg:my-0 lg:w-1/3 sample bg-white hover:text-white hover:cursor-pointer rounded-md">
      <div className="px-12 py-4 shadow-2xl relative mx-2">
        <ImQuotesLeft className="text-gray-300 block mx-auto my-2" size="5rem" />
        <p className="mb-8 overflow-y-hidden p-tag">
          {text}
        </p>
        <div className="text-center absolute testimony text-black">
          <img src={image} alt="Client"
            className="rounded-full block mx-auto h-16 w-16" />
          <h2>{name}</h2>
          <p className="italic">{occupation}</p>
        </div>
      </div>
    </section>
  )
}

export default Sample
