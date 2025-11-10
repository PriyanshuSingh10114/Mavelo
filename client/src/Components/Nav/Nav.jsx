import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`px-[12%] fixed top-0 left-0 w-full z-[4999] transition-all duration-300 ${isScrolled ? 'bg-[#111111] shadow-md' : 'bg-black-500'}`}>
        <div className='max-w-7xl mx-auto flex items-center justify-between py-2 relative'>
          
          <Link to="/" className="text-4xl text-white font-bold logo font-bricolage">
            Mav<span className="text-[#f5b754]">elo</span>
          </Link>

          {/* Hamburger for mobile */}
          <div className='lg:hidden'>
            <button onClick={() => setIsOpen(!isOpen)}>
              <i className={`ri-menu-line text-2xl transition ${isOpen ? 'hidden' : 'block'}`}></i>
              <i className={`ri-close-line text-2xl transition ${isOpen ? 'block' : 'hidden'}`}></i>
            </button>
          </div>

          {/* Menu */}
          <ul className={`menu flex-col lg:flex-row lg:flex absolute lg:static top-full left-0 w-full lg:w-auto bg-black lg:bg-transparent z-50 gap-2 text-sm font-medium ${isOpen ? 'flex' : 'hidden'}`}>
            <li><Link to='/' className='text-white opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0'>Home</Link></li>
            <li><Link to='/about' className='text-white opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0'>About</Link></li>
            <li><Link to='/services' className='text-white opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0'>Services</Link></li>
            <li><Link to='/cars' className='text-white opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0'>Cars</Link></li>
            <li><Link to='/blog' className='text-white opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0'>Blog</Link></li>
            <li><Link to='/teams' className='text-white opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0'>Teams</Link></li>
            <li><Link to='/contact' className='text-white opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0'>Contact</Link></li>
          </ul>

          {/* Right-side info */}
          <div className='hidden lg:flex items-center gap-4'>
            <div className="border border-[#f5b754] text-[#f5b754] rounded-full w-[45px] h-[45px] flex items-center justify-center text-xl">
              <i className="ri-phone-fill"></i>
            </div>
            <div>
              <p className='text-xs text-white opacity-70'>Need Help?</p>
              <p className='font-semibold text-white'>546 632 4169</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav;
