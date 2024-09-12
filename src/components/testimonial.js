import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author1Name: 'John Doe',
  author1Src:
    'https://images.unsplash.com/photo-1558898479-33c0057a5d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjA3MzcxMnw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: 'David Johnson',
  author4Alt: 'Image of Emily Brown',
  author3Alt: 'Image of David Johnson',
  review2:
    'I had a great experience working with Sambhav Career Consultancy. They assisted me in finding a job in Australia with a competitive salary package.',
  heading1: 'Testimonials',
  review1:
    'I am grateful for the professional services provided by Sambhav Career Consultancy. I highly recommend their expertise to anyone looking for opportunities abroad.',
  author4Position: 'HR Specialist',
  author3Src:
    'https://images.unsplash.com/photo-1526510747491-58f928ec870f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjA3MzcxM3w&ixlib=rb-4.0.3&q=80&w=1080',
  review4:
    'I cannot thank Sambhav Career Consultancy enough for their support in finding me a job in New Zealand. Their dedication to client satisfaction is commendable.',
  author2Alt: 'Image of Jane Smith',
  content1:
    'Sambhav Career Consultancy helped me secure a job in Canada. Their guidance and support throughout the process were exceptional.',
  author2Position: 'Marketing Manager',
  author2Name: 'Jane Smith',
  author4Name: 'Emily Brown',
  author3Position: 'Finance Analyst',
  review3:
    'Sambhav Career Consultancy exceeded my expectations in helping me land a job in the UK. Their personalized approach made all the difference.',
  author1Alt: 'Image of John Doe',
  author2Src:
    'https://images.unsplash.com/photo-1711898387141-6131231e3dc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjA3MzcxMnw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Position: 'Software Engineer',
  author4Src:
    'https://images.unsplash.com/photo-1440133197387-5a6020d5ace2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjA3MzcxMnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Testimonial.propTypes = {
  author1Name: PropTypes.string,
  author1Src: PropTypes.string,
  author3Name: PropTypes.string,
  author4Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  review2: PropTypes.string,
  heading1: PropTypes.string,
  review1: PropTypes.string,
  author4Position: PropTypes.string,
  author3Src: PropTypes.string,
  review4: PropTypes.string,
  author2Alt: PropTypes.string,
  content1: PropTypes.string,
  author2Position: PropTypes.string,
  author2Name: PropTypes.string,
  author4Name: PropTypes.string,
  author3Position: PropTypes.string,
  review3: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author1Position: PropTypes.string,
  author4Src: PropTypes.string,
}

export default Testimonial
