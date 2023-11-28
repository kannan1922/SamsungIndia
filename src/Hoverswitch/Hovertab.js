import React from 'react'
import selfie from '../Assets/selfiehover.jpg'
import toyhover from '../Assets/toyhover.jpg'
import girlhover from '../Assets/girl hover.jpg'
import family from '../Assets/familyhover.jpg'
import top10 from '../Assets/Top10hover.jpg'
import '../Hoverswitch/hovertab.css' 
import { useState } from 'react'
function Hovertab() {
  const [activeImage, setActiveImage] = useState(toyhover);
  const [activeButton, setActiveButton] = useState('pid2');
  const [activeDot, setActiveDot] = useState(2);

  const handleButtonHover = (image, buttonId) => {
    setActiveImage(image);
    setActiveButton(buttonId);
  };
  const handleDotClick = (dotId, image) => {
    setActiveDot(dotId);
    setActiveImage(image);
  };  
  return (
    <div className="wrappertab">
      <div className="inner-div1">
        <div id="im1" className="tabcontent">
          <div className="image-container">
            <img src={activeImage} className="imagehover" alt="Hovered Image" />
          </div>
        </div>
        <div className="dot-buttons">
        <button
              className={`dot-button ${activeDot === 1 ? 'active' : ''}`}
              onClick={() => handleDotClick(1, selfie)}
            ></button>
            <button
              className={`dot-button ${activeDot === 2 ? 'active' : ''}`}
              onClick={() => handleDotClick(2, toyhover)}
            ></button>
            <button
              className={`dot-button ${activeDot === 3 ? 'active' : ''}`}
              onClick={() => handleDotClick(3, girlhover)}
            ></button>
                <button
              className={`dot-button ${activeDot === 4 ? 'active' : ''}`}
              onClick={() => handleDotClick(4, family)}
            ></button>
                <button
              className={`dot-button ${activeDot === 5 ? 'active' : ''}`}
              onClick={() => handleDotClick(5, top10)}
            ></button>
            </div>
      </div>
      <div className="inner-div2">
        <div>
          <div className={`lines1 ${activeButton === 'pid1' ? 'active' : ''}`}></div>
          <div className='flexing'>
          <p className='tabpara'>01.</p>
          <button
            id="pid1"
            className="tablinks"
            onMouseEnter={() => handleButtonHover(selfie, 'pid1')}
          >
             Tips for Navigating Big Life Changes
          </button>
          </div>
          <p className={`para1 ${activeButton === 'pid1' ? 'active' : ''}`}>Learn more</p>
          <div className={`lines2 ${activeButton === 'pid1' ? 'active' : ''}`}></div>
        </div>

        <div>
          <div className={`lines1 ${activeButton === 'pid2' ? 'active' : ''}`}></div>
          <div className='flexing'>
          <p className='tabpara'>02.</p>
          <button
            id="pid2"
            className="tablinks"
            onMouseEnter={() => handleButtonHover(toyhover, 'pid2')}
          >
             Meet G·NUSMAS, the curious extraterrestrial
          </button>
          </div>
          <p className={`para1 ${activeButton === 'pid2' ? 'active' : ''}`}>Learn more</p>
          <div className={`lines2 ${activeButton === 'pid2' ? 'active' : ''}`}></div>
        </div>

        <div>
          <div className={`lines1 ${activeButton === 'pid3' ? 'active' : ''}`}></div>
          <div className='flexing'>
          <p className='tabpara'>03.</p>
          <button
            id="pid3"
            className="tablinks"
            onMouseEnter={() => handleButtonHover(girlhover, 'pid3')}
          >
             Feel Free to Freestyle
          </button>
          </div>
          <p className={`para1 ${activeButton === 'pid3' ? 'active' : ''}`}>Learn more</p>
          <div className={`lines2 ${activeButton === 'pid3' ? 'active' : ''}`}></div>
        </div>

        <div>
          <div className={`lines1 ${activeButton === 'pid4' ? 'active' : ''}`}></div>
          <div className='flexing'>
          <p className='tabpara'>04.</p>
          <button
            id="pid4"
            className="tablinks"
            onMouseEnter={() => handleButtonHover(family, 'pid4')}
          >
             Hosting Tips to Alleviate Holiday Stress
          </button>
          </div>
          <p className={`para1 ${activeButton === 'pid4' ? 'active' : ''}`}>Learn more</p>
          <div className={`lines2 ${activeButton === 'pid4' ? 'active' : ''}`}></div>
        </div>

        <div>
          <div className={`lines1 ${activeButton === 'pid5' ? 'active' : ''}`}></div>
          <div className='flexing'>
          <p className='tabpara'>05.</p>
          <button
            id="pid5"
            className="tablinks"
            onMouseEnter={() => handleButtonHover(top10, 'pid5')}
          >
             Top10 are Here!
          </button>
          </div>
          <p className={`para1 ${activeButton === 'pid5' ? 'active' : ''}`}>Learn more</p>
          <div className={`lines2 ${activeButton === 'pid5' ? 'active' : ''}`}></div>
        </div>
      </div>
    </div>
  );
}

export default Hovertab;