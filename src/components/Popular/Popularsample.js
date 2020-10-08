import React, { useState } from 'react'
import image from '../../images/Rectangle 11.png'
function Popularsample({ productname }) {
  const overFunction = () => {
    setIsButton(true)
  }
  const outFunction = () => {
    setIsButton(false)
  }
  const [isButton, setIsButton] = useState(false)
  const tobi = JSON.stringify(productname)
  const tobi2 = JSON.parse(tobi)
  console.log(tobi)
  return (
    <div className="sample h-76 bg-white cursor-pointer hover:bg-gray-300" onMouseOver={overFunction} onMouseOut={outFunction}>
      <div className="text-center px-3 py-8">
        <img className="mx-auto mb-8" src={image} alt="Product logo" />
        <span className="font-normal text-2xl">{productname}</span>
        <p className="py-2"> (3GB, 64GB, Android 10)</p>
        <h1 className="m-0 p-0 leading-none">&#8358;23, 250</h1>
      </div>
      <a href={"https://api.whatsapp.com/send?phone=2347080915046&text=Good day Alaje, I would like to get "+ tobi2}
      rel="noopener noreferrer"target="_blank">
        <button className={isButton ?
          "visible w-full p-2 orange-bg text-white shadow-none m-0 outline-none font-bold bloc k" :
          "invisible w-full p-2 orange-bg text-white shadow-none m-0 outline-none font-bold"}>
          Shop Now</button>
      </a>
    </div>
  )
}

export default Popularsample
