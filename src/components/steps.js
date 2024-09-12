import React from 'react'

import PropTypes from 'prop-types'

import './steps.css'

const Steps = (props) => {
  return (
    <div className="steps-container1 thq-section-padding">
      <div className="steps-max-width thq-section-max-width">
        <div className="steps-container2 thq-grid-2">
          <div className="steps-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="steps-actions">
              <button className="thq-button-filled thq-button-animated steps-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps-container3">
            <div className="steps-container4 thq-card">
              <h2 className="thq-heading-2">{props.step1Title}</h2>
              <span className="steps-text14 thq-body-small">
                {props.step1Description}
              </span>
              <label className="steps-text15 thq-heading-3">01</label>
            </div>
            <div className="steps-container5 thq-card">
              <h2 className="thq-heading-2">{props.step2Title1}</h2>
              <span className="thq-body-small">{props.step2Description1}</span>
              <label className="steps-text18 thq-heading-3">02</label>
            </div>
            <div className="steps-container6 thq-card">
              <h2 className="thq-heading-2">{props.step3Title}</h2>
              <span className="steps-text20 thq-body-small">
                {props.step3Description}
              </span>
              <label className="steps-text21 thq-heading-3">03</label>
            </div>
            <div className="steps-container7 thq-card">
              <h2 className="thq-heading-2">{props.step4Title}</h2>
              <span className="thq-body-small">{props.step4Description}</span>
              <label className="steps-text24 thq-heading-3">04</label>
            </div>
            <div className="steps-container8 thq-card">
              <h2 className="thq-heading-2">{props.step1Title2}</h2>
              <span className="thq-body-small">{props.step1Description2}</span>
              <label className="steps-text27 thq-heading-3">
                <span>05</span>
                <br></br>
                <br></br>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps.defaultProps = {
  step2Title1: 'Resume Collection',
  step1Title2: 'Reach Your Destination',
  step3Description:
    'Gain access to our extensive network of global employers and job openings that match your skill set.',
  step4Title: 'Interview Preparation',
  step4Description:
    'Prepare for interviews with mock sessions, tips, and guidance from experienced interview coaches.',
  step2Description1:
    'Receive personalized assistance in crafting a professional resume tailored to international job opportunities.',
  step1Description:
    'Schedule a consultation with our career experts to discuss your goals and aspirations for working abroad.',
  step1Title: 'Consultation',
  step3Title: 'Job Search Assistance',
  step1Description2:
    'Travel smoothly to your job location with the expert guidance and support of our consultants.',
}

Steps.propTypes = {
  step2Title1: PropTypes.string,
  step1Title2: PropTypes.string,
  step3Description: PropTypes.string,
  step4Title: PropTypes.string,
  step4Description: PropTypes.string,
  step2Description1: PropTypes.string,
  step1Description: PropTypes.string,
  step1Title: PropTypes.string,
  step3Title: PropTypes.string,
  step1Description2: PropTypes.string,
}

export default Steps
