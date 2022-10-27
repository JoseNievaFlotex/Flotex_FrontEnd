import React from 'react'
import { Routes, Route} from "react-router-dom"

import Login from '../pages/Login'

import { About } from './about'
import { Contact } from './contact'
import { Features } from './features'
import { Gallery } from './gallery'
import { Header } from './header'
import { Services } from './services'
import { Team } from './Team'
import { Testimonials } from './testimonials'

export default function NavPages() {

  return (
    <React.Fragment>
        <section className='section-nav-vh'>
            <Routes>
                <Route path='/header' element={<Header/>}/>
                <Route path='/' element={<Header/>}/>
                <Route path='/features' element={<Features/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='/testimonials' element={<Testimonials/>}/>
                <Route path='/team' element={<Team/>}/>
                <Route path='/contact' element={<Contact/>}/>
                {/* <Route path='/dolar' element={<Dolar/>}/>
                <Route path='/piso' element={<Piso/>}/> */}
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </section>
    </React.Fragment>
  )
}
