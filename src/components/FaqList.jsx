import React, { useState } from 'react'
import { PageData } from '../PageData'

export const FaqList = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFaq = (index) => {
        activeIndex === index ? '' : setActiveIndex(index)
    }
    const faqs = PageData.home.faqs;  
  return (
    <>
    
    <section className='pt-10 pb-20'>
        <div className="container">
            {props.decorativeHeading ? <h5 className="line-decorative-title section-heading-5"> <span>Questions</span></h5>: ''}
            {props.title ? <h3 className="section-heading-h2">{props.title}</h3> : ''}

            <div>

                {
                    faqs.map((item, index) => {
                       return(
                        <div key={index}>
                            <div className={`faq-item border-b border-[rgb(0_0_0_/0.1)]  
                                ${activeIndex === index ? '[&_.question]:pb-5 [&_.answer]:inline-block'
                                    :'[&_.question]:cursor-pointer'}`
                                } 
                                onClick={() => toggleFaq(index)}>
                                <div className="question py-5 md:py-7 lg:py-10 text-[20px] md:text-[24px] font-medium text-black leading-[1.2] relative after:content-['+'] after:absolute after:right-0 after:text-[26px] after:top-[15px] md:after:top-[26px] lg:after:top-[38px]">{item.question}</div>
                                <div className="answer cms-page hidden pb-[30px]">
                                    <p className='text-[18px] leading-[1.3]'>{item.answer}</p>
                                </div>
                            </div>
                        </div>
                       )
                    })
                }

            </div>
        </div>
    </section>

    </>
  )
}
