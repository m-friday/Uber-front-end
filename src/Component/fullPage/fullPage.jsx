import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component if using React Router
import firstImage from "../Assets/firstImage.jpeg";
import secondImage from "../Assets/secondImage.webp";
import thirdImage from "../Assets/thirdImage.webp";
import firstQR from "../Assets/firstQR.jpeg";
import secondQR from "../Assets/secondQR.jpeg";
import facebook from "../Assets/facebook.jpeg";
import twitter from "../Assets/twitter.jpeg";
import youtube from "../Assets/youtube.jpeg";
import linkedIn from "../Assets/linkedIn.png";
import instagram from "../Assets/instagram.jpeg";
import location from "../Assets/location.jpeg"
import playstore from "../Assets/playstore.jpeg";
import applestore from "../Assets/applestore.jpeg";
import './fullPage.css';

const Navbar = () => {
  return (
    <><><><><div className='full-nav'>
      <><nav className="navbar">
        <div className="navbar-logo">
          <h2 className='logo'>Uber</h2>
        </div>
        <ul className="navbar-links">
          <Link to="/ride" className='About'>Ride</Link>
          <Link to="/drive" className='SWit'>Drive</Link>
          <Link to="/uberEats" className='StartUps'>Uber Eats</Link>
          <Link to="/about" className='Sponsor'>About</Link>
        </ul>
        <div className='second-nav'>
          <div className="navbar-buttons1">
            <button className="navbar-button1">EN</button>
          </div>
          <div className="navbar-buttons2">
            <button className="navbar-button2">Help</button>
          </div>
          <div className="navbar-buttons3">
            <button className="navbar-button3">Log in</button>
          </div>
          <div className='navbar-buttons4'>
            <button className="navbar-button4">Sign up</button>
          </div>
        </div>
      </nav>
        <div className='move-h1'>
          <h1 className='go'>Go anywhere with <br /> Uber</h1>
          <p className='p1'>Request a ride, hop in, and go</p>

          <div className="input-field1">
            <input type="text" className='input1' placeholder="Enter Location" />
          </div>
          <div className='input-field2'>
            <input type="text" className='input2' placeholder="Enter Destination" />
          </div>
          <div className='move-button'>
            <button className='move-button1'>See Prices</button>
          </div>
          <div className='move-image1'>
            <img src={firstImage} alt='Image' className='firstImage' />
          </div>
        </div>
      </>
    </div>
    </><div className='move-image2'>
        <img src={secondImage} alt='image2' className='secondImage' />
        <div className='move-sec-session'>
          <h1 className='drive'>Drive when you <br /> want, make what <br /> you need</h1>
          <p className='p2'>Make money on your schedule with deliveries or rides—or<br /> both. You can use your own car or choose a rental<br /> through Uber.</p>
          <div className='move-but-link'>
            <button className='get-started'>Get started</button>
            <Link to='/drivers.uber.com' className='have-account'>Already have an account? Sign in</Link>
          </div>
        </div>
        <div className='move-sec-session2'>
          <h1 className='the-uber'>The Uber you <br />know, reimagined<br /> for business</h1>
          <p className='p3'>Uber for Business is a platform for managing global rides and<br />  meals, and local deliveries, for companies of any size.</p>
          <div>
            <button className='get-started2'>Get started</button>
            <Link to='/www.uber.com/en/business' className='check-solution'>Check out our solutions</Link>
          </div>
          <div className='move-image3'>
            <img src={thirdImage} alt='image3' className='thirdImage' />
          </div>
        </div>
      </div>
    </><div className='third-border'>
        <div className='move-all-qr'>
          <div className='move-the-h1'>
            <h1 className='style-h1'>It's easier in the apps</h1>
          </div>
          <div className='fouth-border'>
            <div className='move-qr-img'>
              <img src={firstQR} alt='QR1' className='firstQR' />
            </div>
            <div className='move-qr-download'>
              <Link to='/https://t.uber.com/download-uber-app'> <h2 className='download'>Download the Uber app</h2> </Link>
              <Link to='/https://t.uber.com/download-uber-app'> <p className='p4'>Scan to download</p> </Link>
            </div>
          </div>
          <div className='fifth-border'>
            <div className='move-qr-img2'>
              <img src={secondQR} alt='QR2' className='secondQR' />
            </div>
            <div className='move-qr-download2'>
              <Link to='/https://t.uber.com/download-driver-app'> <h2 className='download2'>Download the Driver app</h2> </Link>
              <Link to='/https://t.uber.com/download-driver-app'> <p className='p5'>Scan to download</p> </Link>
            </div>
          </div>
        </div>
      </div>
    </><div className='sixth-border'>
         <div className='move-all-first-link'>
          <Link to='/https://www.uber.com/ng/en'><h2 className='last-uber'>Uber</h2></Link>
          <Link to='/https://help.uber.com' className='help'>Visit Help Center</Link>
         </div>
         <div className='move-company'>
          <h2>Company</h2>
          <div className='style-link1'>
          <Link to='/https://www.uber.com/ng/en/about/' className='about'>About us</Link>
          <Link to='/https://www.uber.com/ng/en/about/uber-offerings/' className='offering'>Our offerings</Link>
          <Link to='/https://www.uber.com/newsroom/' className='newsroom'>Newsroom</Link>
          <Link to='/https://investor.uber.com/' className='investors'>Investors</Link>
          <Link to='/https://www.uber.com/blog/' className='blog'>Blog</Link>
          <Link to='/https://www.uber.com/ng/en/careers/' className='careers'>Careers</Link>
          <Link to='/https://www.uber.com/ng/en/uberai/' className='ai'>AI</Link>
          <Link to='/https://www.uber.com/ng/en/gift-cards/' className='giftcard'>Gift cards</Link>
          </div>
         </div>
         <div className='move-product'>
            <h2>Products</h2>
            <div className='style-link2'>
            <Link to='/https://www.uber.com/ng/en/ride/' className='ride'>Ride</Link>
            <Link to='/https://www.uber.com/ng/en/drive/' className='driven'>Drive</Link>
            <Link to='/https://www.ubereats.com/' className='eat'>Eat</Link>
            <Link to='/https://www.uberfreight.com/' className='uber-freight'>Uber Freight</Link>
            </div>
         </div>
         <div className='move-global'>
            <h2>Global citizenship</h2>
            <div className='style-link3'>
            <Link to='/https://www.uber.com/ng/en/safety/' className='safety'>Safety</Link>
            <Link to='/https://www.uber.com/ng/en/about/diversity/' className='diversity'>Diversity and Inclusion</Link>
            </div>
         </div>
         <div className='move-Travel'>
            <h2>Travel</h2>
            <div className='style-link4'>
            <Link to='/https://rides.sng.link/Aw5zn/o42y?_dl=uber%3A%2F%2Freserve&_fallback_redirect=http%3A%2F%2Fm.uber.com%2Freserve&_forward_params=1&_smtype=3&mvid=a8b0ab74-cecf-458e-a172-b34bba59c076&pcn=ubercom-footer&uclick_id=0e68bc82-c0e4-45d9-bbe1-5b7f23385004' className='reserve'>Reserve</Link>
            <Link to='/https://www.uber.com/global/en/airports/' className='airport'>Airports</Link>
            <Link to='/https://www.uber.com/global/en/cities/' className='cities'>Cities</Link>
            </div>
         </div>
         <div className='move-facebook'>
          <Link to='https://www.facebook.com/uber' className='move-fb'><img src={facebook} alt='facebook' className='facebook'/></Link>
         </div>
         <div className='move-twitter'>
          <Link to='https://twitter.com/uber' className='move-tw'> <img src={twitter} alt='twitter' className='twitter'/></Link>
         </div>
         <div className='move-youtube'>
          <Link to='https://www.youtube.com/uber' className='move-yt'><img src={youtube} alt='youtube' className='youtube'/></Link>
         </div>
         <div className='move-linkedIn'>
          <Link to='https://www.linkedin.com/company/uber' className='move-li'><img src={linkedIn} alt='linkedIn' className='linkedIn'/></Link>
         </div>
         <div className='move-instagram'>
          <Link to='https://www.instagram.com/uber/' className='move-in'><img src={instagram} alt='instagram' className='instagram'/></Link>
         </div>
         <div className='move-the-button'>
          <button className='loca-button'> <img src={location} alt='location' className='location'/>Lagos</button>
         </div>
         <div className='move-eng-button'>
          <button className='eng-button'>English</button>
         </div>
         <div className='move-play-button'>
         <button className='play-button'> <img src={playstore} alt='playstore' className='playstore'/></button>
         </div>
         <div className='move-apple-button'>
         <button className='apple-button'> <img src={applestore} alt='applestore' className='applestore'/></button>
         </div>
      </div></>
   
  );
}

export default Navbar;
