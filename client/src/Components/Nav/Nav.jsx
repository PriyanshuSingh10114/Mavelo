import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LoginModal from '../Pages/LoginModal';
import { getProfile } from '../../Authapi/auth';
function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [showLogin, setShowLogin] = useState(false); // ✅ added
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  useEffect(() => {
      getProfile().then((data) => {
        if (data?.user) {
          setIsLoggedIn(true);
          
        } else {
          setIsLoggedIn(false);
        }
      });
    }, []);
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

          {/* LOGIN BUTTON (opens modal) */}
          {/* LOGIN / PROFILE ICON */}
          {!isLoggedIn ? (
            <button
              onClick={() => setShowLogin(true)}
              className="px-5 py-2 rounded-full bg-[#f5b754] text-black font-semibold hover:brightness-110 transition"
            >
              Login
            </button>
          ) : (
            <div className="relative">
              {/* Profile Icon */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 rounded-full bg-[#f5b754] flex items-center justify-center text-black font-bold"
              >
                <i className="ri-user-3-fill text-lg"></i>
              </button>

              {/* Dropdown */}
              {isOpen && (
                <div className="absolute right-0 mt-3 w-44 rounded-xl bg-[#1a1a1a] shadow-lg border border-white/10">

                  <Link
                    to="/profile"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm text-white hover:bg-white/10"
                  >
                    Profile
                  </Link>

                  <Link
                    to="/my-bookings"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm text-white hover:bg-white/10"
                  >
                    My Bookings
                  </Link>

                  <button
                    onClick={async () => {
                      await fetch(
                        `${import.meta.env.VITE_BACKEND_URL}/api/user/logout`,
                        {
                          method: "POST",
                          credentials: "include",
                        }
                      );

                      setIsLoggedIn(false);
                      setIsOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-white/10 rounded-b-xl"
                  >
                    Logout
                  </button>

                </div>
              )}

            </div>
          )}


        </div>
      </nav>

      {/* LOGIN MODAL */}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLoginSuccess={() => setIsLoggedIn(true)}
        />
      )}
    </>
  )
}

export default Nav;
