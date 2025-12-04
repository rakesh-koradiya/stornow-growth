import React from 'react'
import { Link } from 'react-router-dom'

export const AboutUs = (props) => {
  return (
    <>
    <section className='py-10'>
        <div className="container">
          {props.decorativeHeading ? <h5 className="line-decorative-title section-heading-5"> <span>About Us</span></h5> : ''}
          <div className="flex flex-wrap items-center">
            <div className="w-full mb-[30px] md:mb-0 md:w-[50%] md:pr-[25px]">
                <img data-src="https://www.stornowdigital.com/stornow-growth/v1/wp-content/webp-express/webp-images/uploads/stornow-media/v1/about-us-page/desktop/3-1721880557.jpg.webp"  alt="Your Local Self Storage Centre" src="https://www.stornowdigital.com/stornow-growth/v1/wp-content/webp-express/webp-images/uploads/stornow-media/v1/about-us-page/desktop/3-1721880557.jpg.webp" className='rounded-[20px] w-full' />
            </div>
            <div className="md:w-[50%]">
                <h2 className="section-heading-h2">Your Local Self Storage Centre</h2>
                <div className="info-text cms-page">
                  <p>Welcome to Your Storage Co, your trusted self-storage facility in Hillsdale. With 20 years of experience, we provide secure, reliable, and flexible storage solutions to meet your needs.</p>
                  <p>Our facilities feature state-of-the-art security, including 24/7 camera surveillance, PIN access gates, and individually alarmed units. We offer a variety of storage options, including self-storage units, containers, and storage for vehicles, boats, and caravans.</p>
                  <p>Our friendly staff is ready to assist you in finding the best storage solution. With convenient access hours and flexible terms, storing your items.</p>
                </div>
                <div className="btn-container pt-[30px] flex flex-wrap gap-[15px]">
                  <Link className="primary-btn btn" to="/enquire-now" title="Get Price">Get Price</Link>
                  <Link className="secondary-btn btn" to="/enquire-now" title="Enquire Now">Enquire Now</Link>
                </div>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}
