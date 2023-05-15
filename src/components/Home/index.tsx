import './styles.css'
import video from '../../assets/video.mp4'

import { GrLocation } from 'react-icons/gr'
import { MdAttachMoney, MdFilterListAlt } from 'react-icons/md'
import { useState } from 'react'

export function Home() {
  const [value, setValue] = useState(500)

  return (
    <section className='home'>
      <div className='overlay'></div>
      <video
        src={video}
        className='video'
        muted
        autoPlay
        loop
        typeof='video/mp4'
      />

      <div className='home-content'>
        <div className='texts'>
          <h2 className='subtitle'>Our Packages</h2>
          <h1 className='title'>Search your Holiday</h1>
        </div>

        <form>
          <div className='destination'>
            <label htmlFor='destination'>Search your destination:</label>
            <div className='input-wrapper'>
              <input
                id='destination'
                type='text'
                placeholder='Enter name here...'
              />
              <GrLocation className='icon' />
            </div>
          </div>

          <div className='date'>
            <label htmlFor='date'>Select your date:</label>
            <div className='input-wrapper'>
              <input id='date' type='date' />
            </div>
          </div>

          <div className='price'>
            <label htmlFor='price'>Max price:</label>
            <h3>R${value}</h3>
            <div className='input-wrapper'>
              <input
                id='price'
                type='range'
                step={500}
                min={500}
                max={10000}
                onChange={(e) => {
                  setValue(+e.target.value)
                }}
              />
              <MdAttachMoney className='icon' size={18} />
            </div>
          </div>

          <button className='more-filters'>
            <MdFilterListAlt size={20}/>
            More Filters
          </button>
        </form>
      </div>
    </section>
  )
}
