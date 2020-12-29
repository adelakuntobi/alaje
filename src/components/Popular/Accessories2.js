import React from 'react'
import Popularsample from './Popularsample'
// import mifi from '../../images/products/accessories/077F97CC-7B6F-4EC5-8A67-C5D602D8D18D.jpg'
import speaker from '../../images/products/accessories/IMG_2470.JPG'
import applePencil from '../../images/products/accessories/IMG_2472.PNG'
import cod from '../../images/products/accessories/IMG_2471.JPG'


function Accessories2(props) {
  const { view } = props
  return (
    <>
      { view ? <>
        {/* <Popularsample price="40000" image={mifi} desc="New" name="MTc Universal Mifi" /> */}
        <Popularsample name="JBL Xtreme Portable Wireless Speakers" price="115000" image={speaker} desc="New" />
        <Popularsample name="Apple Pencil" price="61000" image={applePencil} desc="New" />
        {/* <Popularsample name="CALL OF DUTY BLACK OPS 4" price="3000" image={cod} desc="New" /> */}
      </>
        : ""
      }
    </>
  )
}

export default Accessories2
