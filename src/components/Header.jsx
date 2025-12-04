import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {


  const [isFixed, setIsFixed] = useState(false);


  useEffect(() => {
    const fixedHeader = () => {
        if(window.scrollY > 100){
          setIsFixed(true)
        } else {
          setIsFixed(false)
        }
    }

    window.addEventListener('scroll', fixedHeader);
    return () => window.removeEventListener("scroll", fixedHeader);
  },[])
    
  return (
    <>
     <header className={`py-[22px] transition-colors duration-200 w-full bg-white z-10 ${isFixed ? `fixed left-0 top-0 shadow-[0px_8px_24px_#959da533]` : ``}`}>
      <div className="container">
        <div className="flex items-center gap-[10px] justify-between">
          <div className="">
            <Link
              to="/"
              title=""
            >
              <img
                src="https://www.stornowdigital.com/stornow-growth/v1/wp-content/webp-express/webp-images/uploads/2024/06/Logo_V1.png.webp"
                alt="StorNow Growth Logo"
                title="StorNow Growth Logo"
                width={145}
                height={50}
                loading="lazy"
              />
            </Link>
          </div>

          <div className="pl-[10px] flex flex-wrap gap-[30px] items-center">
            <div className="lg:hidden">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="navigation-block">
              <ul className='flex gap-[20px] lg:gap-[40px] items-center'>
                <li className="menu-item">
                  <Link to="/enquire-now" className='text-[16px] text-[#000] font-medium'> Unit Sizes &amp; Prices </Link>
                </li>

                <li className="menu-item has-child-item">
                  <Link to="/why-us" className='text-[16px] text-[#000] font-medium'>Why Us</Link>
                </li>

                <li className="menu-item">
                  <Link to="/faq" className='text-[16px] text-[#000] font-medium'>FAQ</Link>
                </li>

                <li className="menu-item">
                  <Link to="/contact" className='text-[16px] text-[#000] font-medium'>Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-[10px]">
              <Link className="w-[46px] h-[46px] bg-[var(--primary-color)] rounded-[8px] text-white flex items-center justify-center" to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="31"
                  viewBox="0 0 28 31"
                  fill="#fff"
                  aria-hidden="true"
                >
                  <path
                    d="M16.1002 9.15799e-06H4.64037C3.40966 9.15799e-06 2.22937 0.488903 1.35913 1.35914C0.488894 2.22938 0 3.40967 0 4.64038V26.1123C0 27.343 0.488894 28.5233 1.35913 29.3935C2.22937 30.2637 3.40966 30.7526 4.64037 30.7526H16.1002C16.7107 30.7541 17.3155 30.6352 17.88 30.4027C18.4445 30.1702 18.9576 29.8287 19.39 29.3977C19.8223 28.9667 20.1655 28.4547 20.3998 27.8909C20.6341 27.3272 20.7549 26.7228 20.7554 26.1123V23.5656C22.7172 22.8173 24.4052 21.4902 25.5953 19.7604C26.7854 18.0305 27.4214 15.9797 27.419 13.88C27.4166 11.7803 26.7759 9.73098 25.5818 8.00388C24.3877 6.27678 22.6967 4.95356 20.7332 4.20975C20.6248 3.05674 20.0897 1.9858 19.2326 1.20699C18.3755 0.428184 17.2583 -0.00228943 16.1002 9.15799e-06ZM18.8993 26.1123C18.8983 26.8504 18.6046 27.558 18.0827 28.0799C17.5608 28.6019 16.8532 28.8955 16.1151 28.8965H4.64037C3.90194 28.8965 3.19377 28.6032 2.67163 28.081C2.14948 27.5589 1.85615 26.8507 1.85615 26.1123V4.64038C1.85615 3.90195 2.14948 3.19378 2.67163 2.67163C3.19377 2.14949 3.90194 1.85616 4.64037 1.85616H16.1002C16.6665 1.85904 17.2184 2.03427 17.6826 2.35856C18.1468 2.68284 18.5013 3.14078 18.6988 3.67147C18.1515 3.58169 17.5978 3.53699 17.0431 3.53782C14.2972 3.53782 11.6637 4.62864 9.72205 6.57032C7.78037 8.51199 6.68955 11.1455 6.68955 13.8914C6.68955 16.6374 7.78037 19.2708 9.72205 21.2125C11.6637 23.1542 14.2972 24.245 17.0431 24.245C17.6654 24.2448 18.2865 24.1902 18.8993 24.0816V26.1123ZM25.548 13.8914C25.548 15.5717 25.0498 17.2143 24.1164 18.6116C23.1831 20.0088 21.8564 21.0979 20.3041 21.7413C18.7518 22.3847 17.0437 22.5534 15.3955 22.2261C13.7474 21.8988 12.2333 21.0903 11.0446 19.9026C9.85591 18.715 9.04602 17.2016 8.7173 15.5537C8.38859 13.9059 8.55581 12.1976 9.19782 10.6447C9.83983 9.09189 10.9278 7.76426 12.3242 6.82965C13.7207 5.89505 15.3628 5.39544 17.0431 5.39397C19.2972 5.39495 21.4587 6.29029 23.0533 7.88345C24.6478 9.4766 25.545 11.6374 25.548 13.8914ZM17.9786 8.11137V9.34385H20.8037V11.2H15.187C15.0574 11.1919 14.9276 11.2104 14.8055 11.2544C14.6834 11.2984 14.5716 11.3669 14.477 11.4558C14.3823 11.5447 14.3069 11.652 14.2554 11.7711C14.2039 11.8903 14.1773 12.0187 14.1773 12.1485C14.1773 12.2783 14.2039 12.4067 14.2554 12.5258C14.3069 12.645 14.3823 12.7523 14.477 12.8412C14.5716 12.93 14.6834 12.9986 14.8055 13.0426C14.9276 13.0866 15.0574 13.1051 15.187 13.097H18.929C19.6552 13.1234 20.3428 13.4305 20.8472 13.9535C21.3516 14.4766 21.6334 15.175 21.6334 15.9016C21.6334 16.6283 21.3516 17.3266 20.8472 17.8497C20.3428 18.3728 19.6552 18.6798 18.929 18.7063H17.9786V20.0427H16.1225V18.7174H13.2974V16.8612H18.929C19.1703 16.8461 19.3967 16.7396 19.5623 16.5634C19.7278 16.3872 19.82 16.1545 19.82 15.9128C19.82 15.671 19.7278 15.4383 19.5623 15.2621C19.3967 15.0859 19.1703 14.9794 18.929 14.9643H15.187C14.8101 14.978 14.4343 14.9156 14.0821 14.7808C13.7298 14.646 13.4083 14.4417 13.1369 14.1799C12.8654 13.9181 12.6494 13.6043 12.5019 13.2572C12.3545 12.91 12.2784 12.5368 12.2784 12.1596C12.2784 11.7825 12.3545 11.4092 12.5019 11.0621C12.6494 10.715 12.8654 10.4012 13.1369 10.1394C13.4083 9.87759 13.7298 9.6732 14.0821 9.53843C14.4343 9.40366 14.8101 9.34127 15.187 9.35499H16.1336V8.11137H17.9786ZM8.7276 25.2065H12.0093V27.0626H8.7276V25.2065Z"
                    fill="inherit"
                  />
                </svg>
              </Link>

              <Link
              to="/enquire-now"
                className="primary-btn header-btn tablet-hide"
                title="Get Prices"
              >
                Get Prices
              </Link>

              <Link
                to="/enquire-now"
                className="secondary-btn header-btn tablet-hide"
                title="Enquire Now"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}
