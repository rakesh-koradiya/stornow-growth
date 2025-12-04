import React from 'react'
import Slider from "react-slick";
import { PageData } from '../PageData'
import { Link } from 'react-router-dom';

export const Hero = () => {  
  const bannerData = PageData.home.banner.bannerItems;
   const heroSlickSetting = {
    dots: true,
    arrows:false,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
     <section>
        <Slider {...heroSlickSetting}>
        {
          bannerData.map((item, index) => {
            return(
              <div key={index} className='pt-[50px] pb-[80px] md:py-[134px] relative min-h-[350px] md:min-[460px] lg:min-h-[560px]'>                   
                <div className="absolute w-full h-full left-0 top-0 before:content-[''] before:absolute before:w-full before:h-full before:left-0 before:t-0 before:bg-black before:opacity-20">
                    <img width="952" height="756" src={item.img} title="" alt="" className="w-full h-full object-center object-cover" />
                </div>
                <div className="container relative z-1">
                    <div>
                        <h1 className="max-w-[640px] text-[32px] md:text-[44px] lg:text-[55px] xl:text-[64px] !text-white mb-[25px] md:mb-[40px] font-bold">{item.title}</h1>
                        <div className='flex flex-wrap gap-[20px] flex-col md:flex-row'>
                            <Link className="primary-btn btn  max-w-[180px]" to="/enquire-now" title="Get Prices">Get Prices</Link>
                            <Link className="secondary-btn btn max-w-[180px]" to="/enquire-now" title="Enquire Now">Enquire Now</Link>
                        </div> 
                    </div>
                </div>
              </div>
            )
          })
        }
        </Slider>
      </section>
    </>
  )
}
