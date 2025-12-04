import React from 'react'
import { unitType } from '../PageData'
import { Link } from 'react-router-dom';

export const UnitList = () => { 
  return (
    <>
    
    <section className='py-10' id="storage_list">
        <div className="container">
            <h5 className="line-decorative-title section-heading-5"> <span>Our SOLUTIONS </span></h5>

            <div className="top-heading-block calc-btn flex gap-2.5 justify-between items-end">
                <div className="ls-container max-w-[548px]">
                    <div className="heading-info-block">
                        <h2 className="section-heading-h2">Check Out Our Storage Spaces Below</h2>
                        <p className="text-[18px] text-[#4E4E4E] leading-[18px]">Self Storage Units, Shipping Containers and Outside Parking Spaces. </p>
                    </div>
                </div>
                <div className="rs-container ">
                    <div className="storage-filter">
                        <div className="calculator-btn  flex gap-[15px] items-center">
                            <span className="calc-title text-[18px] txet-[-0.02em] font-medium">Not sure what size?</span>
                            <button className="secondary-btn" type="button" id="storage-calculator-btn">Calculate Space</button>
                        </div>
                    </div>
                </div>
            </div>



            <div className='pt-10 flex flex-wrap gap-4'>
            {
                unitType.map((item, index) => {
                    return(
                        <div key={index} unit-type={item.code} facility-code={item.facility_code} direct_signup_link={item.direct_signup_link} movein_days={30} featured_date={1}
                         className="bg-[#f9f9f9] p-5 rounded-[20px] overflow-hidden border border-[#4e4e4e33] relative" 
                        >
                            <div className="info-block flex flex-wrap">
                                <div className="storage-img w-[200px] h-[200px] relative mb-[30px] md:mb-0">
                                    <img src={item.image_url} alt={item.description} className='w-auto max-h-[200px] my-0 mx-auto' />
                                    <div className="inventory-count [&>p]:absolute [&>p]:-left-5 [&>p]:-top-5 [&>p]:text-[12px]  [&>p]:text-white [&>p]:font-medium [&>p]:leading-4 [&>p]:p-[7px] [&>p]:pl-2.5 ">
                                        {
                                            item.total_vacant <= 2 && item.total_vacant > 0 ? 
                                            <p className="inv-text bg-(--primary-color)">Hurry {item.total_vacant} Left </p> : 
                                            item.total_vacant >= 3 && item.total_vacant <= 6 ? 
                                            <p className='inv-text bg-(--primary-color)'>Low Availability</p> :
                                            <p className='inv-text bg-[#ff0c0c]'>Sold Out:Enquire for Availability</p>
                                        }
                                    </div>
                                </div>
                                <div className="storage-details md:flex-1 w-full pl-6">
                                    { item.allowed_to_insure ?
                                    <div className="insurance-detail-block absolute top-5 right-0 flex items-center bg-(--primary-color)">
                                        <span className="block-icon w-[26px] h-[26px] bg-[#000] flex items-center justify-center">
                                            <img data-src="https://www.stornowdigital.com/stornow-growth/v1/wp-content/themes/stornow-growth/images/umbrella-icon.webp" width={16} height={16} alt="Insurance Icon" title="Insurance Available" src="https://www.stornowdigital.com/stornow-growth/v1/wp-content/themes/stornow-growth/images/umbrella-icon.webp" /></span>
                                        <span className="block-text StoreProtect p-[5px] text-[12px] font-medium text-white leading-4">StoreProtect Available</span>
                                    </div> : ''
                                    }
                                    
                                    {
                                        item.promotion_rate_online_sale && item.promotion_rate_online_sale != '' ? 
                                    <div className="offer-details-block absolute top-14 right-0 flex items-center gap-[7px] py-[7px] px-2.5 bg-(--promotion-sale-bg-color) rounded-sm">
                                        <span className="offer-icon">
                                            <svg width={23} height={22} viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.6829 6.439L3.7561 2.6829H6.9756L8.5854 0.2012L11.2683 1.6098L14.4878 0L16.0976 2.6829L19.3171 3.2195L19.8537 6.439L22.5366 8.0488L20.9268 10.7317L22.5366 13.9512L19.8537 16.0976L19.3171 19.3171H16.0976L14.4878 22L11.8049 20.3902L8.5854 22L6.9756 19.3171H3.2195V16.6341L0.5366 14.4878L1.6098 11.2683L0 8.5854L2.6829 6.439Z" fill="var(--secondary-color)" />
                                            <path d="M14.803 6.70599C14.5458 6.96319 14.2886 7.22049 14.0314 7.47769C13.415 8.09399 12.7963 8.71279 12.1799 9.32909C11.4325 10.0765 10.6876 10.8215 9.94023 11.5689C9.29473 12.2143 8.64933 12.8598 8.00383 13.5053C7.69083 13.8183 7.36803 14.1289 7.05993 14.4492C7.05503 14.4541 7.05013 14.4589 7.04533 14.4638C6.77593 14.7331 6.75653 15.2281 7.04533 15.4926C7.33653 15.7596 7.78783 15.7814 8.07423 15.4926C8.33143 15.2354 8.58863 14.9782 8.84583 14.721C9.46223 14.1046 10.0809 13.4859 10.6973 12.8695C11.4447 12.1221 12.1896 11.3772 12.937 10.6298C13.5825 9.98429 14.2279 9.33879 14.8734 8.69339C15.1864 8.38039 15.5092 8.06979 15.8173 7.74939C15.8222 7.74459 15.8271 7.73969 15.8319 7.73489C16.1013 7.46549 16.1207 6.97049 15.8319 6.70599C15.5431 6.43909 15.0918 6.41729 14.803 6.70599Z" fill="white" />
                                            <path d="M9.07997 8.73716C9.04607 8.77116 9.01207 8.80026 8.97567 8.83186C8.88347 8.91436 9.13827 8.72016 8.98537 8.82216C8.91017 8.87306 8.83007 8.91436 8.74757 8.95076C8.80577 8.92646 8.86407 8.90216 8.92227 8.87796C8.78887 8.93376 8.65047 8.97256 8.50737 8.99196C8.57287 8.98226 8.63597 8.97496 8.70147 8.96526C8.57047 8.97986 8.43937 8.97986 8.30597 8.96526C8.37147 8.97496 8.43457 8.98226 8.50007 8.99196C8.35687 8.97256 8.21857 8.93376 8.08507 8.87796C8.14337 8.90216 8.20157 8.92646 8.25987 8.95076C8.17737 8.91436 8.09727 8.87306 8.02207 8.82216C7.86917 8.72016 8.12147 8.91436 8.03177 8.83186C7.99777 8.80026 7.96137 8.77116 7.92737 8.73716C7.89337 8.70326 7.86427 8.66926 7.83277 8.63286C7.75027 8.54066 7.94437 8.79546 7.84247 8.64256C7.79147 8.56736 7.75027 8.48726 7.71387 8.40476C7.73807 8.46296 7.76237 8.52126 7.78667 8.57946C7.73087 8.44596 7.69197 8.30766 7.67257 8.16456C7.68227 8.23006 7.68957 8.29316 7.69927 8.35866C7.68477 8.22756 7.68477 8.09656 7.69927 7.96316C7.68957 8.02866 7.68227 8.09176 7.67257 8.15726C7.69197 8.01406 7.73087 7.87576 7.78667 7.74226C7.76237 7.80056 7.73807 7.85876 7.71387 7.91696C7.75027 7.83446 7.79147 7.75446 7.84247 7.67916C7.94437 7.52636 7.75027 7.77866 7.83277 7.68886C7.86427 7.65496 7.89337 7.61856 7.92737 7.58456C7.96137 7.55056 7.99537 7.52146 8.03177 7.48996C8.12397 7.40746 7.86917 7.60156 8.02207 7.49966C8.09727 7.44866 8.17737 7.40746 8.25987 7.37106C8.20157 7.39526 8.14337 7.41956 8.08507 7.44386C8.21857 7.38806 8.35687 7.34916 8.50007 7.32976C8.43457 7.33946 8.37147 7.34676 8.30597 7.35646C8.43697 7.34186 8.56797 7.34186 8.70147 7.35646C8.63597 7.34676 8.57287 7.33946 8.50737 7.32976C8.65047 7.34916 8.78887 7.38806 8.92227 7.44386C8.86407 7.41956 8.80577 7.39526 8.74757 7.37106C8.83007 7.40746 8.91017 7.44866 8.98537 7.49966C9.13827 7.60156 8.88587 7.40746 8.97567 7.48996C9.00967 7.52146 9.04607 7.55056 9.07997 7.58456C9.11397 7.61856 9.14307 7.65246 9.17467 7.68886C9.25717 7.78116 9.06307 7.52636 9.16497 7.67916C9.21587 7.75446 9.25717 7.83446 9.29357 7.91696C9.26927 7.85876 9.24497 7.80056 9.22077 7.74226C9.27657 7.87576 9.31537 8.01406 9.33477 8.15726C9.32507 8.09176 9.31777 8.02866 9.30807 7.96316C9.32267 8.09416 9.32267 8.22516 9.30807 8.35866C9.31777 8.29316 9.32507 8.23006 9.33477 8.16456C9.31537 8.30766 9.27657 8.44596 9.22077 8.57946C9.24497 8.52126 9.26927 8.46296 9.29357 8.40476C9.25717 8.48726 9.21587 8.56736 9.16497 8.64256C9.06307 8.79546 9.25717 8.54306 9.17467 8.63286C9.14307 8.66926 9.11397 8.70326 9.07997 8.73716C8.81307 9.00896 8.78887 9.49916 9.07997 9.76606C9.36877 10.0306 9.82497 10.0573 10.1089 9.76606C10.4171 9.45056 10.6597 9.03566 10.7301 8.59646C10.8126 8.08926 10.7544 7.61366 10.536 7.14536C10.1574 6.33976 9.22317 5.80106 8.33507 5.89086C7.82547 5.94176 7.38867 6.12376 6.99557 6.45376C6.65587 6.73766 6.40347 7.15996 6.29677 7.58696C6.05897 8.54306 6.45687 9.52096 7.26737 10.067C8.14817 10.6615 9.36387 10.4916 10.1089 9.76366C10.3807 9.49666 10.3952 8.99686 10.1089 8.73476C9.81527 8.46786 9.37117 8.45326 9.07997 8.73716Z" fill="white" />
                                            <path d="M14.9629 14.6144C14.9289 14.6484 14.8949 14.6775 14.8585 14.7091C14.7663 14.7916 15.0211 14.5974 14.8682 14.6994C14.793 14.7503 14.7129 14.7916 14.6304 14.828C14.6887 14.8037 14.7469 14.7794 14.8051 14.7552C14.6717 14.811 14.5333 14.8498 14.3902 14.8692C14.4557 14.8595 14.5188 14.8522 14.5843 14.8425C14.4533 14.8571 14.3222 14.8571 14.1888 14.8425C14.2543 14.8522 14.3174 14.8595 14.3829 14.8692C14.2397 14.8498 14.1014 14.811 13.968 14.7552C14.0262 14.7794 14.0844 14.8037 14.1427 14.828C14.0602 14.7916 13.9801 14.7503 13.9049 14.6994C13.752 14.5974 14.0044 14.7916 13.9146 14.7091C13.8806 14.6775 13.8442 14.6484 13.8102 14.6144C13.7763 14.5805 13.7471 14.5465 13.7156 14.5101C13.6331 14.4179 13.8272 14.6727 13.7253 14.5198C13.6743 14.4446 13.6331 14.3645 13.5967 14.282C13.621 14.3402 13.6452 14.3985 13.6695 14.4567C13.6137 14.3232 13.5749 14.1849 13.5554 14.0418C13.5651 14.1073 13.5724 14.1704 13.5821 14.2359C13.5676 14.1048 13.5676 13.9738 13.5821 13.8403C13.5724 13.9059 13.5651 13.969 13.5554 14.0345C13.5749 13.8913 13.6137 13.753 13.6695 13.6195C13.6452 13.6778 13.621 13.736 13.5967 13.7942C13.6331 13.7117 13.6743 13.6317 13.7253 13.5564C13.8272 13.4036 13.6331 13.6559 13.7156 13.5661C13.7471 13.5322 13.7763 13.4958 13.8102 13.4618C13.8442 13.4278 13.8782 13.3987 13.9146 13.3672C14.0068 13.2847 13.752 13.4788 13.9049 13.3769C13.9801 13.3259 14.0602 13.2847 14.1427 13.2483C14.0844 13.2725 14.0262 13.2968 13.968 13.3211C14.1014 13.2653 14.2397 13.2264 14.3829 13.207C14.3174 13.2167 14.2543 13.224 14.1888 13.2337C14.3198 13.2191 14.4508 13.2191 14.5843 13.2337C14.5188 13.224 14.4557 13.2167 14.3902 13.207C14.5333 13.2264 14.6717 13.2653 14.8051 13.3211C14.7469 13.2968 14.6887 13.2725 14.6304 13.2483C14.7129 13.2847 14.793 13.3259 14.8682 13.3769C15.0211 13.4788 14.7687 13.2847 14.8585 13.3672C14.8925 13.3987 14.9289 13.4278 14.9629 13.4618C14.9968 13.4958 15.0259 13.5297 15.0575 13.5661C15.14 13.6584 14.9459 13.4036 15.0478 13.5564C15.0987 13.6317 15.14 13.7117 15.1764 13.7942C15.1521 13.736 15.1279 13.6778 15.1036 13.6195C15.1594 13.753 15.1982 13.8913 15.2176 14.0345C15.2079 13.969 15.2007 13.9059 15.1909 13.8403C15.2055 13.9714 15.2055 14.1024 15.1909 14.2359C15.2007 14.1704 15.2079 14.1073 15.2176 14.0418C15.1982 14.1849 15.1594 14.3232 15.1036 14.4567C15.1279 14.3985 15.1521 14.3402 15.1764 14.282C15.14 14.3645 15.0987 14.4446 15.0478 14.5198C14.9459 14.6727 15.14 14.4203 15.0575 14.5101C15.0259 14.5465 14.9944 14.5805 14.9629 14.6144C14.6959 14.8862 14.6717 15.3764 14.9629 15.6433C15.2516 15.9078 15.7078 15.9345 15.9917 15.6433C16.2999 15.3278 16.5426 14.9129 16.6129 14.4737C16.6954 13.9665 16.6372 13.4909 16.4188 13.0226C16.0403 12.217 15.106 11.6783 14.2179 11.7681C13.7083 11.819 13.2715 12.001 12.8784 12.331C12.5387 12.6149 12.2863 13.0372 12.1796 13.4642C11.9418 14.4203 12.3397 15.3982 13.1502 15.9442C14.0311 16.5387 15.2468 16.3688 15.9917 15.6409C16.2635 15.3739 16.2781 14.8741 15.9917 14.612C15.6981 14.3451 15.2516 14.3305 14.9629 14.6144Z" fill="white" />
                                            </svg>
                                        </span>
                                        <span className="offer-text text-[14] text-(--promotion-sale-font-color:) font-medium"> {item.promotion_online_description}</span>
                                    </div>
                                    : ''}
                                    <h3 className="storage-title text-[24px] text-black font-medium leading-7.5 mb-5 md:max-w-[calc(100%-210px)] ">{item.description}</h3>
                                    <div className="storage-price flex flex-wrap gap-1.5 mb-[30px]">
                                    <div className="storage-price-inner w-full flex flex-wrap gap-[5px] items-center">
                                        <span className="price text-(--price-text-color) text-[20px] font-medium leading-6.5">${item.monthly_rack_rate_online} per month</span>
                                        {item.monthly_sale_price_online && item.monthly_sale_price_online != '' && item.monthly_sale_price_online != item.monthly_rack_rate_online?
                                        <div className="sale-block">
                                            <span className="strike-through-price text-[#4e4e4e] text-[14px] leading-3.5 line-through ">${item.monthly_sale_price_online}/month</span> 
                                            <span className="sale-badge py-1 px-[11px] bg-(--promotion-sale-bg-color) text-(--promotion-sale-font-color) text-[14px] font-medium uppercase rounded-full ml-1.5">sale</span>
                                        </div> : ''
                                        }
                                    </div>
                                        {
                                            item.promotion_text_online_sale && item.promotion_text_online_sale != '' ?
                                            <p className="offer-desc text-[#ff0000] text-[14px] leading-4 mt-[5px]">{item.promotion_text_online_sale}</p> : ''
                                        }
                                    </div>
                                    <div className="specification-details overflow-hidden flex flex-wrap gap-x-10 gap-y-[15px] mb-5 [&>p]:text-[16px] [&>p]:leading-4 [&>p]:text-[#4e4e4e] [&>p]:relative [&>p]:pl-5 [&>p]:-ml-5 [&>p]:tracking-[-0.04em] [&>p]:capitalize [&>p]:overflow-hidden [&_b]:font-medium [&_b]:text-black [&_b]:uppercase  [&>p]:before:content-[''] [&>p]:before:absolute [&>p]:before:left-0 [&>p]:before:top-0 [&>p]:before:w-px [&>p]:before:h-5 [&>p]:before:bg-[#4e4e4e] ">
                                    <p><b>SQM:&nbsp;</b>{item.area}</p>
                                    <p><b>size:&nbsp;</b>{item.width}m x {item.length}</p>
                                    <p><b>Type:&nbsp;</b>{item.type_category}</p>
                                    {
                                        item.deposit_amount != 0 && item.deposit_amount != '' ?
                                        <p><b>Deposit:&nbsp;</b>${item.deposit_amount}</p> : ''
                                    }
                                     {
                                        item.location && item.location != '' ?
                                        <p><b>Location:&nbsp;</b>{item.location}</p> : ''
                                    }
                                    </div>
                                    {
                                        item.online_description && item.online_description != '' ?
                                        <div className="storage-desc">
                                            <p className='text-[16px] text-[#4e4e4e] leading-5.5 tracking-[-0.04em]'>{item.online_description}</p>
                                        </div>
                                        : ''
                                    }
                                </div>
                                </div>
                                <div className="amenities-block py-7.5 border-b border-[#D9D9D9]" style={{}}>
                                    <ul className='flex flex-wrap gap-x-[15px] gap-y-3'>
                                        {
                                            item.custom_fields.map((amenities, index) => {
                                                return(
                                                    <li key={index} className='flex gap-2.5 items-center w-[calc(50%-8px)] md:w-[calc(33.33%-10px)] lg:w-[calc(16.66%-13px)]'>
                                                        <span className="list-icon">
                                                             <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g clipPath="url(#clip0_1063_47723)">
                                                                <path d="M3.75 26.875H26.25V29.375H3.75V26.875Z" fill="var(--primary-color)" />
                                                                <path d="M27.9629 14.0877L15.0004 3.4877L2.03789 14.0877L0.462891 12.1627L15.0004 0.262695L29.5379 12.1627L27.9629 14.0877Z" fill="var(--primary-color)" />
                                                                <path d="M13.75 9.375H16.25V24.375H13.75V9.375Z" fill="var(--primary-color)" />
                                                                <path d="M15.0008 26.1373L10.3633 21.5123L12.1383 19.7373L15.0008 22.6123L17.8633 19.7373L19.6383 21.5123L15.0008 26.1373Z" fill="var(--primary-color)" />
                                                                <path d="M17.8633 14.0123L15.0008 11.1373L12.1383 14.0123L10.3633 12.2373L15.0008 7.6123L19.6383 12.2373L17.8633 14.0123Z" fill="var(--primary-color)" />
                                                                <path d="M23.75 21.875H26.25V24.375H23.75V21.875Z" fill="var(--primary-color)" />
                                                                <path d="M23.75 16.875H26.25V19.375H23.75V16.875Z" fill="var(--primary-color)" />
                                                                <path d="M23.75 11.875H26.25V14.375H23.75V11.875Z" fill="var(--primary-color)" />
                                                                <path d="M3.75 16.875H6.25V19.375H3.75V16.875Z" fill="var(--primary-color)" />
                                                                <path d="M3.75 21.875H6.25V24.375H3.75V21.875Z" fill="var(--primary-color)" />
                                                                <path d="M3.75 11.875H6.25V14.375H3.75V11.875Z" fill="var(--primary-color)" />
                                                                </g>
                                                                <defs>
                                                                <clipPath id="clip0_1063_47723">
                                                                    <rect width={30} height={30} fill="white" />
                                                                </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </span>
                                                        <span className="list-text text-[16px] text-black font-medium leading-5.5 tracking-[-0.04em]">
                                                            {amenities.field_name.replace("SNU-", "")}
                                                        </span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="bottom-row flex flex-wrap justify-between mt-[25px] gap-5">
                                <div className="storage-location w-[100%] md:w-0">
                                    <div className="storage-loaction-inner flex gap-[5px] items-center leading-none [&_svg]:w-[25px] [&_svg]:h-[25px]">
                                    <span className="location-icon">
                                        <svg width={12} height={16} viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg" style={{fill: 'inherit'}}>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.96792 3.0514C4.17099 1.8543 5.80101 1.18201 7.50041 1.18201C9.19982 1.18201 10.8298 1.8543 12.0329 3.0514C14.4273 5.43969 14.4127 9.25805 11.9976 12.1313L7.50052 17.4821L3.00327 12.1313C0.588375 9.25805 0.57377 5.43906 2.96792 3.0514ZM2.09078 12.894L7.04375 18.7876C7.09961 18.8541 7.16941 18.9076 7.24824 18.9443C7.32707 18.981 7.413 19 7.49999 19C7.58698 19 7.67292 18.981 7.75174 18.9443C7.83057 18.9076 7.90037 18.8541 7.95624 18.7876L12.9092 12.894C14.2019 11.3851 14.9388 9.48099 14.9979 7.49718C15.0214 6.51871 14.8454 5.54568 14.4804 4.63713C14.1155 3.72857 13.5693 2.90345 12.8749 2.21181C11.4469 0.7952 9.51464 0 7.50052 0C5.4864 0 3.55418 0.7952 2.12612 2.21181C1.43155 2.90333 0.885111 3.72841 0.519981 4.63697C0.154852 5.54554 -0.0213531 6.51863 0.00206209 7.49718C0.0611779 9.48099 0.798122 11.3851 2.09078 12.894ZM7.50052 5.05209C7.01072 5.05209 6.53192 5.19696 6.12466 5.46836C5.7174 5.73977 5.39999 6.12553 5.21255 6.57686C5.02511 7.0282 4.97606 7.52483 5.07162 8.00396C5.16718 8.4831 5.40304 8.92321 5.74938 9.26864C6.09572 9.61408 6.53699 9.84932 7.01738 9.94463C7.49777 10.0399 7.99571 9.99102 8.44823 9.80407C8.90075 9.61712 9.28752 9.30054 9.55964 8.89435C9.83176 8.48816 9.97701 8.01061 9.97701 7.52209C9.97611 6.86728 9.71491 6.23955 9.25067 5.77653C8.78643 5.31351 8.15705 5.05299 7.50052 5.05209ZM7.50052 11.1809C8.22593 11.1809 8.93505 10.9663 9.53821 10.5643C10.1414 10.1624 10.6115 9.59106 10.8891 8.92263C11.1667 8.25419 11.2393 7.51867 11.0978 6.80906C10.9563 6.09945 10.6069 5.44764 10.094 4.93604C9.58106 4.42444 8.92753 4.07604 8.21606 3.93489C7.50459 3.79374 6.76713 3.86618 6.09694 4.14305C5.42675 4.41993 4.85392 4.8888 4.45091 5.49038C4.04789 6.09195 3.83278 6.79921 3.83278 7.52272C3.8339 8.49258 4.22068 9.42239 4.90828 10.1082C5.59587 10.794 6.52812 11.1797 7.50052 11.1809Z" fill="var(--primary-color)">
                                        </path>
                                        </svg>
                                    </span>
                                    <span className="location-name text-[16px] font-semibold leading-[1.2]">Hillsdale</span>
                                    </div>
                                </div>
                                <div className="btn-container flex flex-wrap md:flex-nowrap w-full md:w-auto flex-col md:flex-row items-center gap-2.5 [&>a]:!py-2.5 [&>a]:!px-5 [&>a_svg]:w-[17px] [&>a_svg]:h-[17px] ">
                                    <a href="tel:02 9432 2880" className="secondary-btn call-btn justify-center w-full max-w-full md:max-w-max !flex items-center gap-2 pointer-events-auto lg:pointer-events-none" title="Call Us">
                                    <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_62_210)">
                                        <path d="M23.9138 17.066C22.3219 17.066 20.759 16.8171 19.2778 16.3276C18.5521 16.0801 17.6599 16.3071 17.2169 16.7621L14.2935 18.969C10.9031 17.1592 8.81475 15.0715 7.02968 11.7066L9.17164 8.8593C9.72813 8.30355 9.92773 7.49172 9.68859 6.73001C9.19703 5.2411 8.94732 3.67886 8.94732 2.08636C8.94739 0.935932 8.01145 0 6.86109 0H2.0863C0.935932 0 0 0.935932 0 2.0863C0 15.2725 10.7276 26 23.9138 26C25.0641 26 26.0001 25.0641 26.0001 23.9137V19.1523C26 18.002 25.0641 17.066 23.9138 17.066Z" fill="#fff" />
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_62_210">
                                            <rect width={26} height={26} fill="white" />
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    02 9432 2880
                                    </a>
                                    {item.total_vacant > 0 ?
                                     <a className="secondary-btn btn book-now-btn justify-center w-full max-w-full md:max-w-max" href="#" title="Book Online">Book Online</a> : ''
                                    }
                                    {item.show_price_online === 1 ?
                                     <a className="secondary-btn btn book-now-btn justify-center w-full max-w-full md:max-w-max" href="#" title="Book Online">Get Quote</a> : ''
                                    }
                                    <Link className="primary-btn bookin-btn justify-center w-full max-w-full md:max-w-max" to={`/enquire-now/?unit_type=${item.description.replace(' ', '')}`} title="Enquire Now">Enquire Now</Link>
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
