import React from 'react'
import Image from "next/image";
import Test from "../../public/img/2.jpg";
import Background from '../comp/NoisyBackgroundAbout';

const Work = () => {
  return (
  <section className='text-white'>
    <Background />
      <div className=''>
        <div className=''>
          <h1>Works i've done so far</h1>
        </div>
        </div>    
  </section>
  )
}

export default Work