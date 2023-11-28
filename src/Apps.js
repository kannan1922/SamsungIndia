// Apps.js
import React ,{useRef,useEffect}from 'react';
import { Routes, Route, useNavigate, useLocation,nav ,Link,Switch,HashRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Slider from './Carousel/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hovertab from './Hoverswitch/Hovertab';
import Footer from './Footer/Footer';
import Shop from './Context/Shop';
import Tabswitch from './Tabswitch/Tabswitch';


function Apps() {
  return (
    <div>
<Navbar/>
<Slider /> 
<Tabswitch carouselId="second-carousel" />

      <Hovertab />
      <Footer />
    </div>
  );
}

export default Apps;
