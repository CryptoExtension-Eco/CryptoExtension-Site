import React from 'react'
import '../../scss/Pages/Widgets/DownToUp.scss'

const upImg = require ("../../images/up-arrow.png")
const DownToUp = () => {
  return (
    <>
        <div className="downtoup" id="downtoup">
            <a href="#Home"><img src={upImg} alt="" className="span1"/></a>
        </div>
    </>
  )
}

export default DownToUp
