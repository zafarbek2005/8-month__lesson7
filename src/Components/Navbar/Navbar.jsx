import { BiCart } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside, true);
    } else {
      document.removeEventListener('click', handleClickOutside, true);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [isOpen]);

  const handleClickOutside = (event) => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar && !sidebar.contains(event.target) && !event.target.closest('.menu-toggle')) {
      closeMenu();
    }
  };

  return (
    <>
      <header>
        <div className="navbar container">
          <a href="/">
            <div className="logo">
              <img src="https://i.pinimg.com/736x/5f/de/2f/5fde2ff815bc8fc11b1879f17d7b44bf.jpg" alt="Logo" />
            </div>
          </a>
          <nav className={`items ${isOpen ? 'open' : ''}`}>
            <a href="/">Home</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
          </nav>
          <div className={`right_items ${isOpen ? 'open' : ''}`}>
            <a href="/login"><BsFillPersonFill /> Login</a>
            <Link to={'/Create'}>
              <p> Create</p>
            </Link>
            <p><BiCart /> Cart</p>
          </div>
          <div className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <nav>
            <a href="/" onClick={closeMenu}>Home</a>
            <a href="#" onClick={closeMenu}>About Us</a>
            <a href="#" onClick={closeMenu}>Contact</a>
            <a href="/login" onClick={closeMenu}><BsFillPersonFill /> Login</a>
            <Link to={'/Create'} onClick={closeMenu}>
              <p> Create</p>
            </Link>
            <p onClick={closeMenu}><BiCart /> Cart</p>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
