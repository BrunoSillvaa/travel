import './styles.css'

import { MdOutlineTravelExplore } from 'react-icons/md'

export function Navbar() {
  return (
    <section className='navbar-container'>
      <div className='logo-wrapper'>
        <MdOutlineTravelExplore className='icon' />
        <h1 className='name'>Travel.</h1>
      </div>

      <nav className='navbar'>
        <ul className='list'>
          <li className='item'>
            <a href='#'>Home</a>
          </li>
          <li  className='item'>
            <a href='#'>Packages</a>
          </li>
          <li  className='item'>
            <a href='#'>Shop</a>
          </li>
          <li  className='item'>
            <a href='#'>About</a>
          </li>
          <li  className='item'>
            <a href='#'>Contact</a>
          </li>
        </ul>


        <button>
          <a href="#">Book Now</a>
        </button>
      </nav>
    </section>
  )
}
