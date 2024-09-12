import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-contact20 thq-section-padding">
      <div className="contact-max-width thq-section-max-width">
        <div className="contact-section-title">
          <span className="thq-body-small">{props.content2}</span>
          <div className="contact-content1">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="contact-text12 thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact-row">
          <div className="contact-content2">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact-contact-info1">
              <div className="contact-content3">
                <h3 className="contact-text13 thq-heading-3">Email</h3>
                <p className="contact-text14 thq-body-large">
                  {props.content3}
                </p>
              </div>
              <span>
                {props.email ?? (
                  <Fragment>
                    <span className="contact-email2 thq-body-small">
                      <span>sambhavcareer@gmail</span>
                      <br></br>
                      <span>.com</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact-content4">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact-contact-info2">
              <div className="contact-content5">
                <h3 className="contact-text15 thq-heading-3">Phone</h3>
                <p className="contact-text16 thq-body-large">
                  {props.content4}
                </p>
              </div>
              <span>
                {props.phone1 ?? (
                  <Fragment>
                    <span className="contact-phone5 thq-body-small">
                      <span>+91 87880 83541</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.phone11 ?? (
                  <Fragment>
                    <span className="contact-phone6 thq-body-small">
                      <span>+91 93731 68172</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.phone ?? (
                  <Fragment>
                    <span className="contact-phone4 thq-body-small">
                      <span>+91 94033 04652</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact-content6">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="contact-contact-info3">
              <div className="contact-content7">
                <h3 className="contact-text17 thq-heading-3">Office</h3>
                <p className="thq-body-large">{props.content5}</p>
              </div>
              <span>
                {props.address ?? (
                  <Fragment>
                    <span className="contact-address2 thq-body-small">
                      <span>B203 VISION BOULEVARD</span>
                      <br></br>
                      <span>Kate Vasti Pimple Saudagar, Kunj Colony,</span>
                      <br></br>
                      <span>
                        Pimple Saudagar, Pimpri-Chinchwad, Maharashtra 411027
                      </span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact.defaultProps = {
  content3:
    'Feel free to contact us via email or phone during our office hours.',
  heading1: 'Contact Us',
  content2: 'Our team is ready to help you achieve your career goals.',
  content4: 'We look forward to hearing from you!',
  content1:
    'Reach out to us for any inquiries or assistance regarding job opportunities abroad.',
  content5: 'Office Hours: Monday - Friday, 9:00 AM - 7:00 PM',
  address: undefined,
  phone: undefined,
  phone1: undefined,
  phone11: undefined,
  email: undefined,
}

Contact.propTypes = {
  content3: PropTypes.string,
  heading1: PropTypes.string,
  content2: PropTypes.string,
  content4: PropTypes.string,
  content1: PropTypes.string,
  content5: PropTypes.string,
  address: PropTypes.element,
  phone: PropTypes.element,
  phone1: PropTypes.element,
  phone11: PropTypes.element,
  email: PropTypes.element,
}

export default Contact
