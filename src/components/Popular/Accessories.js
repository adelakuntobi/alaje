import React from 'react'
import Popularsample from './Popularsample'
import playStation from '../../images/products/accessories/IMG_2464.JPG'
import oriamo from '../../images/products/accessories/Oriamo Strong bass.JPG'
import airpods2 from '../../images/products/accessories/IMG_2462.JPG'
import flash32 from '../../images/products/accessories/IMG_2453.JPG'
import memoryCard from '../../images/products/accessories/IMG_2452.JPG'
import hpCharger from '../../images/products/accessories/IMG_2468.JPG'
import infinixQuick from '../../images/products/accessories/IMG_2467.JPG'
import iphoneCharger from '../../images/products/accessories/IMG_2465.JPG'

function Accessories() {
  return (
    <>
      <Popularsample price="40000" image={playStation} desc="White" name="Ps4 Gaming Pad " />
      <Popularsample name="Oriamo Headsets" price="1500" image={oriamo} desc="Quality Sound" />
      <Popularsample name="Airpods 2" price="65000" image={airpods2} desc="New" />
      <Popularsample name="Sandisk OTG Flash Drive 32gb" price="3000" image={flash32} />
      <Popularsample name="SanDisk Micro SD card 32gb" price="2250" image={memoryCard}/>
      <Popularsample name="Hp Laptop Chargers " price="2500" image={hpCharger} />
      <Popularsample name="Quick charge Infinix Andriod Charger" price="2500" image={infinixQuick} />
      <Popularsample name="iPhone Chargers with Lightening" price="3000" image={iphoneCharger} />
    </>
  )
}

export default Accessories
