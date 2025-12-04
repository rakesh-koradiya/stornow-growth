import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {

    const [isHoursOpen, setIsHoursOpen] = useState(false);
    const openHours = (e) => {
      e.preventDefault();
      setIsHoursOpen(true);
    };

    const closeHours = () => setIsHoursOpen(false);

  return (
    <>
      <footer className="py-[50px] md:pt-[60px] md:pb-[0px] md:pr-[15px] ">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-[100%] md:w-[25%] xl:w-[17%] md:pr-[15px] ">
              <Link
                href="/"
                title="StorNow Growth"
                className="inline-block mb-[32px] w-[100%]"
              >
                <img
                  src="https://www.stornowdigital.com/stornow-growth/v1/wp-content/webp-express/webp-images/uploads/2024/06/Logo_V1.png.webp"
                  srcSet="https://www.stornowdigital.com/stornow-growth/v1/wp-content/webp-express/webp-images/uploads/2024/06/Logo_V1.png.webp 767w, https://www.stornowdigital.com/stornow-growth/v1/wp-content/webp-express/webp-images/uploads/2024/06/Logo_V1.png.webp 1920w"
                  alt="StorNow Growth Logo"
                  title="StorNow Growth Logo"
                  style={{ width: "100%", height: "auto", maxWidth: "150px" }}
                  loading="lazy"
                />
              </Link>

              <div className="social-media-block">
                <span className="inline-block text-[16px] text-black font-medium leading-[21px] mb-[10px]">Follow Us On Social</span>
                <ul className="flex p-0 gap-[10px]">
                  <li>
                    <Link  className="w-[40px] h-[40px] rounded-[100%] bg-black flex items-center justify-center"
                      href="http://facebook.com"
                      title="StorNow Growth Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="11"
                        height="20"
                        viewBox="0 0 11 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M3.00375 11.2891C2.92866 11.2891 1.2766 11.2891 0.525657 11.2891C0.125157 11.2891 0 11.1389 0 10.7635C0 9.7622 0 8.73592 0 7.73467C0 7.33417 0.150188 7.20901 0.525657 7.20901H3.00375C3.00375 7.13392 3.00375 5.6821 3.00375 5.00626C3.00375 4.00501 3.17897 3.05382 3.6796 2.17772C4.20526 1.2766 4.95619 0.675845 5.90738 0.325407C6.53317 0.100125 7.15895 0 7.83479 0H10.2879C10.6383 0 10.7885 0.150188 10.7885 0.500626V3.35419C10.7885 3.70463 10.6383 3.85482 10.2879 3.85482C9.61201 3.85482 8.93617 3.85482 8.26032 3.87985C7.58448 3.87985 7.23404 4.20526 7.23404 4.90613C7.20901 5.65707 7.23404 6.38298 7.23404 7.15895H10.1377C10.5382 7.15895 10.6884 7.30914 10.6884 7.70964V10.7384C10.6884 11.1389 10.5632 11.2641 10.1377 11.2641C9.23654 11.2641 7.30914 11.2641 7.23404 11.2641V19.4243C7.23404 19.8498 7.10889 20 6.65832 20C5.60701 20 4.58073 20 3.52941 20C3.15394 20 3.00375 19.8498 3.00375 19.4743C3.00375 16.8461 3.00375 11.3642 3.00375 11.2891Z"
                          fill="var(--primary-color)"
                        />
                      </svg>
                    </Link>
                  </li>

                  <li>
                    <Link  className="w-[40px] h-[40px] rounded-[100%] bg-black flex items-center justify-center"
                      href="http://instagram.com"
                      title="StorNow Growth Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M10 6.33203C7.97603 6.33203 6.33203 7.97603 6.33203 10C6.33203 12.024 7.97603 13.672 10 13.672C12.024 13.672 13.672 12.024 13.672 10C13.672 7.97603 12.024 6.33203 10 6.33203Z"
                          fill="var(--primary-color)"
                        />
                        <path
                          d="M15.536 0H4.464C2.004 0 0 2.004 0 4.464V15.536C0 18 2.004 20 4.464 20H15.536C18 20 20 18 20 15.536V4.464C20 2.004 18 0 15.536 0ZM10 16.48C6.428 16.48 3.52 13.572 3.52 10C3.52 6.428 6.428 3.524 10 3.524C13.572 3.524 16.48 6.428 16.48 10C16.48 13.572 13.572 16.48 10 16.48ZM16.616 4.7C15.86 4.7 15.244 4.088 15.244 3.332C15.244 2.576 15.86 1.96 16.616 1.96C17.372 1.96 17.988 2.576 17.988 3.332C17.988 4.088 17.372 4.7 16.616 4.7Z"
                          fill="var(--primary-color)"
                        />
                      </svg>
                    </Link>
                  </li>

                  <li>
                    <Link className="w-[40px] h-[40px] rounded-[100%] bg-black flex items-center justify-center"
                      href="https://youtube.com"
                      title="StorNow Growth Youtube"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <g clipPath="url(#clip0_74_237)">
                          <path
                            d="M19.5577 4.94068L19.5827 5.10402C19.3411 4.24652 18.6886 3.58485 17.8594 3.34402L17.8419 3.33985C16.2827 2.91652 10.0086 2.91652 10.0086 2.91652C10.0086 2.91652 3.75025 2.90818 2.17525 3.33985C1.33025 3.58485 0.676912 4.24652 0.439412 5.08652L0.435245 5.10402C-0.147255 8.14652 -0.151422 11.8023 0.461078 15.0598L0.435245 14.8948C0.676912 15.7523 1.32941 16.414 2.15858 16.6548L2.17608 16.659C3.73358 17.0832 10.0094 17.0832 10.0094 17.0832C10.0094 17.0832 16.2669 17.0832 17.8427 16.659C18.6886 16.414 19.3419 15.7523 19.5794 14.9123L19.5836 14.8948C19.8486 13.4798 20.0002 11.8515 20.0002 10.1882C20.0002 10.1273 20.0002 10.0657 19.9994 10.004C20.0002 9.94735 20.0002 9.87985 20.0002 9.81235C20.0002 8.14818 19.8486 6.51985 19.5577 4.94068ZM8.00691 13.0423V6.96485L13.2286 10.0082L8.00691 13.0423Z"
                            fill="var(--primary-color)"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_74_237">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-[100%] md:w-[25%] xl:w-[17%] md:pr-[15px] ">
              <h4 className="mb-[12px] md:mb-[22px] lg:mb-[42px] text-[22px] md:text-[24px] font-medium text-black">Quick Links</h4>
              <div className="quick-links footer-col-inner">
                <ul className="[&>li]:mt-[10px] [&>li>a]:text-[#4e4e4e] [&>li>a]:font-medium [&>li>a]:text-[16px] [&>li>a]:hover:text-var(--primary-color) [&>li>a]:transition-colors [&>li>a]:duration-300">
                  <li >
                    <Link to="/" title="Home">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/why-us" title="Why Us">
                      Why Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/enquire-now" title="Unit Sizes & Prices">
                      Unit Sizes &amp; Prices
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" title="FAQ">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="contact/" title="Contact Us">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-[100%] md:w-[25%] xl:w-[52%] md:pr-[15px] ">
              <h4 className="mb-[12px] md:mb-[22px] lg:mb-[42px] text-[22px] md:text-[24px] font-medium text-black">Contact</h4>
              <div className="contact-col-inner footer-col-inner">
                <div className="flex flex-wrap gap-[17px] justify-between xl:[&>.contact-block]:w-[calc(33.33%-12px)] [&>.contact-block]:w-[100%] ">
                  <div className="address-block contact-block">
                    <div className="text-[16px] font-medium text-[#000] mb-[10px]">Hillsdale</div>
                    <p className="text-[16px] text-[#4e4e4e] leading-[24px]">24 Perkins St<br />Hillsdale NSW 2580</p>
                  </div>

                  <div className="access-hours contact-block">
                    <div className="text-[16px] font-medium text-[#000] mb-[10px]">Access Hours</div>
                    <p className="text-[16px] text-[#4e4e4e] leading-[24px]">24/7 Access</p>
                  </div>

                  <div className="opening-hours contact-block">
                    <div className="text-[16px] font-medium text-[#000] mb-[10px]">Office Hours</div>
                    <p className="text-[16px] text-[#4e4e4e] leading-[24px] capitalize">
                     monday - friday<br/> 8:00am - 5:00pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[100%] md:w-[20%] xl:w-[14%]">
              <h4 className="mb-[12px] md:mb-[22px] lg:mb-[42px] text-[22px] md:text-[24px] font-medium text-black">Memberships</h4>
              <div className="flex flex-wrap gap-[20px] [&>a]:inline-block [&>a]:w-[100%] [&>a>img]:w-[auto]">
                <Link to="/" target="_blank" rel="noopener noreferrer" title="SSAA">
                  <img
                    src="https://www.stornowdigital.com/stornow-growth/v1/wp-content/webp-express/webp-images/uploads/2024/08/SSAA_Logo.png.webp"
                    width={122}
                    height={40}
                    alt="SSAA"
                    title="SSAA"
                    loading="lazy"
                  />
                </Link>

                <Link to="/" target="_blank" rel="noopener noreferrer" title="FAB">
                  <img
                    src="https://www.stornowdigital.com/stornow-growth/v1/wp-content/webp-express/webp-images/uploads/2024/07/FBA_Logo_Stack_POS_RGB-1.jpg.webp"
                    width={62}
                    height={40}
                    alt="FAB"
                    title="FAB"
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="py-[20px] mt-[50px] border-t border-[rgba(0,0,0,.1)] flex justify-center items-center gap-[15px] text-[16px] text-[#4e4e4e] leading-[26px]">
            <div className="copyright-text">
              Copyright © 2025{" "}
              <Link to="/" title="StorNow Growth"  className="text-var(--primary-color)  text-[16px] transition-colors duration-300 hover:text-[#000]">
                StorNow Growth
              </Link>
              . All rights reserved.&nbsp;Powered By :{" "}
              <Link to="/"  className="text-var(--primary-color) text-[16px] transition-colors duration-300 hover:text-[#000]">
                Storman
              </Link>
            </div>

            <div className="flex items-center gap-[15px]">
              <Link to="/"  className="text-var(--primary-color) font-medium text-[16px] underline transition-colors duration-300 hover:text-[#000] leading-px" title="Privacy Policy">
                Privacy Policy
              </Link>

              <span className="inline-block w-px h-[15px] bg-[#000] " />

              <Link to="/"  className="text-var(--primary-color) font-medium text-[16px] underline transition-colors duration-300 hover:text-[#000] leading-px" title="Facility Rules">
                Facility Rules
              </Link>
            </div>
          </div>

          <div className="flex md:hidden">
            <Link to="/enquire-now" className="primary-btn btn" title="Get Price">
              Get Price
            </Link>
            <Link to="tel:02 9432 2880" className="secondary-btn btn" title="Call Us">
              Call Us
            </Link>
          </div>

          {/* Opening hours popup */}
          {isHoursOpen && (
            <div className="opening-hours-popup opening-hour-pop" role="dialog" aria-modal="true">
              <div id="overlay" onClick={closeHours} style={{ position: "fixed", inset: 0, zIndex: 50 }} />
              <div className="opening-hours-popup-inner" style={{ zIndex: 60 }}>
                <button id="closePopup" className="close" onClick={closeHours} aria-label="Close popup">
                  x
                </button>
                <h3 className="opening-hour-title">Opening Hours</h3>
                <div className="hours-list">
                  <p>
                    <span className="week-day">monday - friday</span>
                    <span className="opening-time"> 8:00am - 5:00pm</span>
                  </p>
                  <p>
                    <span className="week-day">saturday - sunday</span>
                    <span className="opening-time"> 8:00am - 5:00pm <br /> ( open by appointment )</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </footer>

    </>
  )
}
