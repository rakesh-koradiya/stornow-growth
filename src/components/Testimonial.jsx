import React from 'react'
import { PageData } from '../PageData'
import Slider from 'react-slick';

export const Testimonial = (props) => {
    const testimonials = PageData.home.testimonial;
    
    const testimonialSlider = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:false,
        dots:true,
        responsive:[
             {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
             {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }
    
  return (
    <>
    
    <section className='testimonial-slider bg-(--primary-color) py-[50px] md:py-[65px] lg:py-[80px]'>
        <div className="w-full container">
            <h5 className='uppercase text-center !mb-5 md:!mb-10 !text-white text-[20px] leading-6 !font-semibold'>Testimonials</h5>
            <h2 className='section-heading-h2 text-center !text-white capitalize'>Hear from trusted clients</h2>
          
            <div className="flex items-center justify-center gap-2.5 py-2.5 px-5.5 bg-[#ffffff2e] max-w-max mx-auto rounded-full mb-[30px]">
                <span data-rating={Number(props.rating).toFixed(1)}
                 className="rating-star relative text-[24px] 
                            before:content-['★★★★★'] before:text-white 
                            after:content-['★★★★★'] after:absolute after:left-0 after:top-0 after:text-[#FFD74A] after:overflow-hidden after:whitespace-nowrap">
                    </span>
                <div className="text-block">
                    <p className='text-[20px] font-medium leading-[21px] text-black'>Exceptional {Number(props.rating).toFixed(1)} rating</p>
                </div>
            </div>

          
                <Slider {...testimonialSlider}>
                        {
                            testimonials.map((item) => {
                                return(
                                    <div className='px-[5px]'>
                                        <div className='bg-white p-[35px] rounded-[20px]'>
                                            <div>
                                                <span data-rating={Number(item.rating).toFixed(1)}
                                                    className="rating-star relative text-[24px] 
                                                    before:content-['★★★★★'] before:text-white 
                                                    after:content-['★★★★★'] after:absolute after:left-0 after:top-0 after:text-[#FFD74A] after:overflow-hidden after:whitespace-nowrap"></span>   
                                            </div>
                                            <div className='my-5'>
                                                <p className='text-[#4E4E4E] text-[18px] leading-[26px]'>{item.text}</p>
                                            </div>
                                            <div className="client-details flex items-center gap-[20px]">
                                                <div className="client-thumbnail text-[22px] lg:text-[28px] font-bold w-[50px] h-[50px] lg:w-[72px] lg:h-[72px] bg-(--secondary-color) rounded-full flex items-center justify-center text-white">{item.client_thumbnail}</div>
                                                <div className="client-name text-[20px] lg:text-[24px] font-medium text-black">{item.client_name}</div>
                                            </div>
                                        </div> 
                                     </div>
                                )
                            })
                        }
              </Slider>
           
        </div>
    </section>
    
    </>
  )
}
