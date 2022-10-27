import React from 'react'
import { Navigation } from "../components/navigation";
import NavPages from './NavPages';

export default function MainPage() {

  return (
    <React.Fragment>
        <section className='ayrton3'>
            <div className='height-nav-flotex'>
                <Navigation/>
            </div>

            <div>
                <NavPages/>
            </div>
        </section>
    </React.Fragment>
  )
}
