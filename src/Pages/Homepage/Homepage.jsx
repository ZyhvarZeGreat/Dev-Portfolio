import React from 'react'
import './Homepage.css'
import {Hero,Benefits,Features} from '../../Components/index'
import {Footer,Navbar} from '../../Reusables/index'
const Homepage = () => {
  return (
    <div className='urcrypto_homepage'>
 <Navbar/>
<Hero/>
<Benefits/>
 <Footer/>

    </div>
  )
}

export default Homepage