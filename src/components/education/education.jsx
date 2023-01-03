import React from 'react'
import './education.css'

const Education = () => {
  return (
    <div id="education">
    <h2 class="heading">Education</h2>
    <div class="education-block">
        <h3>Rajadhani Business School -University of Kerala</h3>
        <span class="education-date">2013 - 2015</span>
        <h4>Master of Business Administration</h4>
        <p>
           Specialised in Human Resources and International Business.
        </p>
    </div>

    <div class="education-block">
        <h3>University Institute of Technology -University of Kerala</h3>
        <span class="education-date">2009 - 2012</span>
        <h4>Bachelor of Business Administration</h4>
    </div>

    <div class="education-block">
        <h3>Centre for Development of Advanced Computing</h3>
        <h4>Diploma in Multi-Lingual Office Automation</h4>
    </div>

    <div class="education-block">
        <h3>Indian Red Cross Society</h3>
        <h4>Certification as Senior Professional on First Aid Training</h4>
    </div>

    <div class="education-block">
        <h3>Self - Taught</h3>
        <span class="education-date">July 2022 - Till Date</span>
        <h4>Front End Development</h4>
        <h4> HTML, CSS , Javascript, NODE js, Data Structures & Algorithms, React js , Vue js , React Native.</h4>
        <a href="https://github.com/vinayjs">My github profile</a>
    </div>

</div>
  )
}

export default Education