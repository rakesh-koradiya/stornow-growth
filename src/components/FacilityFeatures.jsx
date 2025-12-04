import React from 'react'
import { PageData } from '../PageData'

export const FacilityFeatures = () => {
    const facilityData = PageData.home.facility.facilityItems;
      
  return (
    <>
    <section className="py-[30px]">
        <div className="container">
            <h5 className="line-decorative-title section-heading-5"> <span>Our Facility Features </span></h5>
            <div className="flex flex-wrap gap-x-[10px] gap-y-[20px]">
                {facilityData.map((item, index) => {
                    return(
                        <h3 className="flex items-center text-[16px] leading-[1.2] md:text-[17px] font-medium flex gap-[10px] w-[calc(50%-13px)] md:w-[calc(20%-8px)]" key={index}>
                            <span className="block-icon">
                            <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2081_2153)">
                                    <path d="M12.5484 34.4486C11.9859 35.2484 12.1839 36.3493 12.9832 36.9049L14.1913 37.7438C12.2195 39.6464 9.57516 40.7229 6.81328 40.7229H3.51562V36.9143C3.51562 35.9435 2.72859 35.1564 1.75781 35.1564C0.787031 35.1564 0 35.9435 0 36.9143V54.8439C0 55.8147 0.787031 56.6018 1.75781 56.6018C2.72859 56.6018 3.51562 55.8147 3.51562 54.8439V51.2697H5.89828C12.2067 51.2697 18.3759 48.6171 22.7583 43.6934L24.5168 44.9146C25.3152 45.4722 26.4229 45.2676 26.9719 44.46L28.1766 42.6916L13.916 32.5068L12.5484 34.4486Z" fill="var(--primary-color)"></path>
                                    <path d="M59.234 34.6061L58.5859 34.1631L45.1035 44.9361L48.9613 47.7135C49.7147 48.2557 50.7682 48.1187 51.3555 47.39L59.6102 37.1619C60.2573 36.3598 60.0771 35.1811 59.234 34.6061Z" fill="var(--primary-color)"></path>
                                    <path d="M56.5047 28.4738L22.7046 4.0643C21.1864 2.96766 19.0784 3.25266 17.9056 4.71259L6.79729 18.539C5.53401 20.1117 5.85288 22.4291 7.49491 23.6018L37.3978 44.9563C38.0368 45.4126 38.9021 45.3901 39.5165 44.8991L56.5728 31.2722C57.4791 30.5482 57.4478 29.1547 56.5047 28.4738ZM44.0633 31.5823C43.0925 31.5823 42.3055 30.7952 42.3055 29.8245C42.3055 28.8537 43.0925 28.0666 44.0633 28.0666C45.034 28.0666 45.8211 28.8537 45.8211 29.8245C45.8211 30.7952 45.034 31.5823 44.0633 31.5823Z" fill="var(--primary-color)"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2081_2153">
                                        <rect width="60" height="60" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                            </span>
                            {item.title}                            
                        </h3>
                    )
                })}
            </div>
        </div>
    </section>
    </>
  )
}
