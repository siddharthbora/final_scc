import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features2.css'

const Features2 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features2-container2 thq-section-max-width">
        <div className="features2-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features2-tab-horizontal1"
          >
            <div className="features2-divider-container1">
              {activeTab === 0 && <div className="features2-container3"></div>}
            </div>
            <div className="features2-content1">
              <h2 className="features2-feature1-title thq-heading-2">
                {props.feature1Title}
              </h2>
              <span className="features2-feature1-description1">
                {props.feature1Description1 ?? (
                  <Fragment>
                    <span className="features2-feature1-description2 thq-body-small">
                      <span>
                        Navigate the complexities of visa applications with
                        ease. Our expert team provides thorough assistance to
                        ensure your documentation is complete and accurate.
                      </span>
                      <br></br>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features2-tab-horizontal2"
          >
            <div className="features2-divider-container2">
              {activeTab === 1 && <div className="features2-container4"></div>}
            </div>
            <div className="features2-content2">
              <h2>
                {props.feature2Title1 ?? (
                  <Fragment>
                    <h2 className="features2-feature2-title2 thq-heading-2">
                      <span>Complimentary Flight Tickets</span>
                      <br></br>
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features2-tab-horizontal3"
          >
            <div className="features2-divider-container3">
              {activeTab === 2 && <div className="features2-container5"></div>}
            </div>
            <div className="features2-content3">
              <h2>
                {props.feature3Title1 ?? (
                  <Fragment>
                    <h2 className="features2-feature3-title2 thq-heading-2">
                      High Paying Jobs
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
        <div className="features2-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              loading="eager"
              className="features2-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features2-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features2-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features2.defaultProps = {
  feature2ImgAlt: 'High Paying Jobs Image',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1623911380377-9137fa85ee27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjA3MzcxM3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: 'Dedicated Support Team',
  feature3Description:
    'Explore lucrative job opportunities abroad with competitive salaries and benefits.',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1508821018848-ecd7deba3d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjA3MzcxM3w&ixlib=rb-4.0.3&q=80&w=1400',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1485684884494-0149f7871a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjA3MzcxNHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgAlt: 'image',
  feature2Description:
    'Fly to your new job with ease. We provide complimentary flight tickets to ensure a smooth transition to your international career.',
  feature1ImgAlt: 'feature 1',
  feature2Title1: undefined,
  feature3Title1: undefined,
  feature1Description1: undefined,
}

Features2.propTypes = {
  feature2ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2Title1: PropTypes.element,
  feature3Title1: PropTypes.element,
  feature1Description1: PropTypes.element,
}

export default Features2
