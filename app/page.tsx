'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <div className="nav-links">
            <a 
              href="#home" 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('home')
              }}
            >
              HOME
            </a>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('about')
              }}
            >
              ABOUT
            </a>
            <a 
              href="#portfolio" 
              className={activeSection === 'portfolio' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('portfolio')
              }}
            >
              PORTFOLIO
            </a>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
            >
              CONTACT
            </a>
            <a href="#albums">CLIENT ALBUMS</a>
            <a href="#book">BOOK ONLINE</a>
          </div>
          <div className="login-link">
            <span>👤</span>
            <a href="#login">Log In</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Yuvi Photography</h1>
          <div className="separator"></div>
          <div className="tagline">WEDDING PHOTOGRAPHY</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <Image
                src="/about me.jpg"
                alt="Yuvi Photography with camera"
                width={500}
                height={600}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="about-text">
              <h2>About me</h2>
              <div className="separator"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta architecto incidunt sequi quasi maiores est quo reiciendis ut excepturi distinctio nostrum, possimus, numquam consequatur optio sapiente eum itaque quia laudantium?
              </p>
              <p>
                Let's create something beautiful together. I can't wait to be part of your story.
              </p>
              <a 
                href="#contact" 
                className="book-session"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('contact')
                }}
              >
                BOOK A SESSION &gt;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: '300', marginBottom: '3rem' }}>
            Portfolio
          </h2>
          <div className="portfolio-grid">
            {[
              { src: '/portfolio1.jpg', alt: 'Bride with veil' },
              { src: '/porfolio2.jpg', alt: 'Wedding rings on dress' },
              { src: '/porfolio3.jpg', alt: 'Wedding decoration' },
            ].map((image, index) => (
              <div key={index} className="portfolio-item">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Let's talk</h2>
              <div className="separator"></div>
              <div className="contact-details">
                <p>mohali</p>
                <p>mohali</p>
                <p>phone: 123456789</p>
                <p>info@mysite.com</p>
              </div>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input type="text" id="lastName" name="lastName" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5}></textarea>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
              </form>
            </div>
            <div className="contact-image">
              <Image
                src="/letstalk.jpg"
                alt="Wedding couple"
                width={600}
                height={800}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
