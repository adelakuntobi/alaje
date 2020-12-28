import React from 'react'
import Popularsample from './Popularsample'
import iphoneX from '../../images/products/phones/Used iPhone x.PNG'
import samsungS6 from '../../images/products/phones/Used Samsung s6 edge.jpg'
import s9 from '../../images/products/phones/Used s9+.PNG'
import spark5 from '../../images/products/phones/New Tecno spark 5 pro.JPG'
import redmi9 from '../../images/products/phones/New Redimi 9A.JPG'
import iphone7 from '../../images/products/phones/Used iphone 7 +.PNG'
import s20 from '../../images/products/phones/Samsung s20 128gb 5g.JPG'
import ipadPro from '../../images/products/phones/IPad Pro.PNG'

function Phones() {
  return (
    <>
      <Popularsample name="IPhone X 64GB" price="200,000" image={iphoneX} desc="Pre Owned" />
      <Popularsample name="Samsung S6 EDGE" price="45,000" image={samsungS6} desc="Pre Owned" />
      <Popularsample name="Samsung S9+" price="110,000" image={s9} desc="Pre Owned" />
      <Popularsample name="Tecno Spark 5 Pro" price="64,500" image={spark5} desc="New, 128gb / 4gb ram" />
      <Popularsample name="Redmi 9A" price="47,000" image={redmi9} desc="New, 32gb / 2gb ram" />
      <Popularsample name="iPhone 7+ 32gb" price="125,000" image={iphone7} desc="Pre Owned" />
      <Popularsample name="Samsung S20s" price="315,000" image={s20} desc="New, 256gb/ 8gb ram" />
      <Popularsample name="IPAD PRO WIFI" price="346,000" image={ipadPro} desc="New, +CELLULAR, 64GB 12''/2018" />
    </>
  )
} 

export default Phones
