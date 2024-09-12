import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Steps from '../components/steps'
import Features2 from '../components/features2'
import Testimonial from '../components/testimonial'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Spotless Hungry Crocodile</title>
      </Helmet>
      <Navbar></Navbar>
      <Hero
        text={
          <Fragment>
            <span className="home-text10 thq-body-small">
              <span>Email Us</span>
              <br></br>
            </span>
          </Fragment>
        }
        text1={
          <Fragment>
            <a href="tel:+91 8788083541" className="home-text13 thq-body-small">
              Contact Us
            </a>
          </Fragment>
        }
        action1="Contact Us"
        content1="Sambhav Career Consultancy: Your Gateway to Premier Global Job Placements. Experience Expert Resume Services, Tailored Career Guidance, and Unmatched Job Search Support. Discover Exclusive Opportunities with Transparent Pricing and Read Success Stories from Our Satisfied Clients."
        heading1="Find Your Next Job Abroad &amp; Across the Globe"
      ></Hero>
      <Steps
        step3Title="Job Search Assistance"
        step4Title="Interview Preparation"
        step1Title2="Reach Your Destination "
        step4Description="Prepare for interviews with  tips, and guidance from experienced interview consultants."
        step1Description2="Travel smoothly to your job location with the expert guidance and support of our consultants."
      ></Steps>
      <Features2
        feature1Title="Comprehensive Visa Assistance"
        feature1Description="Navigate the complexities of visa applications with ease. Our expert team provides thorough assistance to ensure your documentation is complete and accurate.\n"
        feature2Title1={
          <Fragment>
            <span className="home-feature2-title thq-heading-2">
              <span>Complimentary Flight Tickets</span>
              <br></br>
            </span>
          </Fragment>
        }
        feature2Description="Receive customized advice to advance your career. Our consultants offer personalized strategies to help you achieve your professional goals."
        feature3Title1={
          <Fragment>
            <span className="home-feature3-title thq-heading-2">
              High Paying Jobs
            </span>
          </Fragment>
        }
        feature3Description="Access a range of top-tier job openings. We connect you with exclusive positions that match your skills and aspirations."
        feature1Description1={
          <Fragment>
            <span className="home-feature1-description thq-body-small">
              Navigate the complexities of visa applications with ease. Our
              expert team provides thorough assistance to ensure your
              documentation is complete and accurate.
            </span>
          </Fragment>
        }
      ></Features2>
      <Testimonial></Testimonial>
      <Contact
        address={
          <Fragment>
            <span className="home-address thq-body-small">
              <span>B203 VISION BOULEVARD</span>
              <br></br>
              <span>Kate Vasti Pimple Saudagar, Kunj Colony,</span>
              <br></br>
              <span>Pimple Saudagar, Pimpri-Chinchwad, Maharashtra 411027</span>
            </span>
          </Fragment>
        }
        phone={
          <Fragment>
            <span className="home-phone1 thq-body-small">
              <span>+91 94033 04652</span>
              <br></br>
            </span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="home-phone2 thq-body-small">
              <span>+91 87880 83541</span>
              <br></br>
            </span>
          </Fragment>
        }
        phone11={
          <Fragment>
            <span className="home-phone3 thq-body-small">
              <span>+91 93731 68172</span>
              <br></br>
            </span>
          </Fragment>
        }
        email={
          <Fragment>
            <span className="home-email thq-body-small">
              <span>sambhavcareer@gmail</span>
              <br></br>
              <span>.com</span>
            </span>
          </Fragment>
        }
      ></Contact>
      <Footer></Footer>
    </div>
  )
}

export default Home
