import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSticky, setSticky] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        
        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/About' },
        { label: 'Shop', path: '/shop' },
        { label: 'Sell Your Book', path: '/admin/dashboard' },
        { label: 'Blog', path: '/Blog' },
    ];

    return (
        <header className={`transition-all duration-300 ${isSticky ? 'sticky top-0 bg-white shadow-lg' : ''}`}>
            <nav className="container mx-auto flex justify-between items-center p-4">
                <div className="flex items-center">
                    <Link to="/" className="text-2xl font-bold text-blue-700 flex items-center gap-2">
                        <FaBlog className="inline-block" /> Books
                    </Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    {navItems.map(({ label, path }) => (
                        <Link key={path} to={path} className="text-base text-black hover:text-blue-700">
                            {label}
                        </Link>
                    ))}
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        {isMenuOpen ? <FaXmark className="h-5 w-5" /> : <FaBarsStaggered className="h-5 w-5" />}
                    </button>
                </div>
            </nav>
            {isMenuOpen && (
                <div className="md:hidden flex flex-col items-center space-y-2 mt-4">
                    {navItems.map(({ label, path }) => (
                        <Link key={path} to={path} className="text-base text-black hover:text-blue-700">
                            {label}
                        </Link>
                    ))}
                </div>
                
            )}
            {/* <button className='space-x-12 hidden lg:flex items-center'><FaBarsStaggered className='w-5 hover:text-blue-700' /></button> */}
       
       <div className='md:hidden'>
       <button onClick={toggleMenu}className='text-black focus:outline-none ' >
        {
            isMenuOpen?<FaXmark className='h-5 w-5 text-black'  />:<FaBarsStaggered/>
        }
       </button>
       {/* <div className={`space-y-4 px-4 mt-16 py-7 bg-blue `}>
       {navItems.map(({ label, path }) => (
                        <Link key={path} to={path} className=" block text-base text-black text-white  upperCase cursor-pointer hover:text-blue-700 ">
                            {label}
                        </Link>
                    ))}
       </div> */}

       </div>

       
       
            </header>
    );
};

export default Navbar;
