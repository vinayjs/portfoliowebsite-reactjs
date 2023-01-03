import React from 'react'
import './contact.css'
import IMG1 from '../../assets/portimg1.png'
import IMG2 from '../../assets/portimg2.png'
import IMG3 from '../../assets/portimg3.png'
import IMG4 from '../../assets/portimg4.png'
import IMG5 from '../../assets/portimg5.png'
import IMG6 from '../../assets/portimg6.png'
import IMG7 from '../../assets/portimg7.png'

function Contact() {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG1} alt="" />
        </div>
          <h3>2048 Game -vue js</h3>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/vinayjs/2048-gamevuejs" className='btn'>GitHub</a>
          <a href="https://vinayjs-2048-vuejs.netlify.app/" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG2} alt="" />
        </div>
          <h3>pizza-custom app - react js</h3>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/vinayjs/react-pizza-custom-app" className='btn'>GitHub</a>
          <a href="https://react-pizzacustomapp.netlify.app/" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG3} alt="" />
        </div>
          <h3>facebook clone</h3>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/vinayjs/facebookclone" className='btn'>GitHub</a>
          <a href="https://vinayjs.github.io/facebookclone/" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG4} alt="" />
        </div>
          <h3>Netflix Clone</h3>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/vinayjs/netflixclone" className='btn'>GitHub</a>
          <a href="https://vinayjs.github.io/netflixclone/" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG5} alt="" />
        </div>
          <h3>e-commerece website</h3>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/vinayjs/e-commerce-website" className='btn'>GitHub</a>
          <a href="https://vinayjs.github.io/e-commerce-website/" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG6} alt="" />
        </div>
          <h3>movie-app react js</h3>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/vinayjs/movieapp-reactjs" className='btn'>GitHub</a>
          <a href="https://vinayjs-movieapp.netlify.app/" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG7} alt="" />
        </div>
          <h3>Other Major works</h3>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/vinayjs/" className='btn'>GitHub</a>
          <a href="https://github.com/vinayjs/" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Contact