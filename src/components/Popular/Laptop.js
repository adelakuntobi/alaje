import React from 'react'
import Popularsample from './Popularsample'
import hpPavillion from '../../images/products/laptops/HP PAVILION GAMING 15-dk0056nr .JPG'
import dell from '../../images/products/laptops/Preowned dell inspiron 15.jpg'
import mac2015 from '../../images/products/laptops/Preowned macbook air 2015.jpg'
import mac2017 from '../../images/products/laptops/Preowned Macbook Pro 2017.jpg'
import thinkPad from '../../images/products/laptops/New Lenovo  ThinkPad T490 .JPG'
import ideaPad from '../../images/products/laptops/Preowned lenovo ideapad.jpg'
import mini from '../../images/products/laptops/Pre owned mini laptop.jpg'
import hpEvny from '../../images/products/laptops/Preowned HP envy x360.jpg'

function Laptop() {
  return (
    <>
      <Popularsample price="361,000" image={hpPavillion} desc={`HP Gaming New Pavilion - 15-dk0056nr -Intel® Core™ i5-9300H (2.4 GHz base frequency, up to 4.1 GHz base with Intel® Turbo Boost Technology, 8 MB cache, 4 cores), 15.6" diagonal FHD IPS anti-glare micro-edge WLED- backlit (1920 x 1080),8 GB DDR4-2666 SDRAM (1 x 8 GB),512 GB PCIe® NVMe™ M.2 SSD, Optical drive not included, Intel® Wi-Fi 6 AX 200 (2x2) and Bluetooth® 5 Combo, 1 multi-format SD media card reader, 3-cell battery, B&O, dual speakers, Windows 10 Home 64, 30 Days Warranty`}
      name="HP PAVILION GAMING 15-dk0056nr" />
      <Popularsample name="Dell Inspiron 15" price="385,000" image={dell} desc="Preowned , Intel core i5(), 4 GB dedicated graphics , 16gb ram, 1 TB harddrive + 256 gb SSD, Red Keyboard light" />
      <Popularsample name="Macbook Air 2015" price="290,000" image={mac2015} desc="Pre Owned, Intel Core i5 ,8gb ram ,256gb " />
      <Popularsample name="Macbook Pro 2017" price="290,000" image={mac2017} desc="Pre owned, Intel Core i5 ,8gb ram  ,128 gb ssd" />
      <Popularsample name="Hp Envy x360" price="180,000" image={hpEvny} desc="Preowned , HP envy x360, Intel core i5, 1 Tb, Touch screen, 8gb ram" />
      <Popularsample name="Hp Mini laptop" price="45,000" image={mini} desc="Preowned, 2gb ram, 32 gb HDD" />
      <Popularsample name="Lenovo Thinpad T490" price="190,000" image={thinkPad} desc="New, 4gb ram , 256gb ssd ,Intel core i5 " />
      <Popularsample name="Lenovo Ideapad" price="70,000" image={ideaPad} desc="Preowned, 4gb ram , 256gb SSD, Intel core i5 " />
    </>
  )
}

export default Laptop
