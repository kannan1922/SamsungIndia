

import  { useState, useRef, lazy, Suspense } from 'react';
import '../components/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import { SearchResultsList } from '../Search/SearchResultsList';
import { useNavigate,Navigate } from "react-router-dom";
import { logout } from '../Login/Auth';
const SearchBar = lazy(() => import('../Search/Search'));
function Navbar() {
  const nav = useNavigate();
  const handleLogout = () => {
    logout();
    return nav("/");
};
  const [results, setResults] = useState([]);
  const [openLinks, setOpenLinks] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showOverlay1, setShowOverlay1] = useState(false);
const [showOverlay2, setShowOverlay2] = useState(false);
const [showOverlay3, setShowOverlay3] = useState(false);
const [showOverlay4, setShowOverlay4] = useState(false);
const [showOverlay5, setShowOverlay5] = useState(false);
const [showOverlay9, setShowOverlay9] = useState(false);
const [showOverlay12, setShowOverlay12] = useState(false);
const [showOverlay122, setShowOverlay122] = useState(false);
  const overlayTimeout = useRef(null);

  function handleHover() {
    setShowOverlay(true);
  }
  function handleMouseOut() {
     overlayTimeout.current = setTimeout(() => setShowOverlay(false), 100);
    if (!showOverlay) {
      clearTimeout(overlayTimeout.current);
    }
   
  }

  function handleHoverOverlay() {
    clearTimeout(overlayTimeout.current);
  }

  function handleMouseOutOverlay() {
    setShowOverlay(false);
  }

  function handlechange() {
    setOpenLinks(!openLinks);
  }



  const overlayTimeout12 = useRef(null);

  function handleHover12() { 
    setShowOverlay12(true);
  }
  
  function handleMouseOut12() {
    if (overlayTimeout12.current) {
      clearTimeout(overlayTimeout12.current);
    }
    overlayTimeout12.current = setTimeout(() => {
      setShowOverlay12(false);
    }, 10);
  }
  
  function handleHoverOverlay12() {
    clearTimeout(overlayTimeout12.current);
  }
  
  function handleMouseOutOverlay12() {
    setShowOverlay12(false);
  }









  const overlayTimeout1 = useRef(null);

  function handleHover1() { 
    setShowOverlay1(true);
  }
  
  function handleMouseOut1() {
    if (overlayTimeout1.current) {
      clearTimeout(overlayTimeout1.current);
    }
    overlayTimeout1.current = setTimeout(() => {
      setShowOverlay1(false);
    }, 10);
  }
  
  function handleHoverOverlay1() {
    clearTimeout(overlayTimeout1.current);
  }
  
  function handleMouseOutOverlay1() {
    setShowOverlay1(false);
  }






  const overlayTimeout2 = useRef(null);

  function handleHover2() { 
    setShowOverlay2(true);
  }
  
  function handleMouseOut2() {
    if (overlayTimeout2.current) {
      clearTimeout(overlayTimeout2.current);
    }
    overlayTimeout2.current = setTimeout(() => {
      setShowOverlay2(false);
    }, 10);
  }
  
  function handleHoverOverlay2() {
    clearTimeout(overlayTimeout2.current);
  }
  
  function handleMouseOutOverlay2() {
    setShowOverlay2(false);
  }


  
  const overlayTimeout122 = useRef(null);

  function handleHover122() { 
    setShowOverlay122(true);
  }
  
  function handleMouseOut122() {
    if (overlayTimeout122.current) {
      clearTimeout(overlayTimeout122.current);
    }
    overlayTimeout122.current = setTimeout(() => {
      setShowOverlay122(false);
    }, 10);
  }
  
  function handleHoverOverlay122() {
    clearTimeout(overlayTimeout122.current);
  }
  
  function handleMouseOutOverlay122() {
    setShowOverlay122(false);
  }





  const overlayTimeout3 = useRef(null);
  function handleHover3() { 
    setShowOverlay3(true);
  }
  
  function handleMouseOut3() {
    if (overlayTimeout3.current) {
      clearTimeout(overlayTimeout3.current);
    }
    overlayTimeout3.current = setTimeout(() => {
      setShowOverlay3(false);
    }, 10);
  }
  
  function handleHoverOverlay3() {
    clearTimeout(overlayTimeout3.current);
  }
  
  function handleMouseOutOverlay3() {
    setShowOverlay3(false);
  }



  const overlayTimeout4 = useRef(null);
  function handleHover4() { 
    setShowOverlay4(true);
  }
  
  function handleMouseOut4() {
    if (overlayTimeout4.current) {
      clearTimeout(overlayTimeout4.current);
    }
    overlayTimeout4.current = setTimeout(() => {
      setShowOverlay4(false);
    }, 10);
  }
  
  function handleHoverOverlay4() {
    clearTimeout(overlayTimeout4.current);
  }
  
  function handleMouseOutOverlay4() {
    setShowOverlay4(false);
  }



  const overlayTimeout5 = useRef(null);
  function handleHover5() { 
    setShowOverlay5(true);
  }
  



  const overlayTimeout9 = useRef(null);

  function handleHover9() { 
    setShowOverlay9(true);
  }
  
  function handleMouseOut9() {
    if (overlayTimeout9.current) {
      clearTimeout(overlayTimeout9.current);
    }
    overlayTimeout9.current = setTimeout(() => {
      setShowOverlay9(false);
    }, 100);
  }
  
  function handleHoverOverlay9() {
    clearTimeout(overlayTimeout9.current);
  }
  
  function handleMouseOutOverlay9() {
    setShowOverlay9(false);
  }











  function handleMouseOut5() {
    if (overlayTimeout5.current) {
      clearTimeout(overlayTimeout5.current);
    }
    overlayTimeout5.current = setTimeout(() => {
      setShowOverlay5(false);
    }, 10);
  }
  
  function handleHoverOverlay5() {
    clearTimeout(overlayTimeout5.current);
  }
  
  function handleMouseOutOverlay5() {
    setShowOverlay5(false);
  }
  const [isOverlayVisible, setOverlayVisibility] = useState(true);

  const toggleOverlay = () => {
    setOverlayVisibility(!isOverlayVisible);
  };
  const navigate=useNavigate()
const handleeclick=()=>{
  navigate("/shop")
}
const handlelogout=()=>{
  navigate("/cart")
}
  return (
    <>
 <div className="navbar"
  style={{ position: 'fixed', zIndex: '200' }}
  >
        <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img  src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/gnb-desktop-120x32.png" />
        <div className="navleft">
         
          <div
           className="navleftContent"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseOut}
            onClick={handleeclick}
          >
            Shop
          </div>
          <div className="navleftContent"  
            onMouseEnter={handleHover12}
            onMouseLeave={handleMouseOut12}
          >
            Mobile
          </div>
            <div className="navleftContent"   onMouseEnter={handleHover1}
            onMouseLeave={handleMouseOut1}>
              TV & AV
              </div>
            <div className="navleftContent"  onMouseEnter={handleHover2}
            onMouseLeave={handleMouseOut2}>Home Appliances</div>
            <div className="navleftContent"  
            onMouseEnter={handleHover3}
            onMouseLeave={handleMouseOut3}
            >Laptop & Monitors</div>
            <div className="navleftContent" onMouseEnter={handleHover4}
            onMouseLeave={handleMouseOut4}>Displays</div>
            <div className="navleftContent">Accessories</div>
            <div className="navleftContent">SmartThings</div>
           </div>
          </div>
        <div className="rightSide">
    
        <div className="navleftContent"    onMouseEnter={handleHover5}
            onMouseLeave={handleMouseOut5}>Support</div>
        <div className="navleftContent">For Business</div>
        <div className='rightwrap'>
        <button style={{ display: 'inline-block' }} onMouseEnter={handleHover122} onMouseLeave={handleMouseOut122}>
        <svg className="chatimg9"  viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M40.581 4.09c20.126 0 36.5 16.374 36.5 36.5a36.325 36.325 0 01-7.963 22.733l22.8 22.948-5.674 5.639-22.767-22.913a36.327 36.327 0 01-22.896 8.093c-20.126 0-36.5-16.374-36.5-36.5s16.374-36.5 36.5-36.5zm0 8c-15.715 0-28.5 12.785-28.5 28.5s12.785 28.5 28.5 28.5 28.5-12.785 28.5-28.5-12.785-28.5-28.5-28.5z"></path></svg>
        </button>

      

        {/* <Link to="/cart"> */}
          {/* <ShoppingCart size={32} /> */}
          <button onClick={handlelogout} style={{ display: 'inline-block' }} >
            <svg className="chatimg9" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M72.848 70.25c6.075 0 11 4.925 11 11s-4.925 11-11 11-11-4.925-11-11 4.925-11 11-11zm-35 0c6.075 0 11 4.925 11 11s-4.925 11-11 11-11-4.925-11-11c0-6.074 4.926-11 11-11zm35 7a4 4 0 10.002 8.001 4 4 0 00-.002-8.001zm-35 0a4 4 0 100 8 4 4 0 000-8zM13.892 3.75c2.287 0 4.376 1.55 5.058 3.72l.064.22 2.97 11.187h68.128a4.727 4.727 0 014.661 5.786l-.048.2-9.559 36.291c-.583 2.216-2.618 3.842-4.894 3.944l-.228.005H30.06c-2.287 0-4.377-1.55-5.06-3.72l-.063-.219-13.124-49.413-10.7.006-.004-8 12.782-.007zm72.03 23.127H24.108l8.027 30.226H77.96l7.962-30.226z"></path></svg>
            {/* </Link> */}

            </button>

            <svg
  className="chatimg9"
  viewBox="0 0 96 96"
  xmlns="http://www.w3.org/2000/svg"
  focusable="false"
  aria-hidden="true"
  onMouseEnter={handleHover9}
  onMouseLeave={handleMouseOut9}
  data-di-res-id="2e1f98b5-81416509"
  data-di-rand="1696931741910"
>
  <path d="M48 50c17.346 0 32 14.221 32 31.054V89c0 2.757-2.243 5-5 5H21c-2.757 0-5-2.243-5-5v-7.946C16 64.221 30.654 50 48 50zm0 8c-12.785 0-24 10.773-24 23.054V86h48v-4.946C72 68.773 60.785 58 48 58zm-.002-56c12.133 0 22.003 9.87 22.003 22.001C70 36.131 60.13 46 47.998 46c-12.13 0-21.997-9.869-21.997-21.999C26 11.87 35.867 2 47.998 2zm0 8c-7.718 0-13.997 6.281-13.997 14.001C34 31.72 40.28 38 47.998 38 55.718 38 62 31.72 62 24.001 62 16.281 55.719 10 47.998 10z"></path>
</svg>

           
          </div>
          <button onClick={handlechange}>
            <ReorderIcon />
          </button>
        </div>
      </div>


<div className='font'>
      {showOverlay && (

<div >

<div className="overlay-background"></div>
        <div className="overlay" onMouseEnter={handleHoverOverlay} onMouseLeave={handleMouseOutOverlay}>
        <div className='line2'>
          <div className='l-txt'>
            <div className='l-txtL'>

            <span className="sp-txt" style={{fontWeight:"bold",fontSize:"13px"}}>Offers</span>
            <span className="sp-txt">Samsung Fest</span>
            </div>
            <div className='l-txtL1'>
            <span style={{fontWeight:"bold",fontSize:"13px"}} className="sp-txt">Why buy from samsung</span>
            <span  >Samsung axis bank credit card</span>
            <span >Smart club loyalty program</span>
            <span >Samsung exchange program</span>
            <span >Samsung finance +</span>
            <span >Samusng referral advantage</span>
            <span >Defence purchase program</span>
            <span >Buy more save more</span>
            <span >Samsung student advantage</span>
            <span >Corporate employee program</span>
            <span >Samsung live</span>
            <span >Why buy from samsung</span>
            </div>
        </div>
        </div>
        </div>
        </div>
      )}


{showOverlay12&& (
  <div>
       <div className="overlay-background"></div>

       <div
      className={`overlay12 ${showOverlay12 ? 'slideOut' : ''}`}
      onMouseEnter={handleHoverOverlay12}
      onMouseLeave={handleMouseOutOverlay12}
    >
        <div className='line2'>
          <div className='l-txt'>
          <div style={{fontSize:"13.5px",lineHeight:"27px"}} className='l-txtR'>
          <span className="sp-txt" >Discover Mobiles</span>
            <span className="sp-txt">Smaertphones</span>
            <span className="sp-txt">Tablets</span>
            <span className="sp-txt">Galaxy book(Laptops)</span>
            <span className="sp-txt">Watches</span>
            <span className="sp-txt">Galaxy Buds</span>
            <span className="sp-txt">Accessories</span>
            <span className="sp-txt">One UI</span>
            <span className="sp-txt">Apps and Services</span>
            <span className="sp-txt">Samsung Student advantage</span>
            <span className="sp-txt">Why galaxy</span>
            </div>
            <div className='line12'></div>
          <div className='l-txtR'>
          <div className="tiles">
              <img className="pro-img"
                src="https://images.samsung.com/is/image/samsung/assets/in/2307/gnb/GNB_B5_168x136_mo.png?$168_136_PNG$"
                width="100px"
                alt=""
              />
              <img className="pro-img"
                src="https://images.samsung.com/is/image/samsung/assets/in/2307/gnb/GNB_Q5_168x136_mo.png?$168_136_PNG$"
                width="100px"
                alt=""
              />
              <img className="pro-img"
                src="https://images.samsung.com/is/image/samsung/assets/in/2307/gnb/Galaxy_Tab_S9_Series_GNB_168x136_MO.png?$168_136_PNG$"
                width="100px"
                alt=""
              />
              <img className="pro-img"
                src="https://images.samsung.com/is/image/samsung/assets/in/2307/gnb/Watch_GNB_mo_168x136.png?$168_136_PNG$"
                width="100px"
                alt=""
              />
              <img className="pro-img"
                src="https://images.samsung.com/is/image/samsung/assets/in/2302/gnb/galaxy-s23-ultra-mo-168x136.png?$168_136_PNG$"
                width="100px"
                alt=""
              />
              <img className="pro-img"
                src="https://images.samsung.com/is/image/samsung/assets/in/gnb/galaxy-s23-lime-mo-168x136.png?$168_136_PNG$"
                width="100px"
                alt=""
              />
              <img className="pro-img"
                src="https://images.samsung.com/is/image/samsung/assets/in/gnb/Galaxy_A_GNB.png?$168_136_PNG$"
                width="100px"
                alt=""
              />
              <img className="pro-img"
                src="https://images.samsung.com/is/image/samsung/assets/in/2208/gnb/galaxy-buds2-pro-mo-164x136.png?$168_136_PNG$"
                width="100px"
                alt=""
              />
              <img className="pro-img" 
                src="https://images.samsung.com/is/image/samsung/assets/in/2302/gnb/Galaxybook3_ultra_gnb_mo_168x136.png?$168_136_PNG$"
                width="100px"
                alt=""
              />
            </div>
         </div>
        </div>
            </div>    
            </div>
            </div>
      )}



{showOverlay1&& (
  <div>
    <div className="overlay-background"></div>
        <div className="overlay1 " onMouseEnter={handleHoverOverlay1} onMouseLeave={handleMouseOutOverlay1}>
        <div className='line2'>
          <div className='l-txt'>
          <div className='l-txtR2'>
            <span style={{fontWeight:"bold",fontSize:"13px"}}  className="sp-txt">Recommended</span>
            <span className="sp-txt">All About TV</span>
            <span className="sp-txt">Why Neo OLED</span>
            <span className="sp-txt">Why Samsung OLED</span>
            <span className="sp-txt">Why Neo OLED for gaming</span>
            <span className="sp-txt">Why Samsung Smart TV</span>
            <span className="sp-txt">Virtual Product Experience</span>
          </div>    
           <div className='l-txtR2'>
            <span  style={{fontWeight:"bold",fontSize:"13px"}} className="sp-txt">TV's</span>
            <span className="sp-txt">All TV</span>
            <span className="sp-txt">Neo QLED</span>
            <span className="sp-txt">OLED</span>
            <span className="sp-txt">QLED 4K</span>
            <span className="sp-txt">Crystal 4K UHD</span>
            <span className="sp-txt">The Frame</span>
            <span className="sp-txt">The Serif</span>
            <span className="sp-txt">TV Accessories</span>
            <span className="sp-txt">Discover TVs</span>
          </div>
          <div className='l-txtR2'>
            <span  style={{fontWeight:"bold",fontSize:"13px"}} className="sp-txt">Projectors</span>
            <span className="sp-txt">The Premiere</span>
            <span className="sp-txt">The Freestyle</span>
            <span className="sp-txt">All Projectors</span>
          </div>
        
          <div className='l-txtR2'>
            <span  style={{fontWeight:"bold",fontSize:"13px"}} className="sp-txt">TV By Size</span>
            <span className="sp-txt">2m 47cm(98*)TVs</span>
            <span className="sp-txt">2m 16cm(85*)TVs</span>
            <span className="sp-txt">1m 89cm(75*)</span>
            <span className="sp-txt">1m 63cm(65*)</span>
            <span className="sp-txt">1m 55cm(55*)</span>
            <span className="sp-txt">1m 38cm(50*)</span>
            <span className="sp-txt">1m 28cm(43*)</span>
            <span className="sp-txt">80cm(32*)</span>
            <span className="sp-txt">All TVs</span>
          </div>
          <div className='l-txtR2'>
            <span style={{fontWeight:"bold",fontSize:"13px"}} className="sp-txt">Why Neo OLED</span>
            <span className="sp-txt">Why Samsung OLED</span>
            <span className="sp-txt">Why Neo OLED for gaming</span>
            <span className="sp-txt">Why Samsung Smart TV</span>
            <span className="sp-txt">Virtual Product Experience</span>
          </div>   
          <div className='l-txtR2'>
            <span  style={{fontWeight:"bold",fontSize:"13px"}} className="sp-txt">TV by Resolution</span>
            <span className="sp-txt">QLED 4K</span>
            <span className="sp-txt">UHD 4K</span>
            <span className="sp-txt">Full HD/HD TVs</span>
          </div>
          
        </div>
        </div>
            </div>
      </div>
      )}




{showOverlay2 && (
  <div>
     <div className="overlay-background"></div>
  
  <div>
        <div className="overlay2" onMouseEnter={handleHoverOverlay2} onMouseLeave={handleMouseOutOverlay2}>
        <div className='line2'>
        <div className='l-txt'>
        <div className='l-txtR1'>
           <span style={{fontWeight:"bold",fontSize:"13px"}} className="sp-txt">Samrt Things Home</span>
              <span className="sp-txt">Virtual Product Experience</span>
        </div>    
         <div className='l-txtR1'>
         <span style={{fontWeight:"bold",fontSize:"13px"}} className="sp-txt">Refrigerator</span>
              <span className="sp-txt">All Refrigerator</span>
              <span className="sp-txt">BESPOKE Refrigerator</span>
              <span className="sp-txt">French Door</span>
              <span className="sp-txt">Side By Side</span>
              <span className="sp-txt">Double Door</span>
              <span className="sp-txt">Single Door</span>
              <span className="sp-txt">BESPOKE Panels</span>
              <span className="sp-txt">Discover Refrigerator</span>
        </div>
        <div className='l-txtR1'>
        <span  style={{fontWeight:"bold",fontSize:"13px"}} className="sp-txt">Air Conditioner</span>
              <span className="sp-txt">All Airconditioners</span>
              <span className="sp-txt">Windfree TM</span>
              <span className="sp-txt">Convertable 5in1 AC</span>
              <span className="sp-txt">WiFI Enabled AC</span>
              <span className="sp-txt">Discover Air conditioners</span>
        </div>
        <div className='l-txtR1'>
        <span style={{fontWeight:"bold",fontSize:"13px"}} className="sp-txt">Washing Machine and Dryers</span>
              <span className="sp-txt">All Washing Machine and Dryers</span>
              <span className="sp-txt">BESPOKE Washer Dryer</span>
              <span className="sp-txt">Front Load</span>
              <span className="sp-txt">Top Load</span>
              <span className="sp-txt">Semi Automatic</span>
              <span className="sp-txt">Washer Dryer</span>
              <span className="sp-txt">Dryers</span>
              <span className="sp-txt">Discover Washing MAchine and Dryers</span>
        </div>
        <div className='l-txtR1'>
        <span style={{fontWeight:"bold",fontSize:"13px"}} className="sp-txt">Vaccum Cleaners</span>
              <span className="sp-txt">All Vaccum Cleaners</span>
              <span className="sp-txt">BESPOKE Vaccum Cleaners</span>
              <span className="sp-txt">Jet Stick Vaccum cleaners</span>
              <span className="sp-txt">Robot Vaccum Cleaners</span>
              
            <br/>
              <span  className="sp-txt">Dishwashers</span>
              <span className="sp-txt">All Dishwashers</span>
            </div>
        <div className='l-txtR1'>
        <span style={{fontWeight:"bold",fontSize:"13px"}} className="sp-txt">Cooking Applications</span>
              <span className="sp-txt">All Cooking Applications</span>
              <span className="sp-txt">BESPOKE Microwave Ovens</span>
              <span className="sp-txt">Microwave Ovens</span>
        </div>
      </div>
          </div>
          </div>
          </div>
          </div>
      )} 

{showOverlay3&& (
  <div>
       <div className="overlay-background"></div>

        <div className="overlay3" onMouseEnter={handleHoverOverlay3} onMouseLeave={handleMouseOutOverlay3}>
        <div className='line2'>
          <div className='l-txt'>
          <div className='l-txtR'>
        <span style={{fontWeight:"bold",fontSize:"13px"}} className="sp-txt">Galaxy Book(laptops)</span>
              <span className="sp-txt">Galaxy</span>
              <span className="sp-txt">Galaxy Book3 Ultra</span>
              <span className="sp-txt">Galaxy Book3 Pro360</span>
              <span className="sp-txt">Galaxy Book3 Pro</span>
              <span className="sp-txt">Galaxy Book3 360</span>
              <span className="sp-txt">Galaxy book3</span>
              <span className="sp-txt">Windows 11</span>
              <span className="sp-txt">Accessories</span>
              <span className="sp-txt">All Galaxy Books</span>
          </div>    
           <div className='l-txtR'>
           <span style={{fontWeight:"bold",fontSize:"13px"}} className="sp-txt">Galaxy Book by Size</span>
              <span className="sp-txt">38.1cm-40.62cm</span>
              <span className="sp-txt">33.02cm-33.78cm</span>
              <span className="sp-txt">All Galaxy Booky by Size</span>
          </div>
          <div className='l-txtR'>
          <span style={{fontWeight:"bold",fontSize:"13px"}} className="sp-txt">Monitors</span>
              <span className="sp-txt">All Monitors</span>
              <span className="sp-txt">Gaming Monitor</span>
              <span className="sp-txt">Smart Monitor</span>
              <span className="sp-txt">High Resolution Monitor</span>
              <span className="sp-txt">Curved Monitor</span>
              <span className="sp-txt">Business Monitor</span>
              <span className="sp-txt">Discover Monitor</span>
          </div>
          <div className='l-txtR'>
          <span style={{fontWeight:"bold",fontSize:"13px"}} className="sp-txt">Memory and Storage</span>
              <span className="sp-txt">Discover Memory and Storage</span>
              <span className="sp-txt">Nvme SSD</span>
              <span className="sp-txt">SATA SSD</span>
              <span className="sp-txt">Memory Cards</span>
              <span className="sp-txt">USB flash Drive</span>
              <span className="sp-txt">All Mem  font-size: 13px;ory and Storage</span>
          </div>
         </div>
        </div>
            </div>    
            </div>
      )}


{showOverlay4&& (
  <div><div className="overlay-background"></div>
        <div className="overlay4" onMouseEnter={handleHoverOverlay4} onMouseLeave={handleMouseOutOverlay4}>
        <div className='line2'>
          <div className='l-txt'>
          <div className='l-txtR'>
          <span style={{fontWeight:"bold",fontSize:"13px"}} className="sp-txt">Monitor</span>
            <span className="sp-txt">Discover Monitors</span>
            <span className="sp-txt">For Business</span>
            <span className="sp-txt">All Monitors</span>
          </div>    
           <div className='l-txtR4'>
           <span  style={{fontWeight:"bold",fontSize:"13px"}} className="sp-txt">For Business</span>
            <span className="sp-txt">Business Display Solution</span>
            <span className="sp-txt">Smart Signage</span>
            <span className="sp-txt">LED Signage</span>
          </div>   
          </div>
          </div>
          </div>
          </div>
      )}



{showOverlay5&& (
  <div>
     <div><div className="overlay-background"></div>
        <div className="overlay5" onMouseEnter={handleHoverOverlay5} onMouseLeave={handleMouseOutOverlay5}>
        <div className='line2'>
          <div className='l-txt'>
          <div className='l-txtR1'>
          <span style={{fontWeight:"bold",fontSize:"13px"}} class="sp-txt">Product Help</span>
              <span class="sp-txt">Support Home</span>
              <span class="sp-txt">Manual and Software</span>
              <span class="sp-txt">Search support</span>
              <span class="sp-txt">Digital Service center</span>
              <span class="sp-txt">How to Videos</span>
              <span class="sp-txt">SHOP FAQ</span>
          </div>    
           <div className='l-txtR1'>
           <span style={{fontWeight:"bold",fontSize:"13px"}} class="sp-txt">Repairs and Warranty</span>
              <span class="sp-txt">Warranty Information</span>
              <span class="sp-txt">Service Locator</span>
              <span class="sp-txt">Book a Repair</span>
              <span class="sp-txt">Track Repair</span>
              <span class="sp-txt">Out of Warranty Repair Charges</span>
              <span class="sp-txt">Phone Spare Part Cost</span>
          </div>
          <div className='l-txtR1'>
          <span style={{fontWeight:"bold",fontSize:"13px"}} class="sp-txt">Contact</span>
              <span class="sp-txt">WhatsApp Us(English)</span>
              <span class="sp-txt">Email</span>
              <span class="sp-txt">Call</span>
              <span class="sp-txt">Sign Language</span>
              <span class="sp-txt">Care For Clean India</span>
          </div>
          <div className='l-txtR1'>
          <span style={{fontWeight:"bold",fontSize:"13px"}} class="sp-txt">Additional Info</span>
              <span class="sp-txt">News and Alerts</span>
              <span class="sp-txt">Smart Switch</span>
              <span class="sp-txt">Tv Spare part cost</span>
              <span class="sp-txt">Galaxy screen Replacemant</span>
              <span class="sp-txt">Galaxy Z Series FAQs</span>
          </div>
         
        </div>
            </div>
            </div>   
            </div> 
            </div>
      )}

    
{showOverlay122 && (
  <>

    <div>
      <div className="overlay-background"></div>
      <div className="overlay6" onMouseEnter={handleHoverOverlay122} onMouseLeave={handleMouseOutOverlay122}>
        <div className="search-bar-container">
     
          <Suspense fallback={<div>Loading...</div>}>
          <SearchBar setResults={setResults} />
            {results && results.length > 0 && (
              <div>
                   <SearchResultsList results={results} />
              </div>
            )}
          </Suspense>
        </div>
      </div>
    </div>
  </>
)}


{showOverlay9&& (
  <div><div className="overlay-background"></div>
   
             <div className="overlay9" onMouseEnter={handleHoverOverlay9} onMouseLeave={handleMouseOutOverlay9}>

             <div className='l-txt'>
          <div className='l-txtR3'>
          <span  onClick={handleLogout} style={{fontWeight:"bold"}} class="sp-txt1">Logout</span>
              <span class="sp-txt1">Sign-in</span>
              <span class="sp-txt1">Product Registration</span>
              <span class="sp-txt1">Service center</span>
          </div>    
          </div>
          
          </div>
          </div>
      )}

</div>
    </>
  );
}

export default Navbar;
