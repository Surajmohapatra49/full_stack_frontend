import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { LuTwitter } from "react-icons/lu";
import { PiLinkedinLogoLight } from "react-icons/pi";

const Home = () => {
  const images = [
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJlYXV0aWZ1bHxlbnwwfHx8fDE2MzI1NzU2NDY&ixlib=rb-1.2.1&q=80&w=1080',
    'https://wallpapercave.com/wp/wp7733694.jpg',
    'https://wallpapercave.com/wp/wp7048129.jpg',
    'https://c4.wallpaperflare.com/wallpaper/549/311/625/design-house-villa-mansion-wallpaper-preview.jpg',
    'https://e0.pxfuel.com/wallpapers/393/859/desktop-wallpaper-house-cities-design-residential-handsomely-it-s-beautiful.jpg',
    'https://wallpapercave.com/wp/wp2464201.jpg',
    'https://wallpapercave.com/wp/wp2464219.jpg'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="hnavbar">
        <h5 className='logo'>Skyper</h5>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Sign Up</Link>
        </div>
      </div>

      <div className="home-container">
        <div className="header">
          <h1>Welcome to Our Website</h1>
          <p>Your satisfaction is our priority</p>
        </div>
        <div className="slider">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={index === currentImage ? 'active' : ''}
            />
          ))}
        </div>
       
      </div>

      <footer className="footer">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>1234 Street Name</p>
          <p>City, State, ZIP</p>
          <p>Country</p>
        </div>
        <div className="footer-section">
          <h2>Contact Information</h2>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@example.com</p>
        </div>
        <div className="footer-section social-media">
          <a href="https://facebook.com" aria-label="Facebook"><CiFacebook /></a>
          <a href="https://twitter.com" aria-label="Twitter"><LuTwitter /></a>
          <a href="https://instagram.com" aria-label="Instagram"><IoLogoInstagram /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn"><PiLinkedinLogoLight /></a>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Skyper. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
