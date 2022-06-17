import React from 'react'
import './Homepage.css'
import {Hero,Benefits,Features,Get_started,Testimonial,call_to_action} from '../../Components/index'
import {Footer,Navbar} from '../../Reusables/index'
const Homepage = () => {
  return (
    <div className='urcrypto_homepage'>
 <Navbar/>
<Hero/>
<Benefits/>
<Features/>
<Get_started/>
<Testimonial/>
<call_to_action/>
 <Footer/>

    </div>
  )
}

export default Homepage