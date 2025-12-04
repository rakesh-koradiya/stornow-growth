import React from 'react'
import { Hero } from '../components/Hero'
import { FacilityFeatures } from '../components/FacilityFeatures'
import { LocationDetails } from '../components/LocationDetails'
import { UnitList } from '../components/UnitList'
import { AboutUs } from '../components/AboutUs'
import { Testimonial } from '../components/Testimonial'
import { FaqList } from '../components/FaqList'
import { CTA } from '../components/CTA'


export const Home = () => {
  return (
    <>
       <Hero/>
       <FacilityFeatures/>
       <LocationDetails location="Hillsdale"/>
       <UnitList/>
       <AboutUs decorativeHeading={true} />
       <Testimonial rating={5}/>
       <FaqList decorativeHeading={true} title='Frequently asked questions'/>
       <CTA title="Can’t Find The Right Storage Space Or Would Like Some Help?"/>
    </>
  )
}
