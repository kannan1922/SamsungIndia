import React from 'react';
import boygirl from './assests/boygirlnight.jpg';
import '../Styles/TabSwitch.css';

function TabSwitch() {
  return (
    <div className='imageStyle'>
      <img className='summa' src={boygirl} alt='tabimage' />
      <h1 className='textOverImageStyle'>QLED(OLED)</h1>
      <p className='textOverImageStyle1'>Start at 35,000*/per month</p>
      <p className='textOverImageStyle2'>Get the Freestyle Free (worth 599990)</p>
    </div>
  );
}

export default TabSwitch;
