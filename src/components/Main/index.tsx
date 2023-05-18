import './styles.css'
import machuPicchu from '../../assets/machu-picchu.jpg'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { CgDetailsMore } from 'react-icons/cg'
import { useState } from 'react'
import { location, locationsList } from '../data/locations'

export function Main() {
  const [locations, setLocations] = useState<location[]>([])

  useState(() => {
    setLocations(locationsList)
  })

  return (
    <section className='main'>
      <h2 className='subtitle'>Most visited destinations</h2>

      <div className='cards'>
        {locations.map((location) => (
          <div className='card'>
            <img src={location.image}/>

            <div className='infos'>
              <div className='location'>
                <h3 className='name'>{location.name}</h3>
                <div className='country'>
                  <HiOutlineLocationMarker className='icon' />
                  <p>{location.country}</p>
                </div>
              </div>

              <hr className='line' />

              <div className='price'>
                <p>
                  Cultural <br /> Relax
                </p>
                <strong>${location.price}</strong>
              </div>

              <hr className='line' />

              <p className='desc'>{location.descrition}</p>

              <button>
                Details
                <CgDetailsMore className='icon' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
