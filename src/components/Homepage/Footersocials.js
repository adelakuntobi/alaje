import React from 'react'

function Footersocials({ link , icon}) {
  return (
    <a href={link} >
      {icon} className="mx-2"
    </a>
  )
}

export default Footersocials
