import React from 'react'

export const EnquireNow = () => {
  return (
    <>

    <section className='py-10 md:py-[60px] '>
      <div className="container">
        <h2 className="section-heading-h2 mb-2.5!">Enquire Now</h2>
        <p className="text-[20px] font-medium text-black leading-[26px] mb-[10px]">Complete this quick form to receive a quote.</p>
        <p className="text-[17px] text-[#4e4e4e] leading-[20px] mb-[25px]">Looking to store with StorNow Growth? Simply fill in the form below and we will provide a quotation for you.</p>

        <form 
        className='flex flex-wrap gap-5 [&_input,select,textarea,textarea]:border [&_input,select,textarea]:border-[#a7a7a7] [&_input,select,textarea]:h-[50px] [&_input,select,textarea]:px-[15px] [&_input,select,textarea]:py-2.5 [&_input,select,textarea]:w-full [&_input,select,textarea]:rounded-lg [&_label]:mb-1.5 [&_label]:inline-block
        [&_div]:w-full sm:[&_div]:w-[calc(50%-10px)]
        '>
          <div>
            <label htmlFor='name'>Name</label>
            <input type="text" id="name" required />           
          </div>
          <div>
            <label htmlFor='phone_number'>Phone Number</label>
            <input type="tel" id="phone_number" required />           
          </div>
           <div>
            <label htmlFor='email'>Email Address</label>
            <input type="email" id="email" required />           
          </div>
          <div>
            <label htmlFor='suburb'>Your Suburb</label>
            <input type="text" id="suburb" required />           
          </div>
          <div>
            <label htmlFor='date'>Estimated Move-in Date</label>
            <input type="date" id="date" required />           
          </div>
          <div>
            <label htmlFor='storage_term'>Estimated Storage Term (Months)</label>
            <input type="number" id="storage_term" required />           
          </div>
          <div>
            <label htmlFor='customer_type'>Customer Type</label>
            <select name="customer_type" id="customer_type">
              <option value="" selected disabled>—Please choose an option—</option>
              <option value="Individual">Individual</option>
              <option value="Organisation">Organisation</option>
              </select>     
          </div>
          <div>
            <label htmlFor='unit_type'>Select Unit Type</label>
            <select name="unit_type" id="unit_type">
              <option value="" selected disabled>—Please choose an option—</option>
              <option value="1.5m x 1.5m">1.5m x 1.5m</option>
              <option value="1.5m x 3m">1.5m x 3m</option>
              </select>     
          </div>

          <div className='w-full!'>
            <label htmlFor='how_find_us'>How did you find us?</label>
            <select name="how_find_us" id="how_find_us">
              <option value="" selected disabled>—Please choose an option—</option>
              <option value="Location">Location</option>
              <option value="Skykiwi Website">Skykiwi Website</option>
              <option value="Signage">Signage</option>
              </select>     
          </div>

          <div className='w-full!'>
            <label htmlFor='comments'>Notes / Comments</label>
            <textarea name="comments" id="comments" className='h-[150px]!'></textarea>
          </div>

          <div>
            <button type='submit' className='secondary-btn cursor-pointer transition-all duration-300'>Submit</button>
          </div>
        </form>
     
      </div>
    </section>


    </>
  )
}
