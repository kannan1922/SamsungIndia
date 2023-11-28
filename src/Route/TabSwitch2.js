import React from 'react'
import animals from './assests/animalsinTV.jpg';
import '../Styles/TabSwitch.css';
function TabSwitch2() {
  return (
    <>
    <div className='imageStyle'>
      <img className='summa' src={animals} alt='tabimage' />
      <h1 className='textOverImageStyle'>Neo QLED</h1>
      <p className='textOverImageStyle1'>Start at 35,000*/per month</p>
      <p className='textOverImageStyle2'>Get the Freestyle Free (worth 599990)</p>
    </div>
    </>
  )
}

export default TabSwitch2