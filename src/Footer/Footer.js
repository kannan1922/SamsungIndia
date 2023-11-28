import React,{ useState } from 'react';
import '../Footer/footer.css';
function Footer() {
  const [showDown, setShowDown] = useState(false);
  const [showDown1, setShowDown1] = useState(false);
  const [showDown2, setShowDown2] = useState(false);
  const [showDown3, setShowDown3] = useState(false);
  const [showDown4, setShowDown4] = useState(false);
  const handleclick=()=>{
    setShowDown(!showDown)
    setShowDown1(false);
    setShowDown2(false);
    setShowDown3(false);
    setShowDown4(false);  
  }
  const handleclick1=()=>{
    setShowDown1(!showDown1)
    setShowDown(false);
    setShowDown2(false);
    setShowDown3(false);
    setShowDown4(false);
  }
  const handleclick2=()=>{
    setShowDown2(!showDown2)
    setShowDown(false);
    setShowDown1(false);
    setShowDown3(false);
    setShowDown4(false);
  }
  const handleclick3=()=>{
    setShowDown3(!showDown3)
    setShowDown(false);
    setShowDown1(false);
    setShowDown2(false);
    setShowDown4(false);
  }
  const handleclick4=()=>{
    setShowDown4(!showDown4)
    setShowDown(false);
    setShowDown1(false);
    setShowDown2(false);
    setShowDown3(false);
  }
  return (
    <>
    <div className="foot">
            <p>Image stipulated for representation purpose only. Cashback subject to maximum capping limit. Third party finance offers are at the sole discretion of the partners/NBFC/financiers. 10% cashback applicable as per limits: Infinte variant: ₹‎ 5000 monthly, ₹‎ 20000 annually, Signature variant: ₹‎ 2500 monthly, ₹‎ 10000 annually.</p>
             <p>* EMI computed on ₹‎ 250290 down payment, 30 months No Cost EMI on the MRP/Price of ₹‎ 339990 for 1 Unit of 65QN800C. For more details visit www.samsung.com</p>
              <p>* Image simulated for illustrative purpose. Actual UX/UI may differ.</p>
             <p>* S Pen Fold Edition sold separately and is only compatible with Z Fold5, Z Fold4 and Z Fold3. Flex mode supported at angles between 75˚ and 115˚.</p>
              <p>* Image simulated. Color and model availability may vary depending on country or carrier.</p>
            <p>* Galaxy Tab S9, Tab S9+, Tab S9 Ultra is rated as IP68. Based on test condition for submersion in up to 1.5 meter of fresh water for up to 30 mins. Not advised for beach or pool use.</p>
            <p>* 5G Devices are 5G ready, connectivity dependent on network availability.</p>     
             <p>* Images shown here are for representational purpose only, actual may vary. All features, specifications and prices are subject to change without prior notice. Model availability may vary from location to location.</p>    
            <p>* Image simulated. S Pen Fold Edition sold separately and is only compatible with Galaxy Z Fold4 and Galaxy Z Fold3.</p>       
             <p>* Watch screen image simulated for illustrative purpose. Availability of colours, sizes, models, and watch bands may vary by country or carrier.</p>
             <p>* Image simulated. Available colours of Galaxy Buds2 Pro may vary by country or carrier.</p>
            <p># T&C Apply. Cashback at the sole discretion of the issuer / NBFC.</p>
             <p>** Product launch dates vary from country to country. Some products may be launched earlier in few countries.</p>
              <p>* Offer valid on select models only</p>
                    </div>
                    <div className="boxfooter">
                      <div className="insidebox">
                        <h1  className="boxtext1">Product & Service</h1>
                        <span className="boxtext" >Smartphone</span>
                        <span className="boxtext">tablets</span>
                        <span className="boxtext">Mobile Accessories</span>
                        <span className="boxtext">TVs</span>
                        <span className="boxtext">Sound Devics</span>
                        <span className="boxtext">Refrigerator</span>
                        <span className="boxtext">Laundry</span>
                        <span className="boxtext">Air Conditioners</span>
                        <span className="boxtext">Cooking Appliance</span>
                        <span className="boxtext">Monitor</span>
                        <span className="boxtext">Memory Storage</span>
                      </div>
                      <div className="insidebox">
                        <h1  className="boxtext1">Shop</h1>
                        <span className="boxtext">FAQa</span>
                        <span className="boxtext">Welcome voucher</span>
                        <span className="boxtext">Samsung referral advantage</span>
                        <span className="boxtext">Samsung Student advantage</span>
                        <span className="boxtext">Defence purchase spanrogram</span>
                        <span className="boxtext">Corporate Employee program</span>
                        <span className="boxtext">Corporate Bulk purchase</span>
                        <span className="boxtext">Storage Locater</span>
                        <span className="boxtext">Smart Club</span>
                        <span className="boxtext">Terms of Use</span>
                        <span className="boxtext">Explore</span>
                      </div>
                      <div className="insidebox">
                        <h1  className="boxtext1">Support Us</h1>
                        <span className="boxtext">Whatsapp Us</span>
                        <span className="boxtext">Sign Language</span>
                        <span className="boxtext">Email Us</span>
                        <span className="boxtext">Call Us</span>
                        <span className="boxtext">Email the CEO</span>
                        <span className="boxtext">Community</span>
                        <span className="boxtext">spanroduct Registration</span>
                        <span className="boxtext">Service Center</span>
                        <span className="boxtext">Share your Ospaninion</span>
                      </div>
                      <div className="insidebox">
                        <h1  className="boxtext1">Account and Community</h1>
                        <span className="boxtext">My spanage</span>
                        <span className="boxtext">My spanroducts</span>
                        <span className="boxtext">Orders</span>
                        <span className="boxtext">Wishlist</span>
                        <span className="boxtext">Vouchers</span>
                        <span className="boxtext">My Referrals</span>
                        <span className="boxtext">Service</span>
                        <span className="boxtext">Community</span>
                      </div>
                      <div className="insidebox">
                        <h1  className="boxtext1">Sustainability</h1>
                        <span className="boxtext">Environment</span>
                        <span className="boxtext">Security and spanrivacy</span>
                        <span className="boxtext">Accessability</span>
                        <span className="boxtext">Diversity Equity Inclusion</span>
                        <span className="boxtext">corporate citizenship</span>
                        <span className="boxtext">corspanorate Sustainability</span>  
                        <span className="boxtext">About Us</span>
                        <h1 className="boxtext1">Compant Info</h1>
                        <span className="boxtext">Business Area</span>
                        <span className="boxtext">Brand Idea</span>
                        <span className="boxtext">Careers</span>
                        <span className="boxtext">Investors Relations</span>
                        <span className="boxtext">NewsRoom</span>
                        <span className="boxtext">Ethics</span>
                        <span className="boxtext">Samsung Design</span>
                      </div>
                      
                    </div>
                    <div className="foots">


<div className='totalwrap'>
<div class="Res-footer" onClick={handleclick}>Product & Service</div>
{showDown&& (
             <div className="Dropdown show" >

             <div >
          <div className="Res-Dropdown">
          <span className='Res-txt'>Smartphone</span>
                        <span className='Res-txt'>tablets</span>
                        <span className='Res-txt'>Mobile Accessories</span>
                        <span className='Res-txt'>TVs</span>
                        <span className='Res-txt'>Sound Devics</span>
                        <span className='Res-txt'>Refrigerator</span>
                        <span className='Res-txt'>Laundry</span>
                        <span className='Res-txt'>Air Conditioners</span>
                        <span className='Res-txt'>Cooking Appliance</span>
                        <span className='Res-txt'>Monitor</span>
                        <span className='Res-txt'>Memory Storage</span>
          </div>    
          </div>
      
          </div>
      )}




<div class="Res-footer" onClick={handleclick1}>Shop</div>
{showDown1&& (
             <div className="Dropdown show" >
             <div >
          <div className="Res-Dropdown">
          <span className='Res-txt'>FAQa</span>
                        <span className='Res-txt'>Welcome voucher</span>
                        <span className='Res-txt'>Samsung referral advantage</span>
                        <span className='Res-txt'>Samsung Student advantage</span>
                        <span className='Res-txt'>Defence purchase spanrogram</span>
                        <span className='Res-txt'>Corporate Employee program</span>
                        <span className='Res-txt'>Corporate Bulk purchase</span>
                        <span className='Res-txt'>Storage Locater</span>
          </div>    
          </div>
      
          </div>
      )}






<div class="Res-footer" onClick={handleclick2}>Support</div>
{showDown2&& (
             <div className="Dropdown" >

             <div >
          <div className="Res-Dropdown">
          <span >Logout</span>
              <span className='Res-txt'>Sign-in</span>
              <span className='Res-txt'>Product Registration</span>
              <span className='Res-txt'>Service center</span>
              <span className='Res-txt'>Help</span>
              <span className='Res-txt'>Service Registration</span>
          </div>    
          </div>
      
          </div>
      )}




<div class="Res-footer" onClick={handleclick3}>Account & Community</div>

{showDown3&& (
             <div className="Dropdown" >
             <div >
          <div className="Res-Dropdown">
          <span className='Res-txt'>My spanage</span>
                        <span className='Res-txt'>My spanroducts</span>
                        <span className='Res-txt'>Orders</span>
                        <span className='Res-txt'>Wishlist</span>
                        <span className='Res-txt'>Vouchers</span>
                        <span className='Res-txt'>My Referrals</span>
                        <span className='Res-txt'>Service</span>
                        <span className='Res-txt'>Community</span>
          </div>    
          </div>
      
          </div>
      )}




<div class="Res-footer" onClick={handleclick4}>Sustainability</div>

        {showDown4&& (
             <div className="Dropdown" >

             <div >
          <div className="Res-Dropdown">
          <span className='Res-txt'>Logout</span>
              <span className='Res-txt'>Sign-in</span>
              <span className='Res-txt'>Product Registration</span>
              <span className='Res-txt'>Service center</span>
          </div>    
          </div>
          </div>
          
      )}
      </div>
      <div className='end'>
            <p>Copyright ⓒ 1995-2023 SAMSUNG All Rights reserved.</p>
             <p>Please dispose of e-waste and plastic waste responsibly.</p>
             <p>For more information or e-waste pick up, please call 1800 5 7267864 or click here for more details.</p>
             
            <p> Registered Office Address: 6th Floor, DLF Centre, Sansad Marg, New Delhi-110001</p>
             <p>Corporate Identification Number (CIN): U31900DL1995PTC071387</p>
            </div>
            </div>
    </>
  )
}
export default Footer