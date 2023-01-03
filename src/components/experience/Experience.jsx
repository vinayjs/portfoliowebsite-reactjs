import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <div id='experience'>
      <div className='exp_heading'>
      <h5> What Skills I Have</h5>
      <h2 id='colorhead'>My Skillset</h2>
      </div>
      <div className='container experience_container'>
        <div className="experience_frontend">
          <h3> Frontend Development</h3>
          <div className='experience_content'>
          <div>
          <article className='experience_details'>
          <BsFillPatchCheckFill/>
          <h4>HTML</h4>
          </article>
          </div>
          <div>
          <article className='experience_details'>
          <BsFillPatchCheckFill/>
          <h4>CSS</h4>
          </article>
          </div>
          <div>
          <article className='experience_details'>
          <BsFillPatchCheckFill/>
          <h4>JAVASCRIPT</h4>
          </article>
          </div>
          <div>
          <article className='experience_details'>
          <BsFillPatchCheckFill/>
          <h4>NODE JS</h4>
          </article>
          </div>
          <div>
          <article className='experience_details'>
          <BsFillPatchCheckFill/>
          <h4>REACT JS</h4>
          </article>
          </div>
          <div>
          <article className='experience_details'>
          <BsFillPatchCheckFill/>
          <h4>VUE JS</h4>
          </article>
          </div>
          <div>
          <article className='experience_details'>
          <BsFillPatchCheckFill/>
          <h4>DATA STRUCTURES AND ALGORITHMS</h4>
          </article>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Experience