import React, { useState } from 'react'
// import image from '../../images/Rectangle 11.png'
function Popularsample({ name, price, desc, image }) {
  const overFunction = () => {
    setIsButton(true)
  }
  const outFunction = () => {
    setIsButton(false)
  }
  const [isButton, setIsButton] = useState(false)
  const tobi = JSON.stringify(name)
  const tobi2 = JSON.parse(tobi)

  function comma(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

  return (
    <div className="text-center px-3 pt-8 pb-12 flex items-center justify-between flex-col sample h-76 bg-white cursor-pointer hover:bg-gray-300 relative" onMouseOver={overFunction} onMouseOut={outFunction}>
      <img className="mx-auto mb-8 product" src={image} alt="Product logo" />
      <span className="font-normal text-2xl">{name}</span>
      <p className="desc my-4"> {desc}</p>
      <h1 className="m-0 p-0 leading-none">&#8358;{comma(price)}</h1>
      <a className="absolute z-30 bottom-0 w-full left-0" href={"https://api.whatsapp.com/send?phone=2347080915046&text=Good day Alaje, I would like to get " + tobi2}
        rel="noopener noreferrer" target="_blank">
        <button className={isButton ?
          "visible w-full p-2 orange-bg text-white shadow-none m-0 outline-none font-bold block" :
          "invisible"}>
          Shop Now</button>
      </a>
    </div>
  )
}

export default Popularsample
